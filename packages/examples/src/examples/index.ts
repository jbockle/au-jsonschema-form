import { ExampleCtor } from './example';

import { SimpleExample } from './01-simple';
import { EnumsExample } from './02-enums';
import { ArraysExample } from './03-arrays';
import { NestedArraysExample } from './04-nested-arrays';
import { InlineUISchemaExample } from './05-inline-ui-schema';

export const examples: ExampleCtor[] = [
  SimpleExample,
  EnumsExample,
  ArraysExample,
  NestedArraysExample,
  InlineUISchemaExample,
];
