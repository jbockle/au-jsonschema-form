import { JsonPointer } from 'jsonpointerx';

export interface ValueChangedEventDict {
  newValue: any;
  oldValue: any;
  pointer: JsonPointer;
}
