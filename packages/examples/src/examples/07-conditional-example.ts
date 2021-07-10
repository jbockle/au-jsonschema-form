import { JsonSchema } from '@aujsf/core';
import { Example } from './example';

const SCHEMAS: Record<string, JsonSchema> = {
  name: { type: 'string' },
  ratio: { type: 'number', default: 0.1 },
  liked: { type: 'boolean' },
  integer: { type: 'integer' },
  address: {
    type: 'object',
    properties: {
      street: { type: 'string' },
      city: { type: 'string' },
      state: { type: 'string' },
    },
  },
  list: {
    type: 'array',
    items: { type: 'string' },
  },
};

const SCHEMA: JsonSchema = {
  type: 'object',
  properties: {},
};

Object.keys(SCHEMAS).forEach(key => {
  SCHEMA.properties![key] = makeOverridable(key, SCHEMAS[key]);
});

export class ConditionalExample extends Example {
  public static id = '07-conditionals';

  public static displayName = 'Conditionals';

  public schema: JsonSchema = { ...SCHEMA };
}

function makeOverridable(key: string, schema: JsonSchema): JsonSchema {
  return {
    title: `Override ${key}`,
    type: 'object',
    properties: {
      override: {
        'x-ui-schema': { 'ui:order': 0 },
        type: 'boolean',
      },
    },
    required: ['override'],
    if: {
      properties: { override: { const: true } },
    },
    then: {
      properties: {
        value: schema,
      },
    },
  };
}
