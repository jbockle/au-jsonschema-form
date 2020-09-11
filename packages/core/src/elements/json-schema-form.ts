import { customElement, inject, bindable, bindingMode, NewInstance, signalBindings, useView, PLATFORM, TaskQueue, observable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema } from '../models/json-schema';
import { UISchema } from '../models/ui-schema';
import { FormTemplateRegistry, FormContext } from '../services';
import { ValueChangedEventDict, ValidationResult, FormTheme, FormOptions, SubmitArguments } from '../models';
import utils from '../utils';

type FormState = 'initializing' | 'ready' | 'error';

const DEFAULT_ROOT_UI_SCHEMA: UISchema = { 'ui:title': false };

@inject(Element, TaskQueue, NewInstance.of(FormTemplateRegistry), NewInstance.of(FormContext))
@useView(PLATFORM.moduleName('@aujsf/core/elements/json-schema-form.html'))
@customElement('json-schema-form')
export class JsonSchemaForm {
  protected _logger = getLogger('aujsf:json-schema-form');

  public constructor(
    private _element: Element,
    private _taskQueue: TaskQueue,
    private _registry: FormTemplateRegistry,
    private context: FormContext,
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
   * list of form modules to include
   * @remarks if the module name appears more than once, it overrides previous module
   * 
   * @example
   * ```ts
   * // set default theme in plugin
   * aurelia.use.plugin(PLATFORM.moduleName(`@aujsf/core`), options => {
   *   options.defaultTheme = {
   *     'string-input': `@aujsf/bootstrap-theme/string-input.html`,
   *     'checkbox': `@aujsf/bootstrap-theme/checkbox.html`
   *   };
   * });
   * ```
   * 
   * then in view
   * ```html
   *   <json-schema-form themes.bind="[{'string-input': 'path/to/string-input.html','array-tabs': 'path/to/array-tabs.html'},{'array-tabs': 'path/to/foo-array-tabs.html'}]"...></json-schema-form>
   * ```
   * 
   * results in the following combined theme
   * ```ts
   * {
   *   'string-input': 'path/to/string-input.html',
   *   'checkbox': `@aujsf/bootstrap-theme/checkbox.html`,
   *   'array-tabs': 'path/to/foo-array-tabs.html'
   * }
   * ```
   * 
   * @bindable input
   */
  @bindable
  public themes?: Partial<FormTheme>[] = [];

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

  protected bind(): void {
    this.compile();
  }

  private async compile(): Promise<void> {
    this._taskQueue.queueMicroTask(async () => {
      // eslint-disable-next-line no-console
      console.time('compile');
      this.error = undefined;
      this.state = 'initializing';

      try {
        await this.themesChanged(this.themes);
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
      // eslint-disable-next-line no-console
      console.timeEnd('compile');
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
      }
    }
  }

  protected uiSchemaChanged(newValue?: UISchema, oldValue?: UISchema): void {
    this._logger.debug('ui-schema changed', { newValue, oldValue });
    const uiSchema: UISchema = { ...DEFAULT_ROOT_UI_SCHEMA };
    utils.common.merge(uiSchema, utils.common.clone(newValue ?? {}));
    this.context.uiSchema = uiSchema;
  }

  protected async themesChanged(newValue?: Partial<FormTheme>[], oldValue?: Partial<FormTheme>[]): Promise<void> {
    this._logger.debug('themes changed', { newValue, oldValue });
    if (newValue) {
      await utils.form.useThemes(this._registry,
        this.context.pluginOptions.defaultTheme ?? {},
        ...newValue);

      utils.form.themeIsValid(this._registry);
    }
  }

  protected valueChanged(newValue: any, oldValue?: any): void {
    this._logger.debug('value changed', { newValue, oldValue });
    if (this.schema) {
      utils.jsonSchema.fillDefaults(newValue, this.schema);
    }

    this.context.value = newValue;
  }
}
