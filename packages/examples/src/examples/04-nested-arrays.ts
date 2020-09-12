import { Example } from './example';
import { UISchema, JsonSchema } from '@aujsf/core';

export class NestedArraysExample extends Example {
  public static id = 'nested-arrays-example';

  public static displayName = 'Nested Arrays Example';

  public value: any = [['Dog', 'Woof'], ['Cat', 'Meow']];

  public schema: JsonSchema = {
    type: 'array',
    items: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: {
        type: 'string',
      },
    },
    minItems: 1,
    maxItems: 3,
  }

  public uiSchema: UISchema = {
    'ui:title': 'Matrices',
    'ui:item-title': 'Matrix ${key + 1}',
    'ui:no-reorder': true,
    'ui:no-remove': true,
    'ui:items': <UISchema>{
      'ui:title': false,
      'ui:item-title': '${key + 1}:${value || \'Enter Item\'}',
    },
  };
}
