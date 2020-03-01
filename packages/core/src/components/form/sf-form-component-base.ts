import { bindable, ViewStrategy, bindingMode, computedFrom } from 'aurelia-framework';
import { Subscription } from 'aurelia-event-aggregator';
import { JsonPointer } from 'jsonpointerx';
import lodash from 'lodash';

import {
  ErrorSchema,
  FormComponentDefinition,
  FormComponentViewModel,
  ComponentState,
} from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import util from '../../util';
import { AppLogger } from '../../infrastructure/app-logger';

export abstract class SfFormComponentBase implements FormComponentViewModel {
  protected _subs: Subscription[] = [];

  public constructor(
    protected events: FormEvents,
    public context: FormContext,
    protected _logger: AppLogger,
  ) { }

  public abstract value: any;

  @bindable({ defaultBindindMode: bindingMode.toView })
  public definition!: FormComponentDefinition;

  @bindable({ defaultBindindMode: bindingMode.toView })
  public errors!: ErrorSchema;

  @bindable
  public viewStrategy!: ViewStrategy;

  public jsonPointer!: JsonPointer;

  public title: string = '';

  public state: ComponentState = 'waiting';

  @computedFrom('definition.pointer')
  public get id(): string {
    return this.definition.pointer.replace(/\//g, '_');
  }

  public get hasErrors(): boolean {
    return (this.errors?._errors_ ?? []).length > 0;
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

    if (this.definition) {
      this.prepare();
    }
  }

  public prepare(): void {
    this.jsonPointer = JsonPointer.compile(this.definition.pointer);
    this.resolveValue();
    this.updateTitle();
    this.initialize();
  }

  public initialize(): void {
    this.beforeInitialize();

    this.state = 'ready';
  }

  public beforeInitialize(): void {
    // optionally override in implementing class
  }

  public errorsChanged(): void {
    this._logger.debug(`errors changed`, this.definition?.pointer, this.errors);
  }

  public unbind(): void {
    this._subs.forEach(sub => sub.dispose());
  }

  public valueChanged(_newValue: any, _oldValue: any): void {
    this._logger.debug('value changed', this.definition.pointer, this.value);
    this.events.emit.valueChanged(Object.assign({ value: this.value }, this.definition));
  }

  public abstract resolveValue(): void;

  public updateTitle(): void {
    this.title = (this.definition.uiSchema ?? {})['ui:title']
      || this.definition.schema?.title
      || this.getTitleFromPointer();
  }

  public getDefaultValueFromSchema(): any {
    if (this.definition.schema.default) {
      return lodash.cloneDeep(this.definition.schema.default);
    }

    if (this.definition.schema.const) {
      return lodash.cloneDeep(this.definition.schema.const);
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

    return lodash.startCase(segment);
  }

  public definitionChanged(): void {
    this.prepare();
  }
}
