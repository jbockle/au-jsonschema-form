import { JsonPointer } from 'jsonpointerx';

import {
  JsonSchemaType,
  JsonSchema,
  JsonSchemaObject, JsonSchemaArray, JsonSchemaString, JsonSchemaNumber, JsonSchemaBoolean, JsonSchemaAllOf,
} from '../models';
import utils from '.';
import { JsonSchemaDefaultResolver } from './json-schema-default-resolver';

export class JsonSchemaUtils {

  public static isNullable(type: JsonSchemaType[]): type is ['null', JsonSchemaType] {
    return type.length === 2 && type.includes('null');
  }

  public static isJsonSchemaNumber(schema: JsonSchema): schema is JsonSchemaNumber {
    return this.isSchemaType<JsonSchemaNumber>(schema, 'number') || this.isSchemaType<JsonSchemaNumber>(schema, 'integer');
  }

  public static isJsonSchemaString(schema: JsonSchema): schema is JsonSchemaString {
    return this.isSchemaType<JsonSchemaString>(schema, 'string');
  }

  public static isJsonSchemaBoolean(schema: JsonSchema): schema is JsonSchemaBoolean {
    return this.isSchemaType<JsonSchemaBoolean>(schema, 'boolean');
  }

  public static isJsonSchemaObject(schema: JsonSchema): schema is JsonSchemaObject {
    return this.isSchemaType<JsonSchemaObject>(schema, 'object');
  }

  public static isJsonSchemaArray(schema: JsonSchema): schema is JsonSchemaArray {
    return this.isSchemaType<JsonSchemaArray>(schema, 'array');
  }

  public static isJsonSchemaAllOf(schema: JsonSchema): schema is JsonSchemaAllOf {
    return 'allOf' in schema && Array.isArray(schema.allOf);
  }

  private static isSchemaType<TSchemaType extends JsonSchema>(schema: JsonSchema, type: JsonSchemaType): schema is TSchemaType {
    if (Array.isArray(schema.type)) {
      return this.isNullable(schema.type) && schema.type.includes(type);
    }

    return 'type' in schema && schema.type === type;
  }

  public static getSchemaType(schema: JsonSchema): JsonSchemaType | undefined {
    if (Array.isArray(schema.type)) {
      if (schema.type.length === 1) {
        return schema.type[0];
      }

      if (this.isNullable(schema.type)) {
        return schema.type.filter(t => t !== 'null')[0];
      }
    } else {
      return schema.type;
    }
  }

  public static getItemJsonSchema(index: number, schema: JsonSchemaArray, root: JsonSchema): JsonSchema | undefined {
    if (schema.items) {
      if (Array.isArray(schema.items)) {
        schema.items = this.resolveSchemas(schema.items, root);
        if (index in schema.items) {
          return schema.items[index];
        }
        else if (!schema.additionalItems) {
          return utils.array.last(schema.items);
        }
      } else if (schema.items) {
        return this.resolveSchema(schema.items, root);
      }
    }

    if (schema.additionalItems) {
      schema.additionalItems = this.resolveSchema(schema.additionalItems, root) as JsonSchema;

      return schema.additionalItems;
    }
  }

  public static resolveSchemas(schemas: JsonSchema[], root: JsonSchema): JsonSchema[] {
    return schemas.map(schema => this.resolveSchema(schema, root));
  }

  public static resolveSchema(schema: JsonSchema, root: JsonSchema): JsonSchema {
    if ('$ref' in schema) {
      return this.resolveSchema(JsonPointer.compile(schema.$ref).get(root), root);
    }
    else if (this.isJsonSchemaAllOf(schema)) {
      return this.mergeAllOf(schema, root);
    }
    else {
      return schema;
    }
  }

  public static mergeAllOf(schema: JsonSchemaAllOf, root: JsonSchema): JsonSchema {
    const resolved = utils.jsonSchema.resolveSchemas(schema.allOf, root);

    const combined = utils.common.mergeAll<JsonSchema>({}, resolved, {
      arrayStrategy: 'union',
    });

    return combined;
  }

  public static getDefaultResolver(rootSchema: JsonSchema): JsonSchemaDefaultResolver {
    return new JsonSchemaDefaultResolver(rootSchema);
  }
}
