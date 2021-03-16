import { TaskQueue, bindable, bindingMode, signalBindings, View, NewInstance } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { FormTemplateRegistry, FormContext } from '../services';
import { ValidationResult, SubmitArguments, FormTheme, UISchema, JsonSchema, FormOptions, ErrorSchema } from '../models';
import utils from '../utils';

/**
 * The form custom element base class
 * @description implement your own form by inheriting from this
 */
export abstract class JsonSchemaForm {
  protected logger = getLogger('aujsf:json-schema-form');
  protected taskQueue?: TaskQueue;

  protected constructor(protected element: Element) {
    let debounceHandle: any = -1;
    element.addEventListener('value-changed', () => {
      clearTimeout(debounceHandle);
      debounceHandle = setTimeout(this.tryValidate.bind(this), 100);
    });
  }

  /**
   * override to specify theme controls
   */
  protected abstract getTheme(): FormTheme;

  public registry!: FormTemplateRegistry;
  public context!: FormContext;

  public status: 'initializing' | 'ready' = 'initializing';

  protected owningView?: View;
  protected myView?: View;

  protected async created(owningView: View, myView: View): Promise<void> {
    this.owningView = owningView;
    this.myView = myView;

    this.taskQueue = myView.container.get(TaskQueue);
    this.registry = myView.container.get(NewInstance.of(FormTemplateRegistry));
    this.context = myView.container.get(NewInstance.of(FormContext));

    const theme = this.getTheme();
    await Promise.all(Object.keys(theme).map(key => this.registry.add(key, theme[key])));

    this.status = 'ready';
  }

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

  @bindable({ defaultBindingMode: bindingMode.toView })
  public options?: FormOptions;

  @bindable({ defaultBindingMode: bindingMode.toView })
  public readonly = false;

  /**
   * the validation result from AJV
   * @bindable output
   */
  @bindable({ defaultBindingMode: bindingMode.fromView })
  public validationResult: ValidationResult = this.getDefaultValidatoinResult()

  /**
   * action to call when submit is triggered
   * @param args the arguments to pass to the submit call
   * @bindable callback(...SubmitArguments)
   */
  @bindable
  public submit: (args: SubmitArguments) => void = (args: SubmitArguments) => {
    alert('submit triggered:\n' + JSON.stringify(args, null, 2));
  }

  private getDefaultValidatoinResult(): ValidationResult {
    return {
      errorSchema: ErrorSchema.create(),
      errors: [],
      valid: true,
    };
  }

  public tryValidate(): void {
    this.taskQueue?.queueMicroTask(async () => {
      this.validationResult = await this.context.validator?.validate(this.value) ?? this.getDefaultValidatoinResult();
      signalBindings('aujsf:ValueChanged');
    });
  }

  protected onsubmit(): void {
    try {
      this.submit({ value: this.value, validationResult: this.validationResult });
    }
    catch (error) {
      this.logger.error('an error occurred while submitting', error);
    }
  }

  protected schemaChanged(newSchema?: JsonSchema, oldSchema?: JsonSchema): void {
    this.logger.debug('schema changed', { newSchema, oldSchema });

    if (newSchema && newSchema !== oldSchema) {
      this.context.schema = utils.common.clone(newSchema);
      this.value = this.context.schemaDefaults?.mergeDefaults(this.value, newSchema);
      this.tryValidate();
    }
  }

  protected uiSchemaChanged(newValue?: UISchema, oldValue?: UISchema): void {
    this.logger.debug('ui-schema changed', { newValue, oldValue });

    this.context.uiSchema = utils.common.clone(newValue ?? {});
  }

  protected valueChanged(newValue: any, oldValue?: any): void {
    this.logger.debug('value changed', { newValue, oldValue });

    if (this.context.schema) {
      newValue = this.context.schemaDefaults?.mergeDefaults(newValue, this.context.schema);
      this.tryValidate();
    }

    this.context.value = newValue;
  }

  protected optionsChanged(newValue?: FormOptions, oldValue?: FormOptions): void {
    this.logger.debug('options changed', { newValue, oldValue });

    if (newValue) {
      this.context.formOptions = newValue;
    }
    else {
      this.context.formOptions = {};
    }
  }
}
