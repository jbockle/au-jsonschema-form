import { Example } from './example';
import { UISchema, JsonSchema, FormOptions } from '@aujsf/core';

export class ArraysExample implements Example {
  public static id = 'arrays-example';

  public static displayName = 'Arrays Example';

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

  public options: FormOptions = {};
}
