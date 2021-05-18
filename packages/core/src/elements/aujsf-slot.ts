import { observable, bindable, bindingMode, inject, customElement, inlineView, View, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, UISchema, ErrorSchema, JsonSchemaType } from '../models';
import { JsonSchemaUtils } from '../utils/json-schema-utils';
import { ViewBase } from './view-base';
import { FormContext, Enhancer } from '../services';

type SlotType = JsonSchemaType | 'all-of' | 'any-of' | 'one-of' | 'hidden' | 'unknown' | 'conditional';

/**
 * @internal
 */
export const ATTRIBUTES: [string, string][] = [
  ['schema.bind', 'schema'],
  ['ui-schema.bind', 'uiSchema'],
  ['value.bind', 'value'],
  ['pointer.bind', 'pointer'],
  ['errors.bind', 'errors'],
  ['required.bind', 'required'],
  ['parent-readonly.bind', 'parentReadonly'],
  ['class.bind', 'class'],
];

const RESOLVED = Symbol('resolved');

@inlineView(`<template></template>`)
@inject(Element, Enhancer, FormContext, TaskQueue)
@customElement('aujsf-slot')
export class AujsfSlot extends ViewBase {
  protected _logger = getLogger('aujsf:sf-slot');

  protected constructor(
    protected _element: Element,
    protected _enhancer: Enhancer,
    protected _context: FormContext,
    protected _taskQueue: TaskQueue,
  ) {
    super();
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable
  public class?: string;

  @bindable({ defaultBindingMode: bindingMode.toView })
  public schema!: JsonSchema;

  @bindable({ name: 'foo', defaultBindingMode: bindingMode.toView })
  public uiSchema: UISchema = {};

  @bindable
  public pointer!: JsonPointer;

  @bindable
  public required?: boolean;

  @bindable
  public parentReadonly?: boolean;

  @bindable
  public errors!: ErrorSchema;

  @bindable
  public root = false;

  @observable
  public type!: SlotType;

  public error?: any;

  protected owningView?: View;
  protected myView?: View;

  public created(owningView: View, myView: View): void {
    this.owningView = owningView;
    this.myView = myView;
  }

  public schemaChanged(schema?: JsonSchema): void {
    this._logger.debug('schemaChanged');
    schema && this.tryCompile(schema);
  }

  public uiSchemaChanged(uiSchema?: UISchema): void {
    if (uiSchema && (<any>uiSchema)[RESOLVED]) {
      return;
    }

    this._logger.debug('uiSchemaChanged', uiSchema);

    uiSchema && this.schema && this.tryCompile(this.schema);
  }

  private _compileHandle: any = 0;
  protected tryCompile(schema: JsonSchema): void {
    this._taskQueue.queueTask(() => {
      clearTimeout(this._compileHandle);
      this._compileHandle = setTimeout(() => {
        try {
          delete this.error;
          this.resolveUISchemaDefaults();
          this.type = this.uiSchema['ui:view'] === false
            ? 'hidden'
            : this.resolveSlotType(schema);
          this.pointer = this.pointer ?? new JsonPointer([]);

          this.view = undefined;

          this._taskQueue.queueMicroTask(() => {
            this.view = this._enhancer.enhanceSlot({
              tagName: `aujsf-${this.type}`,
              attributes: ATTRIBUTES,
              appendTo: this._element,
              bindingContext: this,
              container: this.myView!.container,
            });
          });

          this._logger.debug('enhanced', this.pointer.toString());
        } catch (error) {
          this.error = error;
          this._logger.error('an error occurred while building the sf-slot', { error, viewModel: this });
          this.view = this._enhancer.error({
            message: 'an error occurred loading the form element',
            element: this._element,
          });
        }
      }, 100);
    });
  }

  private resolveUISchemaDefaults(): void {
    const uiSchema: UISchema = { ...(this.schema['x-ui-schema'] ?? {}), ...this.uiSchema, [RESOLVED]: true };

    if (this.root && uiSchema['ui:title'] === undefined) {
      uiSchema['ui:title'] = false;
    }

    this.uiSchema = uiSchema;
  }

  // TODO this needs to be simplified
  public resolveSlotType(schema: JsonSchema): SlotType {
    if ('ui:type' in this.uiSchema && !Array.isArray(this.uiSchema['ui:type'])) {
      return this.uiSchema['ui:type'] as any;
    }

    if ('if' in schema) {
      return 'conditional';
    }
    else if ('type' in schema) {
      if (typeof schema.type === 'string') {
        return this.integerToNumber(schema.type);
      }

      if (Array.isArray(schema.type) && JsonSchemaUtils.isNullable(schema.type)) {
        return this.integerToNumber(schema.type.find(type => type !== 'null')!);
      }
    }

    if ('allOf' in schema) {
      return 'all-of';
    } else if ('anyOf' in schema) {
      return 'any-of';
    } else if ('oneOf' in schema) {
      return 'one-of';
    } else if ('$ref' in schema) {
      const refSchema = this._context.validator!.getReferenceSchema(schema.$ref);
      if (refSchema) {
        this.schema = refSchema;

        return this.resolveSlotType(this.schema);
      }

      throw new Error(`schema reference '${schema.$ref}' was not found`);
    }

    return 'unknown';
  }

  private integerToNumber(type: SlotType): SlotType {
    if (type === 'integer') {
      return 'number';
    }

    return type;
  }
}
