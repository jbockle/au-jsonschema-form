import { JsonSchema } from '../../../domain/json-schema';
import { findSchemaDefinition } from './find-schema-definition';

export function resolveSchema(schema: JsonSchema<any>, rootSchema: JsonSchema<any>): JsonSchema<any> {
  if (schema.$ref) {
    schema = findSchemaDefinition(schema.$ref, rootSchema);
  }

  return schema;
}
