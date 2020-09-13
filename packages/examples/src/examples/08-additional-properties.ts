import { JsonSchema } from '@aujsf/core';
import { Example } from './example';

export class AdditionalPropertiesExample extends Example {
  public static id = '08-additional|pattern-properties';

  public static displayName = 'Additional & Pattern Properties';

  public schema: JsonSchema = {
    type: 'object',
    patternProperties: {
      '[C|c]ount$': {
        type: 'number',
      },
    },
    additionalProperties: {
      type: 'string',
    },
  };

  public uiSchema = {
    'ui:placeholder': 'Add custom key',
    count: {
      'ui:view': 'number-range',
    },
  }

  public value = {
    name: 'Foo',
    totalCount: 3,
  }
}
