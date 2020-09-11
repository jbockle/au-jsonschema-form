import { JsonSchema, UISchema, FormOptions } from '@aujsf/core';

export interface Example {
  value: any;
  schema: JsonSchema;
  uiSchema: UISchema;
  options: FormOptions;
}

export interface ExampleCtor {
  id: string;
  displayName: string;
  new(): Example;
}
