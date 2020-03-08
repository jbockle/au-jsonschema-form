import { inject, NewInstance, bindable, bindingMode, customElement, inlineView, View } from 'aurelia-framework';
import { signalBindings, computedFrom } from 'aurelia-binding';
import Ajv from 'ajv';

import { FormContext } from '../infrastructure/form-context';
import { JsonSchema, UISchema, ErrorSchema, SchemaFormOptions, FormComponentDefinition } from '../domain';
import { FormEvents } from '../infrastructure/form-events';
import { Subscription } from 'aurelia-event-aggregator';
import jsonSchema from '../app/json-schema';
import { AppLogger } from '../infrastructure/app-logger';
import { IsVisible } from '../converters/is-visible';
import { ErrorSchemaService } from '../infrastructure/error-schema-service';

const DEFAULT_OPTIONS: SchemaFormOptions = {
  showState: false,
  destroyAction: 'delete',
  autocomplete: 'off',
};


type SubmitArgs = {
  errorSchema: ErrorSchema;
  model: any;
  errors: Ajv.ErrorObject[];
};

@inlineView(`<template>
  <form submit.trigger="onSubmit()" autocomplete.bind="formOptions.autocomplete" novalidate>
    <sf-slot show.bind="$this | isVisible"
             definition.bind="definition" 
             errors.bind="errorSchema" 
             value.two-way="model"></sf-slot>
    <slot>
      <button type="submit">Submit</button>
    </slot>
    <small if.bind="options.showState"><em>\${state}</em></small>
  </form>
</template>`, [IsVisible])
@inject(
  NewInstance.of(FormContext),
  NewInstance.of(FormEvents),
  ErrorSchemaService,
)
@customElement('schema-form')
export class SchemaForm {
  private _subs: Subscription[] = [];
  private _logger = AppLogger.makeLogger('SchemaForm');
  private _validatorHandle: any = 0;

  public constructor(
    public context: FormContext,
    public events: FormEvents,
    public errorSchemaService: ErrorSchemaService,
  ) {
    this._logger.debug(SchemaForm.name);
    this.createSubscriptions(events);
  }

  @bindable
  public schema!: JsonSchema<any>;

  @bindable
  public uiSchema: UISchema = {};

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public model: any;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public errorSchema!: ErrorSchema;

  @bindable
  public options!: SchemaFormOptions;

  @bindable
  public submit: (args: SubmitArgs) => Promise<void> = async (_args: SubmitArgs) => {
    alert(`submit triggered!\n - check console log for submit details\n - add \`submit.call="model, errors"\` to handle submit\n`);
  }

  public formOptions!: SchemaFormOptions;

  public definition!: FormComponentDefinition;

  public validator!: Ajv.ValidateFunction;

  public bindingContext: any;
  public overrideContext: any;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public state: 'ready' | 'initializing' | 'validating' | 'error' | 'hasValidationErrors' | 'submitting' = 'initializing';

  @computedFrom('validator.errors')
  public get hasErrors(): boolean {
    return (this.validator.errors ?? []).length !== 0;
  }

  private async beginValidate(): Promise<void> {
    this.state = 'validating';
    clearTimeout(this._validatorHandle);
    this._validatorHandle = setTimeout(this.validate.bind(this), 10);
  }

  public async validate(): Promise<void> {
    try {
      this._logger.debug('validating against json schema', JSON.stringify(this.model, null, 2));
      await this.validator(this.model);
      this._logger.debug('validation occurred', this.validator.errors);
      this.errorSchema = this.errorSchemaService.toErrorSchema(this.validator.errors || [], this.uiSchema, this.formOptions.errorMessages);
      signalBindings('@au-jsonschema-form/model-changed');
      this.state = (this.validator.errors ?? []).length > 0 ? 'hasValidationErrors' : 'ready';
    } catch (error) {
      this._logger.error('error validating', error);
    }
  }

  public async onSubmit(): Promise<void> {
    if (this.submit instanceof Function && this.state !== 'submitting') {
      this.state = 'submitting';
      try {
        const args: SubmitArgs = {
          errors: this.validator.errors ?? [],
          errorSchema: this.errorSchema,
          model: this.model,
        };
        this._logger.info('submitting args', args);
        await this.submit(args);
      } catch (error) {
        this._logger.error('error submitting', error);
      }
      this.state = 'ready';
    }
  }

  public created(owningView: View, myView: View): void {
    this._logger.debug('created', owningView, myView);
  }

  public attached(): void {
    this._logger.debug('attached');
  }

  public bind(bindingContext: any, overrideContext: any): void {
    try {
      this._logger.debug('bound');
      this.optionsChanged();
      this.modelChanged();
      this.schemaChanged();
      this.uiSchemaChanged();
      this.context.views = this.formOptions.views || {};

      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;

      this.state = 'ready';
    } catch (error) {
      this._logger.error('error initialzing', error);
    }
  }

  public unbind(): void {
    this._logger.debug('unbind');
    this._subs.forEach(sub => sub.dispose());
  }

  private modelChanged(): void {
    this._logger.debug('modelChanged');
    if (this.context.model !== this.model) {
      this.context.model = this.model;
      this.events.emit.modelChanged();
    }
  }

  private schemaChanged(): void {
    this._logger.debug('schemaChanged');
    this.context.schema = this.schema;
    this.validator = jsonSchema.commands.buildValidator(this.schema, this.formOptions);
    this.setDefinition();
  }

  private uiSchemaChanged(): void {
    this._logger.debug('uiSchemaChanged');
    this.context.uiSchema = this.uiSchema;
    this.setDefinition();
  }

  private optionsChanged(): void {
    this._logger.debug('optionsChanged');
    this.formOptions = Object.assign({}, DEFAULT_OPTIONS, this.formOptions);
  }

  private setDefinition(): void {
    if (this.schema) {
      this.definition = {
        pointer: '',
        required: false,
        schema: jsonSchema.queries.resolveSchema(this.schema, this.schema),
        uiSchema: this.uiSchema,
        type: jsonSchema.queries.resolveSchemaType(this.schema, this.schema),
      };
    }
  }

  private createSubscriptions(events: FormEvents): void {
    const valueChanged = events.subscribe.onValueChanged(this.beginValidate.bind(this));
    const validateSub = events.subscribe.onValidate(this.beginValidate.bind(this));
    this._subs.push(valueChanged, validateSub);
  }
}
