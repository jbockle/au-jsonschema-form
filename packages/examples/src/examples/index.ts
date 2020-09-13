import { ExampleCtor } from './example';

import { SimpleExample } from './01-simple';
import { EnumsExample } from './02-enums';
import { ArraysExample } from './03-arrays';
import { NestedArraysExample } from './04-nested-arrays';
import { InlineUISchemaExample } from './05-inline-ui-schema';
import { ConditionalExample } from './07-conditional-example';
import { OrderExample } from './06-order';
import { AdditionalPropertiesExample } from './08-additional-properties';

export const examples: ExampleCtor[] = [
  SimpleExample,
  EnumsExample,
  ArraysExample,
  NestedArraysExample,
  InlineUISchemaExample,
  OrderExample,
  ConditionalExample,
  AdditionalPropertiesExample,
];
