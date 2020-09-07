import { customElement, inject, bindable, bindingMode, NewInstance, signalBindings, useView, PLATFORM, TaskQueue, observable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema } from '../models/json-schema';
import { UISchema } from '../models/ui-schema';
import { FormTemplateRegistry, FormContext } from '../services';
import { ValueChangedEventDict, ValidationResult, FormTheme, FormOptions, SubmitArguments } from '../models';
import utils from '../utils';

type FormState = 'initializing' | 'ready' | 'error';

@inject(Element, NewInstance.of(FormContext), TaskQueue, NewInstance.of(FormTemplateRegistry))
@useView(PLATFORM.moduleName('@aujsf/core/elements/json-schema-form.html'))
@customElement('json-schema-form')
export class JsonSchemaForm {
  protected _logger = getLogger('aujsf:json-schema-form');

  public constructor(
    private _element: Element,
    private _formContext: FormContext,
    private _taskQueue: TaskQueue,
    public _registry: FormTemplateRegistry,
  ) { }

  @bindable
  public schema!: JsonSchema;

  @bindable
  public uiSchema: UISchema = {};

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable({ defaultBindingMode: bindingMode.fromView })
  public validationResult?: ValidationResult;

  @bindable
  public submit: (args: SubmitArguments) => void = (args: SubmitArguments) => {
    alert('submit triggered:\n' + JSON.stringify(args, null, 2));
  }

  @bindable
  public themes: Partial<FormTheme>[] = [];

  @bindable
  public options: FormOptions = {};

  @observable
  public state: FormState = 'initializing';

  public error?: any;

  public onsubmit(): void {
    this.submit({ value: this.value, validationResult: this.validationResult });
  }

  public bind(): void {
    this.compile();
  }

  private async compile(): Promise<void> {
    // eslint-disable-next-line no-console
    console.time('compile');
    this.error = undefined;
    this.state = 'initializing';

    try {
      await utils.form.useThemes(this._registry,
        this._formContext.options.defaultTheme ?? {},
        ...this.themes);

      utils.form.themeIsValid(this._registry);

      this._formContext.setSchema(utils.common.clone(this.schema), this.options);

      this.value = utils.jsonSchema.fillDefaults(this.value, this.schema);

      this._formContext.uiSchema = utils.common.clone(this.uiSchema);
      this._formContext.value = this.value;

      this.validate();

      this._element.addEventListener('value-changed', (event: CustomEvent<ValueChangedEventDict>) => {
        signalBindings('aujsf:ValueChanged');
        this._logger.debug('value-changed', event);
        this.validate();
      });

      this.state = 'ready';
    }
    catch (error) {
      this.error = error;

      this.state = 'error';
      this._logger.error('An error occurred while initializing', error);
    }
    // eslint-disable-next-line no-console
    console.timeEnd('compile');
  }

  public optionsChanged(newValue: FormOptions, _oldValue: FormOptions): void {
    this._formContext.setSchema(utils.common.clone(this.schema), newValue);
  }

  public schemaChanged(newValue: JsonSchema, _oldValue: JsonSchema): void {
    this._formContext.setSchema(utils.common.clone(newValue), this.options);
    this.value = utils.jsonSchema.fillDefaults(this.value, newValue);
  }

  public uiSchemaChanged(newValue: UISchema, _oldValue: UISchema): void {
    this._formContext.uiSchema = utils.common.clone(newValue);
  }

  public valueChanged(newValue: any, _oldValue: any): void {
    this._formContext.value = newValue;
  }

  public validate(): void {
    this._taskQueue.queueMicroTask(() => {
      this.validationResult = this._formContext.validator.validate(this.value);
    });
  }
}
