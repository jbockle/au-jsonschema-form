import {
  JsonSchemaBooleanDefinition,
  JsonSchemaNumberDefinition,
  JsonSchemaStringDefinition,
  PrimitiveType,
} from '../json-schema-definition';
import { FormItem } from './base';

interface Primitive<T extends PrimitiveType> extends FormItem {
  schema: JsonSchemaBooleanDefinition | JsonSchemaNumberDefinition | JsonSchemaStringDefinition;
  /** optionally provide enum values with custom display names */
  enumMap?: Map<string, T>;
  /** callback when value changes */
  onChanged?(newValue: T, oldValue: T): Promise<void>;
}

export interface PrimitiveStringDefinition extends Primitive<string>, PrimitivePlaceholder {
  schema: JsonSchemaStringDefinition;
}

export interface PrimitiveNumberDefinition extends Primitive<number>, PrimitivePlaceholder {
  schema: JsonSchemaNumberDefinition;
  step?: number;
}

export interface PrimitiveBooleanDefinition extends Primitive<boolean> {
  schema: JsonSchemaBooleanDefinition;
}

interface PrimitivePlaceholder {
  placeholder?: string;
}
