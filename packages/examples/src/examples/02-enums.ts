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
      nullableRadio: {
        type: ['string', 'null'],
        enum: [
          null,
          'alpha',
          'bravo',
          'charlie',
        ],
      },
      nullableSelect: {
        type: ['string', 'null'],
        enum: [
          null,
          'alpha',
          'bravo',
          'charlie',
          'delta',
          'echo',
        ],
      },
      customLabels: {
        type: 'string',
        enum: [
          'cat',
          'dog',
          'none',
        ],
      },
      customLabelsSelect: {
        type: 'string',
        enum: [
          'a',
          'b',
          'c',
        ],
      },
    },
  };

  public uiSchema: UISchema = {
    language: {
      'ui:placeholder': 'Choose...',
    },
    customLabels: {
      'ui:enum-labels': {
        'dog': '🐕‍🦺',
        'cat': '🐈',
      },
    },
    customLabelsSelect: {
      'ui:view': 'string-select',
      'ui:enum-labels': {
        'a': 'Letter A',
        'c': 'Letter C',
      },
    },
  };
}
