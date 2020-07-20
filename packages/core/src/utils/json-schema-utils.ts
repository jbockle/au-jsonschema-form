import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, SchemaPrimitiveType } from '../models';

export class JsonSchemaUtils {

  public static isNullable(type: SchemaPrimitiveType[]): type is ['null', SchemaPrimitiveType] {
    return type.length === 2 && type.includes('null');
  }

  public static resolveSchemaReference($ref: string, baseSchema: JsonSchema): JsonSchema {
    let schema = JsonPointer.compile($ref).get(baseSchema) as JsonSchema;

    if (schema && '$ref' in schema) {
      schema = this.resolveSchemaReference(schema.$ref, baseSchema);
    }

    if (!schema) {
      throw new Error(`Could not find a definition for '${$ref}'`);
    }

    return schema;
  }
}
