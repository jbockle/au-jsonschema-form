import { observable, bindable, bindingMode, noView, inject, Container, customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, UISchema, ErrorSchema, JsonSchemaType } from '../models';
import { JsonSchemaUtils } from '../utils/json-schema-utils';
import { FormContext } from '../services/form-context';
import { ViewBase } from './view-base';

type SlotType = JsonSchemaType | 'all-of' | 'any-of' | 'one-of' | 'hidden' | 'unknown' | 'conditional';

const ATTRIBUTES: [string, string][] = [
  ['schema.bind', 'schema'],
  ['ui-schema.bind', 'uiSchema'],
  ['value.bind', 'value'],
  ['pointer.bind', 'pointer'],
  ['errors.bind', 'errors'],
  ['required.bind', 'required'],
  ['parent-readonly.bind', 'parentReadonly'],
  ['class.bind', 'class'],
];

@noView()
@inject(Element, Container, FormContext)
@customElement('aujsf-slot')
export class AujsfSlot extends ViewBase {
  protected _logger = getLogger('aujsf:sf-slot');

  protected constructor(
    protected _element: Element,
    protected _container: Container,
    protected _context: FormContext,
  ) {
    super();
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable
  public class?: string;

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

  @bindable
  public root = false;

  @observable
  public type!: SlotType;

  public schemaChanged(): void {
    try {
      this.errors = this.errors ?? {};
      this.resolveUISchemaDefaults();
      this.type = this.uiSchema['ui:view'] === false ? 'hidden' : this.resolveSlotType(this.schema);
      this.pointer = this.pointer ?? new JsonPointer([]);

      this.view = this._context.enhancer.enhanceSlot({
        tagName: `aujsf-${this.type}`,
        attributes: ATTRIBUTES,
        appendTo: this._element,
        bindingContext: this,
        container: this._container,
      });

      this._logger.debug('bound', this.pointer.toString());
    } catch (error) {
      this._logger.error('an error occurred while building the sf-slot', { error, viewModel: this });
      this.view = this._context.enhancer.error({
        message: 'an error occurred loading the form element',
        element: this._element,
      });
    }
  }

  protected bind(_ctx: any, _octx: any): void {
    this.schemaChanged();
  }

  private resolveUISchemaDefaults(): void {
    this.uiSchema = Object.assign(
      <UISchema>{ 'ui:placeholder': '' },
      this.schema['x-ui-schema'] ?? {},
      this.uiSchema ?? {});

    if (this.root && this.uiSchema['ui:title'] === undefined) {
      this.uiSchema['ui:title'] = false;
    }
  }

  public resolveSlotType(schema: JsonSchema): SlotType {
    if ('ui:type' in this.uiSchema && !Array.isArray(this.uiSchema['ui:type'])) {
      return this.uiSchema['ui:type'] as any;
    }

    if ('if' in schema) {
      return 'conditional';
    }
    else if ('type' in schema) {
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
      this.schema = this._context.validator.ajv.getSchema(schema.$ref)!.schema as JsonSchema;
      return this.resolveSlotType(this.schema);
    }

    return 'unknown';
  }
}
