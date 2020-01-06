import { JsonSchema } from '../../..';

type PatternProperty = {
  [key: string]: JsonSchema<any>;
};

export function isPatternProperty(schema?: PatternProperty | boolean): schema is PatternProperty {
  return typeof schema === 'object';
}
