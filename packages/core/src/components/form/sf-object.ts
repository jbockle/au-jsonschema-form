import { inject, bindable, bindingMode, inlineView } from 'aurelia-framework';

import { SfFormComponentBase } from './sf-form-component-base';
import { UISchema, JsonSchema, FormComponentDefinition } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import jsonSchema from '../../app/json-schema';
import { AppLogger } from '../../infrastructure/app-logger';
import uiSchemas from '../../app/ui-schema';
import COMPOSE_VIEW from '../sf-compose-view';

@inlineView(COMPOSE_VIEW)
@inject(FormEvents, FormContext, JsonPointerService)
export class SfObject extends SfFormComponentBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    public pointers: JsonPointerService,
  ) {
    super(events, context, AppLogger.makeLogger('SfObject'));
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: Record<string, any> | null | undefined;

  public keys!: Map<string, FormComponentDefinition>;

  public beforeInitialize(): void {
    this.setKeys();
  }

  public setKeys(): void {
    this.keys = new Map<string, FormComponentDefinition>();
    this.addSchemaProperties();
    this.addResolvedProperties();
  }

  public addSchemaProperties(): void {
    if (this.definition.schema.properties) {
      for (const key in this.definition.schema.properties) {
        const schema = jsonSchema.queries.getPropertySchema(key, this.definition.schema, this.context.schema);
        const required = (this.definition.schema.required ?? []).includes(key);
        const uiSchema = uiSchemas.queries.getKeyUiSchema(key, this.definition.uiSchema);
        const pointer = this.getPointer(key);
        this.setFormKeyDefinition(key, schema, required, uiSchema, pointer);
      }
    }
  }

  public addResolvedProperties(): void {
    if (this.canResolveProperties(this.value)) {
      Object.keys(this.value)
        .filter(key => !this.keys.hasOwnProperty(key))
        .forEach(key => {
          const schema = jsonSchema.queries.getPropertySchema(key, this.definition.schema, this.context.schema);
          const required = (this.definition.schema.required ?? []).includes(key);
          const uiSchema = uiSchemas.queries.getKeyUiSchema(key, this.definition.uiSchema);
          const pointer = this.getPointer(key);
          this.setFormKeyDefinition(key, schema, required, uiSchema, pointer);
        });
    }
  }

  public canResolveProperties(value: any): value is Record<string, any> {
    return typeof value === 'object'
      && (jsonSchema.queries.supportsAdditionalProperties(this.definition.schema)
        || jsonSchema.queries.supportsPatternProperties(this.definition.schema));
  }

  public addProperty(key: string): void {
    if (this.canAddProperty(key)) {
      const schema = jsonSchema.queries.getPropertySchema(key, this.definition.schema, this.context.schema);
      const required = (this.definition.schema.required ?? []).includes(key);
      const uiSchema = uiSchemas.queries.getKeyUiSchema(key, this.definition.uiSchema);
      const pointer = this.getPointer(key);
      this.setFormKeyDefinition(key, schema, required, uiSchema, pointer);
      return;
    }

    throw new Error(`unable to add property '${key}',` +
      `the schema does not support pattern/additional properties or the property already exists`);
  }

  public canAddProperty(prop: string): boolean {
    return !this.keys.hasOwnProperty(prop)
      && (
        jsonSchema.queries.supportsAdditionalProperties(this.definition.schema)
        || jsonSchema.queries.supportsPatternProperties(this.definition.schema));
  }

  public setFormKeyDefinition(
    key: string,
    schema: JsonSchema<any>,
    required: boolean,
    uiSchema: UISchema,
    pointer: string,
  ): void {
    this.keys.set(key, {
      schema,
      required,
      uiSchema,
      pointer,
      parent: this,
      type: jsonSchema.queries.resolveSchemaType(schema, this.context.schema),
    });
  }

  public getPointer(key: string): string {
    return this.pointers.getPointerFromSegments([...this.jsonPointer.segments, key]).toString();
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValueFromSchema() ?? {};
  }
}
