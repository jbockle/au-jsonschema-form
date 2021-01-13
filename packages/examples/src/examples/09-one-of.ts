import { Example } from './example';
import { JsonSchema, UISchema } from '@aujsf/core';

export class OneOfExample extends Example {
  public static id = '09-one-of';

  public static displayName = 'One Of';

  public value: any = ['Bananas'];

  public schema: JsonSchema = {
    type: 'array',
    items: {
      title: 'Favorite...',
      oneOf: [
        {
          title: 'Fruit',
          type: 'string',
          enum: ['Apples', 'Bananas'],
        },
        {
          title: 'Drink',
          type: 'string',
          enum: ['Juice', 'Soda'],
        },
      ],
    },
  }

  public uiSchema: UISchema = {};
}
