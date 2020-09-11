import { JsonSchema, UISchema, FormOptions } from '@aujsf/core';

import { Example } from './example';

export class EnumExample implements Example {
  public static id = 'enum-example';

  public static displayName = 'Enum Example';

  public value: any = {};

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      options: {
        type: 'string',
        enum: [
          'Foo',
          'Bar',
        ],
      },
      language: {
        description: 'Since the enum length is greater than 5, it defaults to a <select>',
        type: 'string',
        enum: [
          'javascript',
          'typescript',
          'c#',
          'golang',
          'rust',
          'c++',
        ],
      },
    },
  };

  public uiSchema: UISchema = {
    language: {
      'ui:placeholder': 'Choose...',
    },
  };

  public options: FormOptions = {};
}
