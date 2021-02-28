import { Example } from './example';
import { JsonSchema, UISchema } from '@aujsf/core';

export class OneOfExample extends Example {
  public static id = '09-one-of';

  public static displayName = 'One Of';

  public value: any = {
    favorite: [
      'Bananas',
      'Soda',
    ],
  };

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      favorite: {
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
            {
              title: 'None',
              type: 'object',
              properties: {
                reason: {
                  type: 'string',
                  description: 'Why not?',
                },
              },
              required: ['reason'],
            },
          ],
        },
      },
      httpRequests: {
        type: 'array',
        minItems: 2,
        items: {
          title: 'Choose method...',
          oneOf: [
            {
              title: 'Get/Delete',
              type: 'object',
              properties: {
                method: { type: 'string', enum: ['get', 'delete'] },
                url: { type: 'string', format: 'uri' },
                parameters: {
                  type: 'object',
                  additionalProperties: {
                    type: 'string',
                  },
                },
              },
            },
            {
              title: 'Post/Put',
              type: 'object',
              properties: {
                method: { type: 'string', enum: ['post', 'put'] },
                url: { type: 'string' },
                parameters: {
                  type: 'object',
                  additionalProperties: {
                    type: 'string',
                  },
                },
                body: { type: 'string' },
                contentType: { type: 'string' },
              },
            },
          ],
        },
      },
    },
  }

  public uiSchema: UISchema = {
    favorite: <UISchema>{
      'ui:view': 'array-tabs',
      'ui:items': {
        kind: <UISchema>{ 'ui:view': false },
      },
    },
  };
}
