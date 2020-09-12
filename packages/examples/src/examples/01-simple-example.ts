import { Example } from './example';
import { UISchema, JsonSchema, FormOptions } from '@aujsf/core';

export class SimpleExample implements Example {
  public static id = 'simple-example';

  public static displayName = 'Simple Example';

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
      shortBio: {
        type: 'string',
        maxLength: 100,
      },
      email: {
        type: 'string',
        format: 'email',
      },
    },
    required: ['givenName', 'surName', 'email'],
  };

  public uiSchema: UISchema = {
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

  public options: FormOptions = {};
}
