import {
  inject, customElement, useView,
  NewInstance, TaskQueue, PLATFORM,
  bindable, bindingMode,
  signalBindings,
} from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema } from '../models/json-schema';
import { UISchema } from '../models/ui-schema';
import { FormTemplateRegistry, FormContext } from '../services';
import { ValidationResult, SubmitArguments } from '../models';
import utils from '../utils';

@inject(TaskQueue, FormTemplateRegistry, NewInstance.of(FormContext))
@useView(PLATFORM.moduleName('@aujsf/core/elements/json-schema-form.html'))
@customElement('json-schema-form')
export class JsonSchemaForm {
  protected _logger = getLogger('aujsf:json-schema-form');

  public constructor(
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
   * @bindable callback(...SubmitArguments)
   */
  @bindable
  public submit: (args: SubmitArguments) => void = (args: SubmitArguments) => {
    alert('submit triggered:\n' + JSON.stringify(args, null, 2));
  }

  public tryValidate(): void {
    this._taskQueue.queueMicroTask(() => {
      if (this.context.schema) {
        this.validationResult = this.context.validator.validate(this.value);
      }
      signalBindings('aujsf:ValueChanged');
    });
  }

  protected onsubmit(): void {
    this.submit({ value: this.value, validationResult: this.validationResult });
  }

  protected schemaChanged(newSchema?: JsonSchema, oldSchema?: JsonSchema): void {
    this._logger.debug('schema changed', { newSchema, oldSchema });

    if (newSchema && newSchema !== oldSchema) {
      this.context.schema = utils.common.clone(newSchema);
      utils.jsonSchema.fillDefaults(this.value, this.context.schema);
      this.tryValidate();
    }
  }

  protected uiSchemaChanged(newValue?: UISchema, oldValue?: UISchema): void {
    this._logger.debug('ui-schema changed', { newValue, oldValue });

    this.context.uiSchema = utils.common.clone(newValue ?? {});
  }

  protected valueChanged(newValue: any, oldValue?: any): void {
    this._logger.debug('value changed', { newValue, oldValue });

    if (this.context.schema) {
      utils.jsonSchema.fillDefaults(newValue, this.context.schema);
      this.tryValidate();
    }

    this.context.value = newValue;
  }
}
