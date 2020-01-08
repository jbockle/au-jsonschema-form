import { JsonSchema } from '../../../domain/json-schema';
import jsonSchema from '..';

export function getItemSchema(index: number, fromSchema: JsonSchema<any>, rootSchema: JsonSchema<any>): JsonSchema<any> {
  let schema: JsonSchema<any> | boolean = false;

  const { items, additionalItems } = fromSchema;

  if (items) {
    schema = Array.isArray(items)
      ? (index in items && jsonSchema.queries.resolveSchema(items[index], rootSchema))
      : items;
  }

  schema = schema || additionalItems || false;

  if (!schema) {
    throw new Error(`unable to determine schema for index '${index}'`);
  }

  return jsonSchema.queries.resolveSchema(schema, rootSchema);
}
