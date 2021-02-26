import { Example } from './example';
import { JsonSchema, UISchema } from '@aujsf/core';

export class OneOfExample extends Example {
  public static id = '09-one-of';

  public static displayName = 'One Of';

  public value: any = { favorite: ['Bananas'] };

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
              title: 'Get',
              type: 'object',
              properties: {
                kind: {
                  'x-ui-schema': { 'ui:view': false },
                  type: 'string', const: 'get',
                },
                url: { type: 'string', format: 'uri' },
              },
            },
            {
              title: 'Post',
              type: 'object',
              properties: {
                kind: {
                  'x-ui-schema': { 'ui:view': false },
                  type: 'string', const: 'post',
                },
                url: { type: 'string' },
                body: { type: 'string' },
                contentType: { type: 'string' },
              },
            },
            {
              title: 'Delete',
              type: 'object',
              properties: {
                kind: {
                  'x-ui-schema': { 'ui:view': false },
                  type: 'string', const: 'post',
                },
                url: { type: 'string' },
              },
            },
          ],
        },
      },
    },
  }

  public uiSchema: UISchema = {
    favorite: {
      'ui:view': 'array-tabs',
    },
  };
}
