
import { bindable, bindingMode, customElement, inlineView } from 'aurelia-framework';
import { FormDefinition } from '../form-definition';
import { JsonSchemaObjectDefinition } from '../json-schema-definition';
import { FormOptions } from './form-options';

@customElement('au-jsonschema-form')
@inlineView(`
<template>
  <au-sf-object form.bind="form" model.bind="model"></au-sf-object>
</template>
`)
export class AureliaJsonSchemaForm {
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public model: { [key: string]: any } | any[];

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public form: FormDefinition;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public schema: JsonSchemaObjectDefinition;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public options?: FormOptions;
}
