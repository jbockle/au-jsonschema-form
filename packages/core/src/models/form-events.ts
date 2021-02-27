import { JsonPointer } from 'jsonpointerx';
import { JsonSchema } from './json-schema';
import { UISchema } from './ui-schema';

export interface ValueChangedEventDict {
  newValue: any;
  oldValue: any;
  pointer: JsonPointer;
  pointerString: string;
  uiSchema: UISchema;
  schema: JsonSchema;
}
