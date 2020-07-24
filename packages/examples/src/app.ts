import { THEME } from '@aujsf/bootstrap-theme';
import 'jquery';
import 'bootstrap';
import { JsonSchema, UISchema, FormOptions } from '@aujsf/core';

// import v4 from 'ajv/lib/refs/json-schema-draft-04.json';
// import v6 from 'ajv/lib/refs/json-schema-draft-06.json';

export class App {
  public message = 'hello world';

  public theme = THEME;

  public model: any = {};

  public options: FormOptions = {
    ajv: {
      // transform: (ajv): void => {
      //   ajv.addMetaSchema(v4);
      //   ajv.addMetaSchema(v6);
      // },
    },
  }

  public schemas: JsonSchema[] = [
    {
      '$schema': 'http://json-schema.org/draft-06/schema#',
      'definitions': {
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
              '$ref': '#/definitions/textEnumLarge',
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
