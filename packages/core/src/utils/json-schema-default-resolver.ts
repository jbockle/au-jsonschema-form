import { JsonSchema, JsonSchemaArray, JsonSchemaObject } from '../models';
import { JsonSchemaUtils } from './json-schema-utils';

export class JsonSchemaDefaultResolver {
  public constructor(public rootSchema: JsonSchema) { }

  public mergeDefaults(currentValue: any, schema: JsonSchema): any {
    schema = JsonSchemaUtils.resolveSchema(schema, this.rootSchema);

    if (schema.const !== undefined) {
      return schema.const;
    }

    if (schema.default !== undefined) {
      return schema.default;
    }

    switch (JsonSchemaUtils.getSchemaType(schema)) {
      case 'object':
        return this.mergeObjectDefaults(currentValue, schema as JsonSchemaObject);
      case 'array':
        return this.mergeArrayDefaults(currentValue, schema as JsonSchemaArray);
      case 'boolean':
        return false;
      case 'integer':
      case 'number':
        return typeof currentValue === 'number'
          ? currentValue
          : this.getDefault(schema);
      case 'string':
        return typeof currentValue === 'string'
          ? currentValue
          : this.getDefault(schema);
      default:
        return currentValue;
    }
  }

  public mergeArrayDefaults(currentValue: any, schema: JsonSchemaArray): any {
    if (!Array.isArray(currentValue)) {
      currentValue = this.getDefault(schema);
    }
    else {
      for (let index = 0; index < currentValue.length; index++) {
        const itemSchema = JsonSchemaUtils.getItemJsonSchema(index, schema, this.rootSchema);
        currentValue[index] = itemSchema && this.mergeDefaults(currentValue[index], itemSchema);
      }
    }

    return currentValue;
  }

  public mergeObjectDefaults(currentValue: any, schema: JsonSchemaObject): any {
    if (typeof currentValue !== 'object' || Array.isArray(currentValue)) {
      currentValue = this.getDefault(schema);
    }
    else {
      schema.properties ??= {};
      const props = Object.keys(schema.properties);

      props.forEach(prop => {
        currentValue[prop] = this.mergeDefaults(currentValue[prop], schema.properties![prop]);
      });
    }

    return currentValue;
  }

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
