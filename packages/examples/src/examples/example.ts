import { JsonSchema, UISchema } from '@aujsf/core';

export abstract class Example {
  public value: any = {};
  public abstract schema: JsonSchema;
  public uiSchema: UISchema = {};
}

export interface ExampleCtor {
  id: string;
  displayName: string;
  new(): Example;
}
