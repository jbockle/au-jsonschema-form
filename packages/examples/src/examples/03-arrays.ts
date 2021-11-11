import { Example } from './example';
import { UISchema, JsonSchema } from '@aujsf/core';

export class ArraysExample extends Example {
  public static id = '03-arrays';

  public static displayName = 'Arrays';

  public value: any = {
    fruits: ['Apples'],
    tags: ['foo', 'bar', 'baz', 'qux'],
  };

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      fruits: {
        type: 'array',
        items: {
          type: 'string',
        },
        minItems: 1,
        maxItems: 3,
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  }

  public uiSchema: UISchema = {
    fruits: {
      'ui:item-title': '${key + 1}:${value || \'Enter Item\'}',
      'ui:items': { 'ui:title': false },
    },
    tags: {
      'ui:view': 'array-string',
    },
  };
}
