import { Logger } from 'aurelia-logging';
import { bindable, ViewStrategy, InlineViewStrategy, bindingMode, inject, useView, PLATFORM, computedFrom } from 'aurelia-framework';
import { JsonPointer } from 'jsonpointerx';

import { FormTemplateRegistry, FormContext } from '../services';
import { JsonSchema, UISchema, ValueChangedEventDict, ErrorSchema } from '../models';
import utils from '../utils';

@inject(Element, FormTemplateRegistry, FormContext)
@useView(PLATFORM.moduleName('@aujsf/core/elements/aujsf-view.html'))
export abstract class AujsfBase<TSchema extends JsonSchema, TValue = any> {
  protected abstract _logger: Logger;
  protected _bctx: any;
  protected _obctx: any;

  protected constructor(
    protected _element: Element,
    protected _templateRegistry: FormTemplateRegistry,
    protected _formContext: FormContext,
  ) { }

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

  public viewStrategy!: ViewStrategy;

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

  public getTitleTemplate(): string | undefined {
    if ('ui:title' in this.uiSchema && typeof this.uiSchema['ui:title'] === 'string') {
      return utils.common.fillTemplate(this.uiSchema['ui:title'], this);
    }
  }

  public valueChanged(newValue: any, oldValue: any): void {
    const detail: ValueChangedEventDict = { newValue, oldValue, pointer: this.pointer };
    this.dispatchEvent('value-changed', detail);
  }

  public async bind(bctx: any, obctx: any): Promise<void> {
    this._logger.debug('binding', this);
    this._bctx = bctx;
    this._obctx = obctx;

    this.resolveUISchemaDefaults();

    await this.bound();

    this._logger.debug('bound', this);

    this.viewStrategy = this.createViewStrategy();
  }

  private resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
    this.uiSchema['ui:view'] = this.uiSchema['ui:view'] ?? this.getTemplate();
  }

  protected getTemplate(): string | undefined {
    return 'unknown';
  }

  protected createViewStrategy(): ViewStrategy {
    this._logger.debug('creating view strategy', this);

    if (this.uiSchema['ui:view'] === 'unknown') {
      return new InlineViewStrategy(`<template>unknown</template>`);
    }

    const template = this._templateRegistry.get(this.uiSchema['ui:view'] || 'hidden');

    return new InlineViewStrategy(
      template.entry.template.outerHTML,
      template.entry.dependencies.map(d => d.src));
  }

  protected async bound(): Promise<void> {
    //
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

  public schemaChanged(...args: any[]): void {
    this._logger.debug('schema binding changed', { ...args });

    this.rebind();
  }
}
