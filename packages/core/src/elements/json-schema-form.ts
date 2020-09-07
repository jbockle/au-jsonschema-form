import { customElement, inject, bindable, bindingMode, NewInstance, signalBindings, useView, PLATFORM, TaskQueue, observable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema } from '../models/json-schema';
import { UISchema } from '../models/ui-schema';
import { FormTemplateRegistry, FormContext } from '../services';
import { ValueChangedEventDict, ValidationResult, FormTheme, FormOptions, SubmitArguments } from '../models';
import utils from '../utils';

type FormState = 'initializing' | 'ready' | 'error';

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

  @bindable({ defaultBindingMode: bindingMode.toView })
  public schema?: JsonSchema;

  @bindable({ defaultBindingMode: bindingMode.toView })
  public uiSchema?: UISchema = {};

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value?: any = {};

  @bindable({ defaultBindingMode: bindingMode.fromView })
  public validationResult?: ValidationResult;

  @bindable
  public submit: (args: SubmitArguments) => void = (args: SubmitArguments) => {
    alert('submit triggered:\n' + JSON.stringify(args, null, 2));
  }

  @bindable
  public themes?: Partial<FormTheme>[] = [];

  @bindable
  public options?: FormOptions = {};

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
    this._taskQueue.queueMicroTask(async () => {
      // eslint-disable-next-line no-console
      console.time('compile');
      this.error = undefined;
      this.state = 'initializing';

      try {
        await this.themesChanged(this.themes);
        this.optionsChanged(this.options);
        this.schemaChanged(this.schema);
        this.valueChanged(this.value);
        this.uiSchemaChanged();

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

  public optionsChanged(newValue?: FormOptions, oldValue?: FormOptions): void {
    this._logger.debug('options changed', { newValue, oldValue });
    this.context.options = newValue;
  }

  public schemaChanged(newValue?: JsonSchema, oldValue?: JsonSchema): void {
    if (newValue && newValue !== oldValue) {
      newValue = utils.common.clone(newValue);
      this._logger.debug('schema changed', { newValue, oldValue });

      if (this.options) {
        this.context.schema = newValue;
        this.value = utils.jsonSchema.fillDefaults(this.value, newValue);
      }
    }
  }

  public uiSchemaChanged(newValue?: UISchema, oldValue?: UISchema): void {
    this._logger.debug('ui-schema changed', { newValue, oldValue });
    this.context.uiSchema = utils.common.clone(newValue ?? {});
  }

  public async themesChanged(newValue?: Partial<FormTheme>[], oldValue?: Partial<FormTheme>[]): Promise<void> {
    this._logger.debug('themes changed', { newValue, oldValue });
    if (newValue) {
      await utils.form.useThemes(this._registry,
        this.context.pluginOptions.defaultTheme ?? {},
        ...newValue);

      utils.form.themeIsValid(this._registry);
    }
  }

  public valueChanged(newValue: any, oldValue?: any): void {
    this._logger.debug('value changed', { newValue, oldValue });
    if (this.schema) {
      utils.jsonSchema.fillDefaults(newValue, this.schema);
    }

    this.context.value = newValue;
  }

  public validate(): void {
    this._taskQueue.queueMicroTask(() => {
      this.validationResult = this.context.validator.validate(this.value);
    });
  }
}
