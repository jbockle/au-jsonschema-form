import { THEME } from '@aujsf/bootstrap-theme';
import 'jquery';
import 'bootstrap';
import { UISchema, FormOptions, JsonSchemaObject, ValidationResult } from '@aujsf/core';
import { signalBindings } from 'aurelia-framework';

// import v4 from 'ajv/lib/refs/json-schema-draft-04.json';
// import v6 from 'ajv/lib/refs/json-schema-draft-06.json';

class Model {
  public constructor(args: any) {
    if (args) {
      Object.keys(args).forEach(key => this[key] = args[key]);
    }
  }

  [key: string]: any;
  public foo(): void {
    alert('foo!');
  }
}

export class App {
  public message = 'hello world';

  public theme = THEME;

  public model: Model = new Model({
    combined: {
      oneOfSimple: {},
    },
    text: {
      text: 'foo',
    },
  });

  public submit(value: any, validationResult: ValidationResult): void {
    alert('xsubmit triggered:\n' + JSON.stringify({ value, validationResult }, null, 2));
    value.foo();
  }

  public signalJson(): void {
    signalBindings('aujsf:UpdateJson');
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
        taggable: {
          type: 'object',
          properties: {
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        entityBase: {
          allOf: [
            { $ref: '#/definitions/taggable' },
            {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
              },
            },
          ],
        },
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
        objects: {
          type: 'object',
          properties: {
            patternOrAdditional: {
              type: 'object',
              properties: {
                foo: { type: 'string' },
              },
              patternProperties: {
                '^foo-\\w': {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
              additionalProperties: {
                type: 'number',
              },
            },
          },
        },
        formats: {
          type: 'object',
          properties: {
            dateTime: {
              type: 'string',
              format: 'date-time',
            },
            date: {
              type: 'string',
              format: 'date',
            },
            time: {
              type: 'string',
              format: 'time',
            },
          },
        },
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
            allOfNested: {
              allOf: [
                { properties: { firstName: { type: 'string' } }, required: ['firstName'] },
                { $ref: '#/definitions/entityBase' },
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
            textReadonly: {
              type: 'string',
              readOnly: true,
            },
            textReadonlyOverride: {
              type: 'string',
              readOnly: true,
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
            textArea: {
              type: 'string',
            },
          },
          required: [
            'textRequired',
          ],
        },
        boolean: {
          type: 'object',
          properties: {
            standard: {
              type: 'boolean',
            },
            agree: {
              type: 'boolean',
              enum: [true],
            },
            disagree: {
              type: 'boolean',
              enum: [false],
            },
            switch: {
              type: 'boolean',
            },
          },
        },
        number: {
          type: 'object',
          properties: {
            standard: {
              type: 'number',
            },
            min: {
              type: 'number',
              minimum: 2,
            },
            exMin: {
              type: 'number',
              exclusiveMinimum: 2,
            },
            max: {
              type: 'number',
              maximum: 2,
            },
            exMax: {
              type: 'number',
              exclusiveMaximum: 2,
            },
            range: {
              type: 'number',
              minimum: 0,
              exclusiveMaximum: 4,
            },
          },
        },
        arrays: {
          type: 'object',
          properties: {
            simple: {
              type: 'array',
              items: {
                type: 'string',
                // default: '',
              },
              minItems: 1,
            },
            tabbed: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  street: { type: 'string' },
                  country: { type: 'string', enum: ['USA', 'Canada'] },
                },
                required: ['street'],
              },
            },
            nestedObject: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                },
              },
            },
            checkboxes: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['foo', 'bar', 'baz'],
              },
            },
            selectMultiple: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['foo', 'bar', 'baz'],
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
      allOfNested: {
        id: {
          'ui:order': 0,
        },
        firstName: {
          'ui:order': 1,
        },
      },
    },
    arrays: {
      simple: {
        'ui:item-title': 'Item ${key+1} ${value || \'\'}',
      } as UISchema,
      tabbed: {
        'ui:view': 'array-tabs',
        'ui:item-title': 'Item ${key+1} ${(value && `${value.street || \'\'} ${value.country || \'\'}`) || \'\'}',
        'ui:items': { 'ui:title': false },
      } as UISchema,
      nestedObject: {
        'ui:item-title': '${key}: ${value && value.lastName || \'\'}, ${value && value.firstName || \'\'}',
        'ui:items': {
          'ui:title': false,
        },
      } as UISchema,
      selectMultiple: {
        'ui:view': 'array-select',
      },
    },
    text: {
      textReadonlyOverride: {
        'ui:read-only': false,
      },
      textArea: {
        'ui:view': 'textarea',
      },
    },
    boolean: {
      switch: {
        'ui:view': 'switch',
      },
    },
  }
}
