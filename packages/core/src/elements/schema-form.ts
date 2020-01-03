import { inject, NewInstance, bindable, ViewStrategy, bindingMode, customElement } from 'aurelia-framework';
import Ajv from 'ajv';

import { FormContext } from '../infrastructure/form-context';
import { JsonSchema, UISchema, ErrorSchema, SchemaFormOptions, DestroyAction, FormElementDefinition } from '../domain';
import { FormEvents } from '../infrastructure/form-events';
import * as errorSchema from '../app/error-schema';
import { JsonPointerService } from '../infrastructure/json-pointer-service';
import { Subscription } from 'aurelia-event-aggregator';
import jsonSchema from '../app/json-schema';
import { FormElementViewRegistry } from '../infrastructure/form-element-view-registry';
import { AppLogger } from '../infrastructure/app-logger';

const DEFAULT_OPTIONS: SchemaFormOptions = {
  destroyAction: 'delete',
};

@inject(
  NewInstance.of(FormContext),
  NewInstance.of(FormEvents),
  NewInstance.of(JsonPointerService),
  FormElementViewRegistry,
)
@customElement('schema-form')
export class SchemaForm {
  private _subs: Subscription[] = [];
  private _logger = AppLogger.makeLogger(SchemaForm);

  public constructor(
    public context: FormContext,
    public events: FormEvents,
    public pointers: JsonPointerService,
  ) {
    this.createSubscriptions(events);
    this._logger.debug(SchemaForm.name);
  }

  @bindable
  public schema!: JsonSchema<any>;

  @bindable
  public uiSchema!: UISchema;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public model: any;

  @bindable({ defaultBindingMode: bindingMode.toView })
  public errors!: ErrorSchema;

  @bindable
  public options: SchemaFormOptions = Object.assign({}, DEFAULT_OPTIONS);

  public state: 'initializing' | 'validating' | 'waiting' = 'initializing';

  public definition!: FormElementDefinition;

  public viewStrategy!: ViewStrategy;

  public validate!: Ajv.ValidateFunction;

  public bindingContext: any;
  public overrideContext: any;

  public createSubscriptions(events: FormEvents): void {
    const valueChanged = events.subscribe.onValueChanged(async (args) => {
      this.pointers.setValue(args.pointer, this.model, this.parseValue(args));
      await this.beginValidate();
      this.errors = errorSchema.commands.toErrorSchema(this.validate.errors || []);
      this._logger.debug('changed', args.pointer, args.value, this.errors);
    });
    const validateSub = events.subscribe.onValidate(async () => {
      await this.beginValidate();
    });
    this._subs.push(valueChanged, validateSub);
  }

  public bind(bindingContext: any, overrideContext: any): void {
    this.modelChanged();
    this.schemaChanged();
    this.uiSchemaChanged();
    this.context.views = this.options.views || {};

    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;
  }

  public modelChanged(): void {
    this._logger.debug(`${SchemaForm.name}:model changed`, this.model);
    if (this.context.model !== this.model) {
      this.context.model = this.model;
      this.events.emit.modelChanged();
    }
  }

  public schemaChanged(): void {
    this.context.schema = this.schema;
    this.validate = new Ajv({ allErrors: true }).compile(this.schema);
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

  public async beginValidate(): Promise<void> {
    await this.validate(this.model);
    this._logger.debug('validation occurred', this.validate.errors);
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
