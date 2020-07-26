import { ViewStrategy, InlineViewStrategy, observable, bindable, useView, PLATFORM, bindingMode, containerless } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, SchemaType, UISchema, ErrorSchema } from '../models';
import { JsonSchemaUtils } from '../utils/json-schema-utils';
import { FormTemplateRegistry } from '../services/form-template-registry';
import { FormContext } from '../services/form-context';

type SlotType = SchemaType | 'all-of' | 'any-of' | 'one-of' | 'unknown';

const ATTRIBUTES = [
  ['schema.bind', 'schema'],
  ['ui-schema.bind', 'uiSchema'],
  ['value.bind', 'value'],
  ['pointer.bind', 'pointer'],
  ['errors.bind', 'errors'],
  ['required.bind', 'required'],
  ['parent-readonly.bind', 'parentReadonly'],
].map(attr => `${attr[0]}="${attr[1]}"`).join(' ');

@containerless
@useView(PLATFORM.moduleName('@aujsf/core/elements/sf-view.html'))
export class SfSlot {
  protected _logger = getLogger('aujsf:sf-slot');

  protected constructor(
    protected _element: Element,
    protected _formTemplateRegistry: FormTemplateRegistry,
    protected _formContext: FormContext,
  ) { }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable
  public schema!: JsonSchema;

  @bindable
  public uiSchema: UISchema = {};

  @bindable
  public pointer!: JsonPointer;

  @bindable
  public required?: boolean;

  @bindable
  public parentReadonly?: boolean;

  @bindable
  public errors: ErrorSchema = {}

  @observable
  public type!: SlotType;

  public viewStrategy!: ViewStrategy;

  protected bind(_ctx: any, _octx: any): void {
    try {
      this.errors = this.errors ?? {};
      this.resolveUISchemaDefaults();
      this.type = this.resolveSlotType(this.schema);
      this.pointer = this.pointer ?? new JsonPointer([]);

      this.viewStrategy = this.createViewStrategy(this.type);

      this._logger.debug('bound', this.pointer.toString());
    } catch (error) {
      this._logger.error('an error occurred while building the sf-slot', { error, viewModel: this });
      this.viewStrategy = new InlineViewStrategy(`<template style="color: red;">ERROR</template>`);
    }
  }

  private createViewStrategy(type: SlotType): ViewStrategy {
    return new InlineViewStrategy(`<template><sf-${type} ${ATTRIBUTES}></sf-${type}></template>`);
  }

  private resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
  }

  public resolveSlotType(schema: JsonSchema): SlotType {
    if ('ui:type' in this.uiSchema) {
      return this.uiSchema['ui:type']!;
    }

    if ('type' in schema) {
      if (typeof schema.type === 'string') {
        return schema.type;
      }

      if (Array.isArray(schema.type) && JsonSchemaUtils.isNullable(schema.type)) {
        return schema.type.find(type => type !== 'null')!;
      }
    } else if ('allOf' in schema) {
      return 'all-of';
    } else if ('anyOf' in schema) {
      return 'any-of';
    } else if ('oneOf' in schema) {
      return 'one-of';
    } else if ('$ref' in schema) {
      this.schema = this._formContext.validator.ajv.getSchema(schema.$ref)!.schema as JsonSchema;
      return this.resolveSlotType(this.schema);
    }

    return 'unknown';
  }
}
