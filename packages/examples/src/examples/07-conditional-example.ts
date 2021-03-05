import { JsonSchema } from '@aujsf/core';
import { Example } from './example';

export class ConditionalExample extends Example {
  public static id = '07-conditionals';

  public static displayName = 'Conditionals';

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      override: {
        'x-ui-schema': { 'ui:order': 0 },
        type: 'boolean',
      },
    },
    required: ['override'],
    if: {
      properties: { override: { const: true } },
    },
    then: {
      properties: {
        value: {
          type: 'string',
        },
      },
    },
  };
}
