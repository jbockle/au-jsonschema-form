import { Example } from './example';
import { UISchema, JsonSchema } from '@aujsf/core';

export class SimpleExample extends Example {
  public static id = '01-simple';

  public static displayName = 'Simple';

  public value: any = {
    givenName: 'John',
    surName: 'Smith',
    address: {
      state: 'VA',
    },
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
      address: {
        type: 'object',
        properties: {
          street: { type: 'string' },
          city: { type: 'string' },
          state: {
            'x-ui-schema': {
              'ui:placeholder': 'Select State...',
            },
            type: 'string',
            enum: ['AK', 'AZ', 'DC', 'MD', 'TX', 'VA'],
            default: 'TX',
          },
          country: { type: 'string', const: 'USA' },
          zip: { title: 'Zip Code', type: 'string', pattern: '^\\d{5}(-\\d+)?$' },
        },
        required: ['street', 'city', 'state', 'country', 'zip'],
      },
      agree: {
        type: 'boolean',
      },
    },
    required: ['givenName', 'surName', 'email'],
  };

  public uiSchema: UISchema = {
    'ui:view-class': 'd-block border border-secondary px-2 mb-1',
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
