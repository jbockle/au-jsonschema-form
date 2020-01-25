import { useView, PLATFORM, inject, observable, bindable, bindingMode } from 'aurelia-framework';
import Ajv from 'ajv';

import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import { SfFormElementBase } from './sf-form-element-base';
import { FormElementViewSet, FormElementDefinition, JsonSchema } from '../../domain';
import jsonSchema from '../../app/json-schema';
import { AppLogger } from '../../infrastructure/app-logger';

type SchemaDefinitionSet = {
  title: string;
  definition: FormElementDefinition;
};

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry, JsonPointerService)
export class SfMultiSchema extends SfFormElementBase {
  private _state: 'loading' | 'ready' = 'loading';

  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
    public pointers: JsonPointerService,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfMultiSchema));
  }

  @bindable({ defaultBindindMode: bindingMode.twoWay })
  public value: any;

  public getViewSet(): FormElementViewSet {
    return {
      default: SfMultiSchema.name,
    };
  };

  public multiSchemaType!: 'oneOf' | 'anyOf';
  public options!: SchemaDefinitionSet[];

  @observable
  public selectedSchema?: SchemaDefinitionSet;

  public selectedSchemaChanged(): void {
    if (this._state === 'ready') {
      this.value = undefined;
    }
  }

  public beforeResolveViewStrategy(): void {
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
      const definition: FormElementDefinition = {
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
    this.value = this.jsonPointer.get(this.context.model) ?? this.getDefaultValue();
  }
}
