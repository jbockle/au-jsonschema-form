import { JsonSchema } from '../../../domain';
import { JsonPointer } from 'jsonpointerx';

export function findSchemaDefinition($ref: string, definition: JsonSchema<any>): JsonSchema<any> {
  let schema = JsonPointer.compile($ref).get(definition) as JsonSchema<any>;

  if (schema && schema.$ref) {
    schema = findSchemaDefinition(schema.$ref, definition);
  }

  if (!schema) {
    throw new Error(`Could not find a definition for '${$ref}'`);
  }

  return schema;
}
