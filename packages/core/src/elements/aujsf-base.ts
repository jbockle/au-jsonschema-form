import { Logger } from 'aurelia-logging';
import { bindingMode, computedFrom, bindable, BindingEngine, Container, View, inlineView } from 'aurelia-framework';
import { JsonPointer } from 'jsonpointerx';

import { FormTemplateRegistry, FormContext, ViewProvider, Enhancer } from '../services';
import { JsonSchema, UISchema, ValueChangedEventDict, ErrorSchema } from '../models';
import utils from '../utils';
import { BindingSignaler } from 'aurelia-templating-resources';
import { ViewBase } from './view-base';

@inlineView(`<template></template>`)
export abstract class AujsfBase<TSchema extends JsonSchema, TValue = any>
  extends ViewBase {
  protected abstract _logger: Logger;
  protected _bctx: any;
  protected _obctx: any;

  protected constructor(
    protected _element: Element,
    protected _container: Container,
    protected _templateRegistry: FormTemplateRegistry,
    public context: FormContext,
    protected viewProvider: ViewProvider<JsonSchema>,
    protected signaler?: BindingSignaler,
    protected engine?: BindingEngine,
  ) {
    super();
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value!: TValue;

  @bindable({ changeHandler: 'schemaChanged' })
  public schema!: TSchema;

  @bindable({ changeHandler: 'schemaChanged' })
  public uiSchema: UISchema = {};

  @bindable
  public pointer!: JsonPointer;

  @bindable
  public required?: boolean;

  @bindable
  public parentReadonly?: boolean;

  @bindable
  public errors: ErrorSchema = {};

  protected owningView?: View;
  protected myView?: View;

  public created(owningView: View, myView: View): void {
    this.owningView = owningView;
    this.myView = myView;
  }

  @computedFrom('parentReadonly', 'schema')
  public get readonly(): boolean {
    return this.parentReadonly
      || (this.uiSchema['ui:read-only'] ?? this.schema.readOnly)
      || ('const' in this.schema && utils.common.notNullOrUndefined((this.schema as any).const));
  }

  @computedFrom('uiSchema', 'schema', 'pointer')
  public get title(): string | undefined {
    if ('ui:title' in this.uiSchema && this.uiSchema['ui:title'] === false) {
      return;
    }

    return this.getTitleTemplate()
      ?? this.schema.title
      ?? utils.common.startCase(utils.array.last(this.pointer.segments) ?? 'root');
  }

  @computedFrom('uiSchema', 'schema')
  public get description(): string | undefined {
    return this.uiSchema['ui:description'] ?? this.schema.description;
  }

  @computedFrom('schema', 'uiSchema')
  public get placeholder(): string {
    return this.uiSchema['ui:placeholder'] ?? '';
  }

  @computedFrom('pointer')
  public get id(): string {
    return this.pointer.toString();
  }

  @computedFrom('errors')
  public get hasErrors(): boolean {
    return (this.errors?._errors_ ?? []).length > 0;
  }

  @computedFrom('errors')
  public get errorMessages(): string[] {
    return this.hasErrors ? this.errors._errors_! : [];
  }

  public bind(bctx: any, obctx: any): void {
    this._logger.debug('binding', this);
    this._bctx = bctx;
    this._obctx = obctx;

    this.resolveUISchemaDefaults();

    this.bound();

    this._logger.debug('bound', this);

    this.enhance();
  }

  protected bound(): void {
    //
  }

  protected resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
    this.uiSchema['ui:view'] = this.uiSchema['ui:view'] ?? this.viewProvider.getTemplate(this);
  }

  public getTitleTemplate(): string | undefined {
    if ('ui:title' in this.uiSchema && typeof this.uiSchema['ui:title'] === 'string') {
      return utils.common.fillTemplate(this.uiSchema['ui:title'], this);
    }
  }

  protected enhance(): void {
    this._logger.debug('creating view strategy', this);

    const viewName = this.uiSchema['ui:view'] || 'hidden';

    if (viewName === 'unknown' || !this._templateRegistry.has(viewName)) {
      this.view = this._container.get(Enhancer).error({
        message: `the ui:view '${viewName}' was not found`,
        element: this._element,
      });

      return;
    }

    const template = this._templateRegistry.get(viewName);

    this.view = this._container.get(Enhancer).enhanceTemplate({
      element: this._element,
      bindingContext: this,
      container: this.myView!.container,
      template,
      attributes: this.uiSchema['ui:view-class']
        ? [['class', this.uiSchema['ui:view-class']]]
        : undefined,
    });
  }

  private _bindHandle: any = -1;
  protected rebind(): void {
    clearTimeout(this._bindHandle);
    this._bindHandle = setTimeout(() => {
      this._logger.debug('rebinding');
      this.bind(this._bctx, this._obctx);
    }, 100);
  }

  protected dispatchEvent(name: string, detail: any, element: Element = this._element): void {
    element.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail,
    }));
  }

  public valueChanged(newValue: any, oldValue: any): void {
    const event: ValueChangedEventDict = {
      newValue,
      oldValue,
      pointer: this.pointer,
      pointerString: this.pointer.toString() || '/',
      uiSchema: this.uiSchema,
      schema: this.schema,
    };
    this.dispatchEvent('value-changed', event);
    this.context.events.emitPointerChange(event);
  }

  public schemaChanged(...args: any[]): void {
    this._logger.debug('schema binding changed', { ...args });

    this.rebind();
  }
}
