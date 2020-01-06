import { JsonSchema } from '../../../domain';

export function supportsAdditionalProperties(schema: JsonSchema<any>): boolean {
  if (schema.additionalProperties === true) {
    throw new Error(`additionalProperties is true, unable to determine property schema`);
  }

  if (schema.additionalProperties === false) {
    return false;
  }

  return typeof schema.additionalProperties === 'object';
}
