import { JsonSchema } from '../../../domain';
import { isPatternProperty } from './is-pattern-property';

export function supportsPatternProperties(schema: JsonSchema<any>): boolean {
  return isPatternProperty(schema.patternProperties);
}
