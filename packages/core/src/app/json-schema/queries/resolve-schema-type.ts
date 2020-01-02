import { JsonSchema, JsonSchemaTypeName } from '../../../domain';
import { findSchemaDefinition } from './find-schema-definition';
import merge from 'lodash/merge';

export function resolveSchemaType(schema: JsonSchema<any>, baseSchema: JsonSchema<any>): JsonSchemaTypeName | 'multi-schema' {
  if (schema.$ref) {
    schema = findSchemaDefinition(schema.$ref, baseSchema);
  }

  if (schema.allOf) {
    schema = schema.allOf.reduce((reduced, cur) => {
      if (cur.$ref) {
        cur = findSchemaDefinition(cur.$ref, baseSchema);
      }
      merge(reduced, cur);
      return reduced;
    }, {});
  }

  if (typeof schema.type === 'string') {
    return schema.type as JsonSchemaTypeName;
  }

  if (schema.oneOf || schema.anyOf) {
    return 'multi-schema';
  }

  if (Array.isArray(schema.type)) {
    assertTypeArraySupported(schema);
    if (schema.type.length === 1) {
      return schema.type![0];
    }
    return schema.type.filter(t => t !== 'null').pop();
  }

  throw new Error(`unable to determine type of schema`);
}

function assertTypeArraySupported(schema: JsonSchema<any[]>): void {
  if (!schema.type) {
    throw new Error('schema type is not defined');
  } else if (typeof schema.type === 'string') {
    return;
  } else if (schema.type!.length > 0 && schema.type!.length <= 2) {
    if (schema.type!.length === 2 && !schema.type!.includes('null')) {
      throw new Error(`supported schema array type must include 'null'`);
    }
  } else if (schema.type.length > 2) {
    throw new Error(`supported schema type can only be between 1-2 types, actual length ${schema.type!.length}`);
  }
}
