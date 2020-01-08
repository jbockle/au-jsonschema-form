import { inject, NewInstance, bindable, ViewStrategy, bindingMode, customElement } from 'aurelia-framework';
import Ajv from 'ajv';

import { FormContext } from '../infrastructure/form-context';
import { JsonSchema, UISchema, ErrorSchema, SchemaFormOptions, DestroyAction, FormElementDefinition } from '../domain';
import { FormEvents } from '../infrastructure/form-events';
import { Subscription } from 'aurelia-event-aggregator';
import jsonSchema from '../app/json-schema';
import { AppLogger } from '../infrastructure/app-logger';
import errorSchemas from '../app/error-schema';
import { debounce } from '../decorators/debounce';

const DEFAULT_OPTIONS: SchemaFormOptions = {
  destroyAction: 'delete',
};

@inject(
  NewInstance.of(FormContext),
  NewInstance.of(FormEvents),
)
@customElement('schema-form')
export class SchemaForm {
  private _subs: Subscription[] = [];
  private _logger = AppLogger.makeLogger(SchemaForm);

  public constructor(
    public context: FormContext,
    public events: FormEvents,
  ) {
    this.createSubscriptions(events);
    this._logger.debug(SchemaForm.name);
  }

  @bindable
  public schema!: JsonSchema<any>;

  @bindable
  public uiSchema: UISchema = {};

  @bindable({ defaultBindingMode: bindingMode.toView })
  public model: any;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public errors!: ErrorSchema;

  @bindable
  public options: SchemaFormOptions = Object.assign({}, DEFAULT_OPTIONS);

  public definition!: FormElementDefinition;

  public viewStrategy!: ViewStrategy;

  public validator!: Ajv.ValidateFunction;

  public bindingContext: any;
  public overrideContext: any;

  public createSubscriptions(events: FormEvents): void {
    const valueChanged = events.subscribe.onValueChanged(this.validate.bind(this));
    const validateSub = events.subscribe.onValidate(this.validate.bind(this));
    this._subs.push(valueChanged, validateSub);
  }

  @debounce(50)
  public async validate(): Promise<void> {
    this._logger.debug('validating against json schema', JSON.stringify(this.model, null, 2));
    await this.validator(this.model);
    this._logger.debug('validation occurred', this.validator.errors);
    this.errors = errorSchemas.commands.toErrorSchema(this.validator.errors || []);
  }

  public bind(bindingContext: any, overrideContext: any): void {
    this.modelChanged();
    this.schemaChanged();
    this.uiSchemaChanged();
    this.context.views = this.options.views || {};

    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;
  }

  public valueChanged(newValue: any): void {

    if (Array.isArray(newValue)) {
      this.model = Object.assign([], newValue);
    } else if (typeof newValue === 'object') {
      this.model = Object.assign({}, newValue);
    } else {
      this.model = newValue;
    }
  }

  public modelChanged(): void {
    if (this.context.model !== this.model) {
      this.context.model = this.model;
      this.events.emit.modelChanged();
    }
  }

  public schemaChanged(): void {
    this.context.schema = this.schema;
    this.validator = jsonSchema.commands.buildValidator(this.schema, this.options);
    this.setDefinition();
  }

  public uiSchemaChanged(): void {
    this.context.uiSchema = this.uiSchema;
    this.setDefinition();
  }

  public unbind(): void {
    this._subs.forEach(sub => sub.dispose());
  }

  public setDefinition(): void {
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

  public parseValue(args: FormElementDefinition & { value: any }): any {
    const valueIsNullish: boolean = args.value === undefined || args.value === null || args.value === '';

    if (valueIsNullish) {
      const destroyAction: DestroyAction = args.schema.type?.includes('null')
        ? 'null'
        : args.uiSchema['ui:destroyAction'] || this.options.destroyAction || 'none';
      switch (destroyAction) {
        case 'delete':
          return undefined;
        case 'null':
          return null;
        default:
          return args.value;
      }
    }

    return args.value;
  }
}
