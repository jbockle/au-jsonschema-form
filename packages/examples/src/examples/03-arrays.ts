import { Example } from './example';
import { UISchema, JsonSchema } from '@aujsf/core';

export class ArraysExample extends Example {
  public static id = '03-arrays';

  public static displayName = 'Arrays';

  public value: any = ['Apples'];

  public schema: JsonSchema = {
    type: 'array',
    items: {
      type: 'string',
    },
    minItems: 1,
    maxItems: 3,
  }

  public uiSchema: UISchema = {
    'ui:title': 'Fruits',
    'ui:item-title': '${key + 1}:${value || \'Enter Item\'}',
    'ui:items': { 'ui:title': false },
  };
}
