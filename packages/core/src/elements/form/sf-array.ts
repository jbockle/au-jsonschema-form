import { SfFormElementBase } from './sf-form-element-base';
import { inject, useView, PLATFORM, bindable, bindingMode, observable } from 'aurelia-framework';

import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';
import { FormElementViewSet, FormElementDefinition } from '../../domain';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import jsonSchema from '../../app/json-schema';
import uiSchema from '../../app/ui-schema';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry, JsonPointerService)
export class SfArray extends SfFormElementBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
    public pointers: JsonPointerService,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfArray));
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any[] | null | undefined = [];

  @observable
  public definitions: FormElementDefinition[] = [];

  public getViewSet(): FormElementViewSet {
    return {
      default: this.getDefaultView(),
    };
  }

  public beforeResolveViewStrategy(): void {
    this.updateDefinitions();
  }

  public updateDefinitions(): void {
    this.definitions = (this.value ?? []).map((_val, index) => this.getItemDefinition(index));
  }

  public getDefaultView(): string {
    if (this.isCheckboxesSchema()) {
      return 'SfCheckboxes';
    }

    if (this.isFilesSchema()) {
      return 'SfFiles';
    }

    return SfArray.name;
  }

  public isCheckboxesSchema(): boolean {
    return typeof this.definition.schema.items === 'object'
      && !Array.isArray(this.definition.schema.items)
      && this.definition.schema.items.type.includes('boolean');
  }

  public isFilesSchema(): boolean {
    return typeof this.definition.schema.items === 'object'
      && !Array.isArray(this.definition.schema.items)
      && this.definition.schema.items.type.includes('string')
      && this.definition.schema.items.format === 'data-url';
  }

  public getItemDefinition(index: number): FormElementDefinition {
    this._logger.debug(`getting definition for ${index}`);
    const schema = jsonSchema.queries.getItemSchema(index, this.definition.schema, this.context.schema);

    return {
      pointer: this.getPointer(index),
      required: false,
      schema,
      type: jsonSchema.queries.resolveSchemaType(schema, this.context.schema),
      uiSchema: uiSchema.queries.getItemUiSchema(index, this.definition.uiSchema),
    };
  }

  public getPointer(index: number): string {
    return this.pointers.getPointerFromSegments([...this.jsonPointer.segments, `${index}`]).toString();
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValue() ?? [];
  }

  public add(): void {
    const index = this.definitions.length;
    const definition = this.getItemDefinition(index);
    this.definitions.push(definition);

    const value = this.getItemDefaultValue(definition);

    this.value!.push(value);
    this.events.emit.validate();
  }

  public remove(index: number): void {
    this._logger.debug('removing item at index', index, this.value![index]);
    this.value!.splice(index, 1);
    this.updateDefinitions();
    this.events.emit.validate();
  }

  public reorder(index: number, direction: 'up' | 'down'): void {
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    const value = this.value!.splice(index, 1);
    this.value!.splice(newIndex, 0, value);

    this.updateDefinitions();
    this.events.emit.validate();
  }

  public getItemDefaultValue(definition: FormElementDefinition): any {
    let value: any = null;

    switch (definition.type) {
      case 'string':
        value = definition.schema.const ?? definition.schema.default ?? '';
        break;
      case 'number':
        value = definition.schema.const ?? definition.schema.default ?? 0;
        break;
      case 'boolean':
        value = definition.schema.const ?? definition.schema.default ?? false;
        break;
    }

    return value;
  }
}

