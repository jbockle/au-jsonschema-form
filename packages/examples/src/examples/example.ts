import { JsonSchema, UISchema, FormOptions } from '@aujsf/core';

export abstract class Example {
  public value: any = {};
  public abstract schema: JsonSchema;
  public uiSchema: UISchema = {};
  public options: FormOptions = {};
}

export interface ExampleCtor {
  id: string;
  displayName: string;
  new(): Example;
}
