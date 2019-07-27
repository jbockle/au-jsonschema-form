import { JsonSchemaStringDefinition, JsonSchemaDefinition } from '../json-schema-definition';
import { PrimitiveStringDefinition } from '../form-definition';
import { ViewStrategy } from 'aurelia-framework';

export interface SchemaElement<T> {
  view?: ViewStrategy;
  model: T;
  schema: JsonSchemaDefinition;
  form: PrimitiveStringDefinition;
  setModel: (value: T) => MaybePromise<void>;
  proposeTemplate: () => string | null;
  [key: string]: any;
}

export interface ValidationResponse {
  valid: boolean;
  reasons: string[];
}
