import { Example } from './example';
import { UISchema, JsonSchema } from '@aujsf/core';

export class SimpleExample extends Example {
  public static id = '01-simple';

  public static displayName = 'Simple';

  public value: any = {
    givenName: 'John',
    surName: 'Smith',
  };

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      givenName: { type: 'string' },
      surName: { type: 'string' },
      dateOfBirth: {
        type: 'string',
        format: 'date',
      },
      age: {
        type: 'integer',
        minimum: 0,
      },
      gender: {
        type: 'string',
        enum: ['male', 'female'],
      },
      title: {
        type: 'string',
        enum: [
          'Mr',
          'Mrs',
          'Ms',
          'Miss',
          'Sir',
          'Dr',
          'Professor',
        ],
      },
      shortBio: {
        type: 'string',
        maxLength: 100,
      },
      email: {
        type: 'string',
        format: 'email',
      },
      agree: {
        type: 'boolean',
      },
    },
    required: ['givenName', 'surName', 'email'],
  };

  public uiSchema: UISchema = {
    'ui:view-class': 'd-block border border-info px-2 mb-1',
    givenName: {
      'ui:title': 'First Name',
    },
    surName: {
      'ui:title': 'Last Name',
    },
    shortBio: {
      'ui:view': 'textarea',
    },
  };
}
