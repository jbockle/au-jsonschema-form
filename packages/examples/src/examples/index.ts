import { ExampleCtor } from './example';

import { SimpleExample } from './01-simple-example';
import { EnumExample } from './02-enums-example';
import { ArraysExample } from './03-arrays-example';
import { NestedArraysExample } from './04-nested-arrays';
import { InlineUISchemaExample } from './05-inline-ui-schema';

export const examples: ExampleCtor[] = [
  SimpleExample,
  EnumExample,
  ArraysExample,
  NestedArraysExample,
  InlineUISchemaExample,
];
