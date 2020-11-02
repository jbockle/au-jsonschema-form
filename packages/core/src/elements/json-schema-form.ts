import { customElement, inject, bindable, bindingMode, NewInstance, signalBindings, useView, PLATFORM, TaskQueue, observable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema } from '../models/json-schema';
import { UISchema } from '../models/ui-schema';
import { FormTemplateRegistry, FormContext } from '../services';
import { ValueChangedEventDict, ValidationResult, FormOptions, SubmitArguments } from '../models';
import utils from '../utils';

type FormState = 'initializing' | 'ready' | 'error';

@inject(Element, TaskQueue, FormTemplateRegistry, NewInstance.of(FormContext))
@useView(PLATFORM.moduleName('@aujsf/core/elements/json-schema-form.html'))
@customElement('json-schema-form')
export class JsonSchemaForm {
  protected _logger = getLogger('aujsf:json-schema-form');

  public constructor(
    private _element: Element,
    private _taskQueue: TaskQueue,
    public registry: FormTemplateRegistry,
    public context: FormContext,
  ) { }

  /**
   * the json schema to build the form from and validate the model against
   * @bindable input
   */
  @bindable({ defaultBindingMode: bindingMode.toView })
  public schema!: JsonSchema;

  /**
   * the ui-schema to override model values
   * @bindable input
   */
  @bindable({ defaultBindingMode: bindingMode.toView })
  public uiSchema?: UISchema;

  /**
   * the form's value, this is pre-populated against the schema
   * @bindable input/output
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value?: any;

  /**
   * the validation result from AJV
   * @bindable output
   */
  @bindable({ defaultBindingMode: bindingMode.fromView })
  public validationResult?: ValidationResult;

  /**
   * action to call when submit is triggered
   * @param args the arguments to pass to the submit call
   * @bindable callback
   */
  @bindable
  public submit: (args: SubmitArguments) => void = (args: SubmitArguments) => {
    alert('submit triggered:\n' + JSON.stringify(args, null, 2));
  }

  /**
   * form options
   */
  @bindable
  public options?: FormOptions = {};

  @observable
  public state: FormState = 'initializing';

  public error?: any;

  public validate(): void {
    this._taskQueue.queueMicroTask(() => {
      this.validationResult = this.context.validator.validate(this.value);
    });
  }

  protected onsubmit(): void {
    this.submit({ value: this.value, validationResult: this.validationResult });
  }

  // TODO remove bind/compile methods and state is computedFrom instead
  protected bind(): void {
    this.compile();
  }

  private async compile(): Promise<void> {
    this._taskQueue.queueMicroTask(async () => {
      this.error = undefined;
      this.state = 'initializing';

      try {
        this.optionsChanged(this.options);
        this.uiSchemaChanged(this.uiSchema);
        this.schemaChanged(this.schema);

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
    });
  }

  protected optionsChanged(newValue?: FormOptions, oldValue?: FormOptions): void {
    this._logger.debug('options changed', { newValue, oldValue });
    this.context.options = newValue;
  }

  protected schemaChanged(newValue?: JsonSchema, oldValue?: JsonSchema): void {
    if (newValue && newValue !== oldValue) {
      newValue = utils.common.clone(newValue);
      this._logger.debug('schema changed', { newValue, oldValue });

      if (this.options) {
        this.context.schema = newValue;
        utils.jsonSchema.fillDefaults(this.value, newValue);
        this.validate();
      }
    }
  }

  protected uiSchemaChanged(newValue?: UISchema, oldValue?: UISchema): void {
    this._logger.debug('ui-schema changed', { newValue, oldValue });
    this.context.uiSchema = utils.common.clone(newValue ?? {});
  }

  protected valueChanged(newValue: any, oldValue?: any): void {
    this._logger.debug('value changed', { newValue, oldValue });
    if (this.schema) {
      utils.jsonSchema.fillDefaults(newValue, this.schema);
    }

    this.context.value = newValue;
  }
}
