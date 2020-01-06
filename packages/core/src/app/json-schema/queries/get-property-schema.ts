import { JsonSchema } from '../../../domain';
import { resolveSchema } from './resolve-schema';
import { isPatternProperty } from './is-pattern-property';

export function getPropertySchema(prop: string, schema: JsonSchema<any>, rootSchema: JsonSchema<any>): JsonSchema<any> {
  if (schema.properties && schema.properties[prop]) {
    return resolveSchema(schema.properties[prop], rootSchema);
  }

  const patternProperties = schema.patternProperties;
  if (isPatternProperty(patternProperties)) {
    const maybeSchema = Object.keys(patternProperties)
      .map(pattern => ({
        pattern,
        expression: new RegExp(pattern),
        schema: patternProperties[pattern],
      })).find(pattern => pattern.expression.test(prop))?.schema;

    if (maybeSchema) {
      return resolveSchema(maybeSchema, rootSchema);
    }
  }

  const additionalProperties = schema.additionalProperties;
  if (isAdditionalProperties(additionalProperties)) {
    return resolveSchema(additionalProperties, rootSchema);
  }

  throw new Error(`unable to determine schema for property '${prop}'`);
}

function isAdditionalProperties(schema?: JsonSchema<any> | boolean): schema is JsonSchema<any> {
  return typeof schema === 'object';
}
