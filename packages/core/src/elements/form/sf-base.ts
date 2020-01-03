import { bindable, ViewStrategy, InlineViewStrategy } from 'aurelia-framework';
import { Subscription } from 'aurelia-event-aggregator';
import { JsonPointer } from 'jsonpointerx';
import startCase from 'lodash/startCase';
import kebabCase from 'lodash/kebabCase';

import {
  ErrorSchema,
  FormElementViewSet,
  FormElementView,
  FormElementDefinition,
  FormElementViewModel,
} from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import views from '../../app/view';
import { FormContext } from '../../infrastructure/form-context';
import util from '../../util';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';

const UNKNOWN_VIEW = {
  markup: `<template><code>unknown view '${name}'</code></template>`,
};

export abstract class SfBase implements FormElementViewModel {
  private _subs: Subscription[] = [];

  public constructor(
    protected events: FormEvents,
    public context: FormContext,
    public viewService: FormElementViewRegistry,
    protected _logger: AppLogger,
  ) {
    // const sub = this.events.subscribe.onModelChanged(() => {
    //   this._logger.debug('reacting to model changed');
    //   this.state = ViewModelState.initializing;
    //   this.updateValue();
    // });
    // this._subs.push(sub);
  }

  public abstract value: any;

  @bindable
  public definition!: FormElementDefinition;

  @bindable
  public errors: ErrorSchema = {};

  public jsonPointer!: JsonPointer;

  public title: string = '';

  public elementView!: FormElementView;
  public viewStrategy!: ViewStrategy;

  public abstract viewSet: FormElementViewSet;

  public get hasErrors(): boolean {
    return !!this.errors.__errors;
  }

  public get className(): string {
    return kebabCase(this.viewSet.default) + '-compose';
  }

  public get isReadOnly(): boolean {
    if (this.definition.parent?.isReadOnly) {
      return true;
    }

    let readOnly = typeof this.definition.uiSchema.readOnly === 'boolean'
      ? this.definition.uiSchema.readOnly
      : this.definition.schema.readOnly;
    if (this.definition.uiSchema.readOnly instanceof Function) {
      readOnly = this.definition.uiSchema.readOnly(this);
    }

    return readOnly || this.definition.schema.const !== undefined;
  }

  protected bindingContext: any;
  protected overrideContext: any;

  public bind(bindingContext: any, overrideContext: any): void {
    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;

    this.jsonPointer = JsonPointer.compile(this.definition.pointer);
    this.updateValue();
    this.updateTitle();

    this.beforeGetViewInfo();
    const viewInfo = this.getViewInfo(views.queries.getViewName(this));
    this.viewStrategy = viewInfo.viewStrategy;
    this.elementView = viewInfo.view;
  }

  public beforeGetViewInfo(): void {
    // optionally override in implementing class
  }

  public errorsChanged(): void {
    this._logger.debug(`errors changed`, this.definition.pointer, this.errors);
  }

  public unbind(): void {
    this._subs.forEach(sub => sub.dispose());
  }

  public abstract valueChanged(newValue: any, oldValue: any): void;

  public defaultValueChanged(): void {
    this._logger.debug('value changed', this.definition.pointer, this.value);
    this.events.emit.valueChanged(Object.assign({ value: this.value }, this.definition));
  }

  public abstract updateValue(): void;

  public updateTitle(): void {
    this.title = (this.definition.uiSchema ?? {})['ui:title']
      || this.definition.schema?.title
      || this.getTitleFromPointer();
  }

  public getDefaultValue(): any {
    if (this.definition.schema.default) {
      return this.definition.schema.default;
    }

    if (this.definition.schema.const) {
      return this.definition.schema.const;
    }
  }

  public getTitleFromPointer(): string {
    const segment = util.last(this.jsonPointer.segments);;
    if (!segment) {
      return '';
    }

    const segmentNumber = Number.parseInt(segment);
    if (!isNaN(segmentNumber)) {
      return `Item ${segmentNumber + 1}`;
    }

    return startCase(segment);
  }

  public getViewInfo(name: string): { viewStrategy: ViewStrategy; view: FormElementView } {
    const view: FormElementView = this.context.views![name]
      ?? this.viewService.get(name)
      ?? UNKNOWN_VIEW;

    return { viewStrategy: this.createInlinveViewStrategy(view), view };
  }

  public createInlinveViewStrategy(view: FormElementView): InlineViewStrategy {
    return new InlineViewStrategy(view.markup, view.dependencies);
  }
}
