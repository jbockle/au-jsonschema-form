import { customElement, inlineView, bindable, bindingMode } from 'aurelia-framework';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, UISchema, ErrorSchema } from '../../models';

@inlineView(`<template></template>`)
@customElement('aujsf-hidden')
export class AujsfHidden {
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value!: any;

  @bindable()
  public schema!: JsonSchema;

  @bindable()
  public uiSchema: UISchema = {};

  @bindable
  public pointer!: JsonPointer;

  @bindable
  public required?: boolean;

  @bindable
  public parentReadonly?: boolean;

  @bindable
  public errors!: ErrorSchema;
}
