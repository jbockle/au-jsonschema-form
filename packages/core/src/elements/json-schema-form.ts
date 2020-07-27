import { customElement, inject, bindable, bindingMode, NewInstance, signalBindings, useView, PLATFORM } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema } from '../models/json-schema';
import { UISchema } from '../models/ui-schema';
import { FormTemplateRegistry, FormContext } from '../services';
import { ValueChangedEventDict, ValidationResult, FormTheme, FormOptions, SubmitArguments } from '../models';
import utils from '../utils';

type FormState = 'initializing' | 'ready' | 'error';

@inject(Element, NewInstance.of(FormContext), NewInstance.of(FormTemplateRegistry))
@useView(PLATFORM.moduleName('@aujsf/core/elements/json-schema-form.html'))
@customElement('json-schema-form')
export class JsonSchemaForm {
  protected _logger = getLogger('aujsf:json-schema-form');

  public constructor(
    private _element: Element,
    private _formContext: FormContext,
    public _templateRegistry: FormTemplateRegistry,
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

  public state: FormState = 'initializing';

  public error?: any;

  public onsubmit(): void {
    this.submit({ value: this.value, validationResult: this.validationResult });
  }

  public async bind(): Promise<void> {
    this.error = undefined;
    this.state = 'initializing';

    try {
      await utils.form.useThemes(this._templateRegistry,
        this._formContext.options.defaultTheme ?? {},
        ...this.themes);

      utils.form.themeIsValid(this._templateRegistry);

      this._formContext.setSchema(utils.common.clone(this.schema), this.options);
      this._formContext.uiSchema = utils.common.clone(this.uiSchema);
      this._formContext.value = this.value;

      this.validate(100);

      this._element.addEventListener('value-changed', (event: CustomEvent<ValueChangedEventDict>) => {
        signalBindings('aujsf:ValueChanged');
        this._logger.debug('value-changed', event);
        this.validate();
      });

      this.state = 'ready';
    } catch (error) {
      this.error = error;

      this.state = 'error';
      this._logger.error('An error occurred while initializing', error);
    }
  }

  public optionsChanged(newValue: FormOptions, _oldValue: FormOptions): void {
    this._formContext.setSchema(utils.common.clone(this.schema), newValue);
  }

  public schemaChanged(newValue: JsonSchema, _oldValue: JsonSchema): void {
    this._formContext.setSchema(utils.common.clone(newValue), this.options);
  }

  public uiSchemaChanged(newValue: UISchema, _oldValue: UISchema): void {
    this._formContext.uiSchema = utils.common.clone(newValue);
  }

  public valueChanged(newValue: any, _oldValue: any): void {
    this._formContext.value = newValue;
  }

  private _validateHandle: any = -1;
  public validate(wait?: number): void {
    clearTimeout(this._validateHandle);
    this._validateHandle = setTimeout(() => {
      this.validationResult = this._formContext.validator.validate(this.value);
    }, wait ?? 50);
  }
}
