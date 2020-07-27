import { THEME } from '@aujsf/bootstrap-theme';
import 'jquery';
import 'bootstrap';
import { UISchema, FormOptions, JsonSchemaObject, ValidationResult } from '@aujsf/core';
import { signalBindings } from 'aurelia-framework';

// import v4 from 'ajv/lib/refs/json-schema-draft-04.json';
// import v6 from 'ajv/lib/refs/json-schema-draft-06.json';

export class App {
  public message = 'hello world';

  public theme = THEME;

  public model: any = {};

  public submit(value: any, validationResult: ValidationResult): void {
    alert('xsubmit triggered:\n' + JSON.stringify({ value, validationResult }, null, 2));
  }

  public signalJson(): void {
    signalBindings('sfJson');
  }

  public options: FormOptions = {
    ajv: {
      // transform: (ajv): void => {
      //   ajv.addMetaSchema(v4);
      //   ajv.addMetaSchema(v6);
      // },
    },
  }

  public schemas: JsonSchemaObject[] = [
    {
      definitions: {
        textEnumLarge: {
          type: 'string',
          enum: [
            'alpha',
            'bravo',
            'charlie',
            'delta',
            'echo',
            'foxtrot',
          ],
        },
      },
      type: 'object',
      properties: {
        combined: {
          type: 'object',
          properties: {
            allOfExample: {
              allOf: [
                { type: 'object' },
                { properties: { firstName: { type: 'string' } }, required: ['firstName'] },
                { properties: { lastName: { type: 'string' } }, required: ['lastName'] },
              ],
            },
            oneOfSimple: {
              oneOf: [
                { type: 'string', title: 'Enter name' },
                { type: 'number', title: 'Enter age' },
              ],
            },
          },
        } as JsonSchemaObject,
        text: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
            },
            textRequired: {
              type: 'string',
            },
            textEnum: {
              type: 'string',
              enum: [
                'alpha',
                'bravo',
                'charlie',
              ],
            },
            textEnumLarge: {
              $ref: '#/definitions/textEnumLarge',
            },
          },
          required: [
            'textRequired',
          ],
        },
        arrays: {
          type: 'object',
          properties: {
            simple: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            nestedObject: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  firtName: { type: 'string' },
                  lastName: { type: 'string' },
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
    combined: {
      allOfExample: {
        firstName: {
          'ui:order': 0,
        },
      },
    },
  }
}
