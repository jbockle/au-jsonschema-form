import { bindable, ViewStrategy, bindingMode, Disposable } from 'aurelia-framework';
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

export abstract class SfFormElementBase implements FormElementViewModel {
  private _subs: Subscription[] = [];

  public constructor(
    protected events: FormEvents,
    public context: FormContext,
    public viewService: FormElementViewRegistry,
    protected _logger: AppLogger,
  ) { }

  public abstract value: any;

  @bindable({ defaultBindindMode: bindingMode.toView })
  public definition!: FormElementDefinition;

  @bindable
  public errors!: ErrorSchema;

  public jsonPointer!: JsonPointer;

  public title: string = '';

  public elementView!: FormElementView;
  public viewStrategy!: ViewStrategy;

  public definitionChangedSub?: Disposable;


  public get hasErrors(): boolean {
    return !!this.errors.__errors;
  }

  public get className(): string {
    return kebabCase(this.getViewSet().default) + '-compose';
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
    this.resolveValue();
    this.updateTitle();

    this.resolveViewStrategy();
  }

  public resolveViewStrategy(): void {
    this.beforeResolveViewStrategy();
    const viewMeta = views.queries.getViewMeta(this);
    this.viewStrategy = viewMeta.viewStrategy;
    this.elementView = viewMeta.view;
  }

  public beforeResolveViewStrategy(): void {
    // optionally override in implementing class
  }

  public errorsChanged(): void {
    this._logger.debug(`errors changed`, this.definition.pointer, this.errors);
  }

  public unbind(): void {
    this._subs.forEach(sub => sub.dispose());
  }

  public valueChanged(_newValue: any, _oldValue: any): void {
    this._logger.debug('value changed', this.definition.pointer, this.value);
    this.events.emit.valueChanged(Object.assign({ value: this.value }, this.definition));
  }

  public abstract getViewSet(): FormElementViewSet;
  public abstract resolveValue(): void;

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

  public definitionChanged(): void {
    this.jsonPointer = JsonPointer.compile(this.definition.pointer);
    this.updateTitle();
  }
}
