import { JsonSchema } from '@au-jsonschema-form/core';

export const schema: JsonSchema<any> = {
  type: 'object',
  required: [
    'name',
    'shoesizeLeft',
  ],
  properties: {
    name: {
      title: 'Name',
      description: 'Gimme yea name lad',
      type: 'string',
      pattern: '^[^/]*$',
      minLength: 2,
    },
    invitation: {
      type: 'string',
      title: 'Invitation Design',
      description: 'Design the invitation in full technicolor HTML',
    },
    favorite: {
      title: 'Favorite',
      type: 'string',
      default: 'NaN',
      enum: [
        'undefined',
        'null',
        'NaN',
      ],
    },
    shoesizeLeft: {
      title: 'Shoe size (left)',
      default: 42,
      type: 'number',
    },
    shoesizeRight: {
      title: 'Shoe size (right)',
      default: 42,
      type: 'number',
    },
    attributes: {
      type: 'object',
      title: 'Attributes',
      required: [
        'eyecolor',
      ],
      properties: {
        eyecolor: {
          type: 'string',
          title: 'Eye color',
          default: 'pink',
        },
        haircolor: {
          type: 'string',
          title: 'Hair color',
        },
        shoulders: {
          type: 'object',
          title: 'Shoulders',
          properties: {
            left: {
              type: 'string',
              title: 'Left',
            },
            right: {
              type: 'string',
              title: 'Right',
            },
          },
        },
      },
    },
    phoneNumbers: {
      type: 'array',
      items: [{
        type: 'number',
      }],
      additionalItems: {
        type: 'string',
        format: 'regex',
        pattern: '^\\d{3}-\\d{3}-\\d{4}',
      },
    },
    things: {
      type: 'array',
      title: 'I like...',
      default: [null, null],
      items: {
        type: 'string',
        enum: [
          'clowns',
          'compiling',
          'sleeping',
        ],
      },
      minItems: 1,
    },
    dislike: {
      type: 'array',
      title: 'I dislike...',
      maxItems: 3,
      items: {
        type: 'string',
        title: 'I hate',
        minLength: 1,
      },
    },
    soul: {
      title: 'Terms Of Service',
      description: 'I agree to sell my undying <a href=\'https://www.youtube.com/watch?v=dQw4w9WgXcQ\'>soul</a>',
      type: 'boolean',
      default: true,
    },
    soulserial: {
      title: 'Soul Serial No',
      type: 'string',
    },
    date: {
      title: 'Date of party',
      type: 'string',
      format: 'date-time',
    },
    radio: {
      title: 'Radio type',
      type: 'string',
      enum: [
        'Transistor',
        'Tube',
      ],
    },
    radio2: {
      title: 'My Second Radio',
      type: 'string',
      enum: [
        'Transistor',
        'Tube',
      ],
    },
    radiobuttons: {
      type: 'string',
      enum: [
        'Select me!',
        'No me!',
      ],
    },
  },
};