import { JsonPointer } from 'jsonpointerx';

import { JsonSchema } from './json-schema';
import { UISchema } from './ui-schema';

export interface KeyDefinition {
  schema: JsonSchema;
  uiSchema: UISchema;
  pointer: JsonPointer;
  key: string | number;
}

export interface ObjectKeyDefinition extends KeyDefinition {
  required?: boolean;
}

export interface ArrayKeyDefinition extends KeyDefinition {
  key: number;
}
