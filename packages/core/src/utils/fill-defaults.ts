import { JsonPointer } from 'jsonpointerx';

import {
  JsonSchema,
  JsonSchemaObject, JsonSchemaArray, JsonSchemaString, JsonSchemaNumber, JsonSchemaBoolean,
} from '../models';
import { JsonSchemaUtils } from './json-schema-utils';

export class FillDefaults {
  public constructor(
    public value: any,
    private rootSchema: JsonSchema) {
    this.fill(rootSchema);
  }


  private fill(schema: JsonSchema, segments: string[] = []): void {
    if ('$ref' in schema) {
      schema = JsonSchemaUtils.resolveSchema(schema, this.rootSchema);

      return this.fill(schema);
    }

    const pointer = new JsonPointer(segments);

    if (pointer.root) {
      JsonSchemaUtils.isJsonSchemaArray(schema) && !Array.isArray(this.value) && (this.value = []);
      JsonSchemaUtils.isJsonSchemaObject(schema) && typeof this.value !== 'object' && (this.value = {});
    }

    if (schema.const) {
      this.set(pointer, schema.const);
      return;
    }

    let pathValue = pointer.get(this.value);

    JsonSchemaUtils.isJsonSchemaBoolean(schema) && (pathValue = this.getBooleanValue(pathValue, schema));
    JsonSchemaUtils.isJsonSchemaNumber(schema) && (pathValue = this.getNumberValue(pathValue, schema));
    JsonSchemaUtils.isJsonSchemaString(schema) && (pathValue = this.getStringValue(pathValue, schema));

    if (JsonSchemaUtils.isJsonSchemaObject(schema)) {
      pathValue = this.getObjectValue(pathValue, schema);
      this.set(pointer, pathValue);
      this.fillObject(pathValue, schema, segments);

    }
    else if (JsonSchemaUtils.isJsonSchemaArray(schema)) {
      pathValue = this.getArrayValue(pathValue, schema);
      this.set(pointer, pathValue);
      this.fillArray(pathValue, schema, segments);

    }
    else {
      this.set(pointer, pathValue);
    }
  }


  private set(pointer: JsonPointer, value: any): void {
    if (pointer.root) {
      return;
    }

    if (value === undefined || value === null) {
      return;
    }

    pointer.set(this.value, value);
  }


  private getArrayValue(pathValue: any, schema: JsonSchemaArray): any[] {
    pathValue = (Array.isArray(pathValue) && pathValue) || this.getDefault(schema, []);

    while (schema.minItems && pathValue.length < schema.minItems) {
      pathValue.push(null);
    }

    return pathValue;
  }


  private getObjectValue(pathValue: any, schema: JsonSchemaObject): any {
    pathValue = (pathValue instanceof Object && pathValue) || this.getDefault(schema, {});

    return pathValue;
  }


  private getStringValue(pathValue: any, schema: JsonSchemaString): string | undefined {
    if (typeof pathValue === 'string') {
      return pathValue;
    }

    return this.getDefault(schema, undefined);
  }


  private getNumberValue(pathValue: any, schema: JsonSchemaNumber): number | bigint | undefined {
    if (typeof pathValue === 'number' || typeof pathValue === 'bigint') {
      return pathValue;
    }

    return this.getDefault(schema, undefined);
  }


  private getBooleanValue(pathValue: any, schema: JsonSchemaBoolean): boolean {
    if (typeof pathValue === 'boolean') {
      return pathValue;
    }

    return this.getDefault(schema, false);
  }


  private fillObject(pathValue: any, schema: JsonSchemaObject, segments: string[]): void {
    const propertiesSchema = schema.properties ?? {};

    const keys = Object.keys(propertiesSchema);
    keys.forEach(key => {
      this.fill(propertiesSchema[key], [...segments, key]);
    });

    this.fillExtraProperties(pathValue, schema, segments);
  }


  private fillExtraProperties(pathValue: any, schema: JsonSchemaObject, segments: string[]): void {
    if (schema.patternProperties) {
      const props = Object.keys(schema.properties ?? {});
      const patternsSchema = Object.keys(schema.patternProperties).map(regex => ({
        regex: new RegExp(regex),
        schema: schema.patternProperties![regex],
      }));

      Object.keys(pathValue)
        .filter(key => !props.includes(key))
        .filter(key => !patternsSchema.some(kvp => {
          if (kvp.regex.test(key)) {
            this.fill(kvp.schema, [...segments, key]);
            return true;
          }

          return false;
        }))
        .forEach(key => {
          schema.additionalProperties instanceof Object
            && this.fill(schema.additionalProperties, [...segments, key]);
        });
    }
  }


  private fillArray(pathValue: any[], schema: JsonSchemaArray, segments: string[]): void {
    pathValue.forEach((_value, index) => {
      const itemSchema = JsonSchemaUtils.getItemJsonSchema(index, schema, this.rootSchema);

      if (itemSchema) {
        this.fill(itemSchema, [...segments, index.toString()]);
      }
    });
  }


  private getDefault(schema: JsonSchema, fallback: any): any {
    return schema.default ?? fallback;
  }
}
