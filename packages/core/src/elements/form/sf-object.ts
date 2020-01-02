import { useView, PLATFORM, inject } from 'aurelia-framework';
import { SfBase } from './sf-base';
import { FormElementViewSet, UISchema, JsonSchema, FormElementDefinition } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import jsonSchema from '../../app/json-schema';
import { AppLogger } from '../../infrastructure/app-logger';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/form/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry, JsonPointerService)
export class SfObject extends SfBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
    public pointers: JsonPointerService,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfObject));
  }

  public value: Record<string, any> | null | undefined;

  public keys!: Map<string, FormElementDefinition>;

  public viewSet: FormElementViewSet = {
    default: SfObject.name,
  };

  public beforeGetViewInfo(): void {
    this.setKeys();
  }

  public setKeys(): void {
    this.keys = new Map<string, FormElementDefinition>();
    this.addSchemaProperties();
    this.addResolvedProperties();
  }

  public addSchemaProperties(): void {
    if (this.definition.schema.properties) {
      for (const key in this.definition.schema.properties) {
        const schema = jsonSchema.queries.resolveSchema(this.definition.schema.properties[key], this.context.schema);
        const required = (this.definition.schema.required ?? []).includes(key);
        const uiSchema = this.getUISchema(key);
        const pointer = this.getPointer(key);
        this.setFormKeyDefinition(key, schema, required, uiSchema, pointer);
      }
    }
  }

  public addResolvedProperties(): void {
    if ((this.supportsAdditionalProperties() || this.supportsPatternProperties()) && typeof this.value === 'object' && this.value) {
      Object.keys(this.value)
        .filter(key => !this.keys.hasOwnProperty(key))
        .forEach(key => {
          const patternPropertySchema = this.getPatternProperty(key);
          const schema = jsonSchema.queries.resolveSchema(
            patternPropertySchema ?? this.definition.schema.additionalProperties as JsonSchema<any>,
            this.context.schema);
          const required = (this.definition.schema.required ?? []).includes(key);
          const uiSchema = this.getUISchema(key);
          const pointer = this.getPointer(key);
          this.setFormKeyDefinition(key, schema, required, uiSchema, pointer);
        });
    }
  }

  public addProperty(key: string): void {
    if (!this.keys.hasOwnProperty(key)) {
      const patternPropertySchema = this.getPatternProperty(key);

      if (patternPropertySchema || this.supportsAdditionalProperties()) {
        const schema = jsonSchema.queries.resolveSchema(
          patternPropertySchema ?? this.definition.schema.additionalProperties as JsonSchema<any>,
          this.context.schema);
        const required = (this.definition.schema.required ?? []).includes(key);
        const uiSchema = this.getUISchema(key);
        const pointer = this.getPointer(key);
        this.setFormKeyDefinition(key, schema, required, uiSchema, pointer);
        return;
      }
    }

    throw new Error(`unable to add property, the schema does not support additional properties`);
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

  public getUISchema(key: string): UISchema {
    return key in this.definition.uiSchema ? this.definition.uiSchema[key] as UISchema : {};
  }

  public getPointer(key: string): string {
    return this.pointers.getPointerFromSegments([...this.jsonPointer.segments, key]).toString();
  }

  public supportsAdditionalProperties(): boolean {
    if (this.definition.schema.additionalProperties === true) {
      throw new Error(`additionalProperties is true, unable to determine property schema`);
    }

    if (this.definition.schema.additionalProperties === false) {
      return false;
    }

    return typeof this.definition.schema.additionalProperties === 'object';
  }

  public supportsPatternProperties(): boolean {
    return this.isPatternProperty(this.definition.schema.patternProperties);
  }

  public getPatternProperty(key: string): undefined | JsonSchema<any> {
    const patternPropertiesSchema = this.definition.schema.patternProperties;
    if (this.isPatternProperty(patternPropertiesSchema)) {
      return Object.keys(patternPropertiesSchema)
        .map(pattern => ({
          pattern,
          expression: new RegExp(pattern),
          schema: patternPropertiesSchema[pattern],
        }))
        .find(pair => pair.expression.test(key))?.schema;
    }

    return undefined;
  }

  public isPatternProperty(schema?: JsonSchema<any> | boolean): schema is { [key: string]: JsonSchema<any> } {
    if (schema ?? false) {
      return typeof schema == 'object';
    }

    return false;
  }

  public updateValue(): void {
    this._logger.debug('updating value');
    this.value = this.jsonPointer.get(this.context.model) ?? this.getDefaultValue();
  }

  public valueChanged = (): void => {/* */ }
}
