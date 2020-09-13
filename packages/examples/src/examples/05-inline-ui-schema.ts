import { JsonSchema, UISchema } from '@aujsf/core';
import { Example } from './example';

export class InlineUISchemaExample extends Example {
  public static id = '05-inline-ui-schema';

  public static displayName = 'Inlined UI Schema';

  public schema: JsonSchema = {
    'x-ui-schema': {
      'ui:title': 'Profile',
    },
    type: 'object',
    properties: {
      givenName: {
        'x-ui-schema': { 'ui:title': 'First Name' },
        type: 'string',
      },
      favoriteFoods: {
        type: 'array',
        default: ['pizza'],
        'x-ui-schema': {
          'ui:item-title': 'I Love ${value || \'...?\'}',
        },
        items: {
          'x-ui-schema': {
            'ui:title': `I'm overridden by the forms UI Schema`,
          },
          type: 'string',
        },
      },
    },
  }

  public uiSchema = {
    favoriteFoods: <UISchema>{
      'ui:items': {
        'ui:title': false,
      },
    },
  };
}
