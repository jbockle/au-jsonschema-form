import { JsonSchema } from '@aujsf/core';
import { Example } from './example';

export class BooleansExample extends Example {
  public static id = '10-booleans';

  public static displayName = 'Booleans';

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      checkbox: {
        type: 'boolean',
      },
      select: {
        'x-ui-schema': {
          'ui:view': 'boolean-select',
        },
        type: 'boolean',
      },
      selectCustomLabels: {
        'x-ui-schema': {
          'ui:view': 'boolean-select',
          'ui:true-label': 'Enabled',
          'ui:false-label': 'Disabled',
        },
        type: 'boolean',
      },
      radio: {
        'x-ui-schema': {
          'ui:view': 'boolean-radio',
        },
        type: 'boolean',
      },
      radioCustomLabels: {
        'x-ui-schema': {
          'ui:view': 'boolean-radio',
          'ui:true-label': 'On',
          'ui:false-label': 'Off',
        },
        type: 'boolean',
      },
      radioInline: {
        'x-ui-schema': {
          'ui:view': 'boolean-radio',
          'ui:true-label': 'On',
          'ui:false-label': 'Off',
          'ui:inline': true,
        },
        type: 'boolean',
      },
    },
  };

  public value = {
    selectCustomLabels: true,
    radioCustomLabels: true,
  };
}
