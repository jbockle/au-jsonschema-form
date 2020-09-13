import { JsonSchema, UISchema } from '@aujsf/core';

import { Example } from './example';

export class EnumsExample extends Example {
  public static id = '02-enums';

  public static displayName = 'Enums';

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
}
