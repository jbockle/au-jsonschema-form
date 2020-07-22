import { THEME } from '@aujsf/bootstrap-theme';
import 'jquery';
import 'bootstrap';
import { JsonSchema, UISchema } from '@aujsf/core';

export class App {
  public message = 'hello world';

  public theme = THEME;

  public model: any = {};

  public schemas: JsonSchema[] = [
    {
      'type': 'object',
      'properties': {
        'text': {
          'type': 'object',
          'properties': {
            'text': {
              'type': 'string',
            },
            'textRequired': {
              'type': 'string',
            },
            'textEnum': {
              'type': 'string',
              'enum': [
                'alpha',
                'bravo',
                'charlie',
              ],
            },
            'textEnumLarge': {
              'type': 'string',
              'enum': [
                'alpha',
                'bravo',
                'charlie',
                'delta',
                'echo',
                'foxtrot',
              ],
            },
          },
          'required': [
            'textRequired',
          ],
        },
        'arrays': {
          'type': 'object',
          'properties': {
            'simple': {
              'type': 'array',
              'items': {
                'type': 'string',
              },
            },
            'nestedObject': {
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'firtName': { 'type': 'string' },
                  'lastName': { 'type': 'string' },
                },
              },
            },
          },
        },
      },
    },
  ];

  public uiSchema: UISchema = {
    'ui:title': false,
  }
}
