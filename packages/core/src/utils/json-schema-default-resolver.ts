import { JsonSchema, JsonSchemaArray, JsonSchemaObject } from '../models';
import { JsonSchemaUtils } from './json-schema-utils';

export class JsonSchemaDefaultResolver {
  public constructor(public rootSchema: JsonSchema) { }

  public getDefault(schema: JsonSchema, fallback: any = undefined): any {
    schema = JsonSchemaUtils.resolveSchema(schema, this.rootSchema);

    if (schema.const !== undefined) {
      return schema.const;
    }

    if (schema.default !== undefined) {
      return schema.default;
    }

    switch (JsonSchemaUtils.getSchemaType(schema)) {
      case 'object':
        return this.getObjectDefaults(schema as JsonSchemaObject);
      case 'array':
        return this.getArrayDefaults(schema as JsonSchemaArray);
      case 'boolean':
        return false;
      case 'integer':
      case 'number':
      case 'string':
      default:
        return fallback;
    }
  }

  public getObjectDefaults(schema: JsonSchemaObject): any {
    const value: Record<string, any> = {};
    schema.properties ??= {};
    const props = Object.keys(schema.properties);

    props.forEach(prop => {
      value[prop] = this.getDefault(schema.properties![prop]);
    });

    return value;
  }

  public getArrayDefaults(schema: JsonSchemaArray): any {
    if (schema.minItems) {
      return Array.from(new Array(schema.minItems))
        .map((_, itemIndex) => this.getArrayItemDefaults(itemIndex, schema));
    }

    return [];
  }

  public getArrayItemDefaults(itemIndex: number, arraySchema: JsonSchemaArray): any {
    const itemSchema = JsonSchemaUtils.getItemJsonSchema(itemIndex, arraySchema, this.rootSchema);
    if (itemSchema) {
      return this.getDefault(itemSchema, null);
    }

    return null;
  }
}
