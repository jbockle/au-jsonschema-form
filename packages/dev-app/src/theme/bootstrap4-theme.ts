import { JsonSchema, UISchema } from '@au-jsonschema-form/core';
import { bindable, useShadowDOM } from 'aurelia-framework';

@useShadowDOM({ mode: 'closed' })
export class Bootstrap4Theme {
  @bindable
  public schema!: JsonSchema<any>;

  @bindable
  public uiSchema!: UISchema;

  @bindable
  public model: any;
}
