import { inject, NewInstance, bindable, bindingMode, customElement, inlineView, View } from 'aurelia-framework';
import { signalBindings } from 'aurelia-binding';
import Ajv from 'ajv';

import { FormContext } from '../infrastructure/form-context';
import { JsonSchema, UISchema, ErrorSchema, SchemaFormOptions, FormComponentDefinition } from '../domain';
import { FormEvents } from '../infrastructure/form-events';
import { Subscription } from 'aurelia-event-aggregator';
import jsonSchema from '../app/json-schema';
import { AppLogger } from '../infrastructure/app-logger';
import { debounce } from '../decorators/debounce';
import { IsVisible } from '../converters/is-visible';
import { ErrorSchemaService } from '../infrastructure/error-schema-service';

const DEFAULT_OPTIONS: SchemaFormOptions = {
  destroyAction: 'delete',
  autocomplete: 'off',
};


@inlineView(`<template>
  <form autocomplete.bind="formOptions.autocomplete" novalidate>
    <sf-slot show.bind="$this | isVisible"
             definition.bind="definition" 
             errors.bind="errors" 
             value.two-way="model"></sf-slot>
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
  private _logger = AppLogger.makeLogger(SchemaForm);

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
  public errors!: ErrorSchema;

  @bindable
  public options!: SchemaFormOptions;

  public formOptions!: SchemaFormOptions;

  public definition!: FormComponentDefinition;

  public validator!: Ajv.ValidateFunction;

  public bindingContext: any;
  public overrideContext: any;

  @debounce(10)
  public async validate(): Promise<void> {
    this._logger.debug('validating against json schema', JSON.stringify(this.model, null, 2));
    await this.validator(this.model);
    this._logger.debug('validation occurred', this.validator.errors);
    this.errors = this.errorSchemaService.toErrorSchema(this.validator.errors || [], this.uiSchema, this.formOptions.errorMessages);
    signalBindings('@au-jsonschema-form/model-changed');
  }

  public created(owningView: View, myView: View): void {
    this._logger.debug('created', owningView, myView);
  }

  public attached(): void {
    this._logger.debug('attached');
  }

  public bind(bindingContext: any, overrideContext: any): void {
    this._logger.debug('bound');
    this.optionsChanged();
    this.modelChanged();
    this.schemaChanged();
    this.uiSchemaChanged();
    this.context.views = this.formOptions.views || {};

    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;
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
    const valueChanged = events.subscribe.onValueChanged(this.validate.bind(this));
    const validateSub = events.subscribe.onValidate(this.validate.bind(this));
    this._subs.push(valueChanged, validateSub);
  }
}
