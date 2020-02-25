import { inject, observable, bindable, bindingMode, inlineView } from 'aurelia-framework';
import Ajv from 'ajv';

import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import { SfFormComponentBase } from './sf-form-component-base';
import { FormComponentDefinition, JsonSchema } from '../../domain';
import jsonSchema from '../../app/json-schema';
import { AppLogger } from '../../infrastructure/app-logger';
import COMPOSE_VIEW from '../sf-compose-view';

type SchemaDefinitionSet = {
  title: string;
  definition: FormComponentDefinition;
};

@inlineView(COMPOSE_VIEW)
@inject(FormEvents, FormContext, JsonPointerService)
export class SfMultiSchema extends SfFormComponentBase {
  private _state: 'loading' | 'ready' = 'loading';

  public constructor(
    events: FormEvents,
    context: FormContext,
    public pointers: JsonPointerService,
  ) {
    super(events, context, AppLogger.makeLogger(SfMultiSchema));
  }

  @bindable({ defaultBindindMode: bindingMode.twoWay })
  public value: any;

  public multiSchemaType!: 'oneOf' | 'anyOf';
  public options!: SchemaDefinitionSet[];

  @observable
  public selectedSchema?: SchemaDefinitionSet;

  public selectedSchemaChanged(): void {
    if (this._state === 'ready') {
      this.value = undefined;
    }
  }

  public beforeInitialize(): void {
    this.multiSchemaType = this.definition.schema.oneOf ? 'oneOf' : 'anyOf';
    this.options = this.getSchemas(this.definition.schema.oneOf! || this.definition.schema.anyOf!);
    this.value && this.options.some(set => {
      const validator = new Ajv({ allErrors: true }).compile(set.definition.schema);
      validator(this.value);
      if (!validator.errors || validator.errors.length === 0) {
        this.selectedSchema = set;
        return true;
      }
      return false;
    });

    this._state = 'ready';
  }

  public getSchemas(schemas: JsonSchema<any>[]): SchemaDefinitionSet[] {
    return schemas.map((schema, idx) => {
      const title: string = schema.title ?? `Option ${idx + 1}`;
      const definition: FormComponentDefinition = {
        pointer: this.definition.pointer,
        required: this.definition.required,
        schema: jsonSchema.queries.resolveSchema(schema, this.context.schema),
        uiSchema: this.definition.uiSchema,
        type: jsonSchema.queries.resolveSchemaType(schema, this.context.schema),
        parent: this.definition.parent,
      };
      return { title, definition };
    });
  }

  public optionMatcher(a: SchemaDefinitionSet, b: SchemaDefinitionSet): boolean {
    return a?.title === b?.title;
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.jsonPointer.get(this.context.model) ?? this.getDefaultValueFromSchema();
  }
}
