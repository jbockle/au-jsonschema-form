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
    if (!this.value?.length && Array.isArray(this.definition.schema.items)) {
      this.definition.schema.items.forEach(() => this.add());
    }
    this.updateReorder();
  }

  public updateReorder(): void {
    this.definitions.forEach((def, index) => {
      def.canMoveUp = this.canReorder(index, 'up');
      def.canMoveDown = this.canReorder(index, 'down');
    });
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
      fixed: Array.isArray(this.definition.schema.items) && index in this.definition.schema.items,
    };
  }

  public getPointer(index: number): string {
    return this.pointers.getPointerFromSegments([...this.jsonPointer.segments, `${index}`]).toString();
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValue() ?? [];
  }

  public get canAdd(): boolean {
    return this.definition.schema.maxItems
      ? this.value!.length < this.definition.schema.maxItems
      : true;
  }

  public add(): void {
    const index = this.definitions.length;
    const definition = this.getItemDefinition(index);
    this.definitions.push(definition);

    const value = this.getItemDefaultValue(definition);

    this.value!.push(value);
    this.updateReorder();
    this.events.emit.validate();
  }

  public remove(index: number): void {
    this._logger.debug('removing item at index', index, this.value![index]);
    this.value!.splice(index, 1);
    this.updateDefinitions();
    this.events.emit.validate();
  }

  public reorder(index: number, direction: 'up' | 'down'): void {
    if (this.canReorder(index, direction)) {
      const newIndex = direction === 'up' ? index - 1 : index + 1;

      const items = [...this.value!];

      const value = items.splice(index, 1);

      items.splice(newIndex, 0, ...value);

      this.value = items;

      this.updateDefinitions();
      this.events.emit.validate();
    }
  }

  public canReorder(index: number, direction: 'up' | 'down'): boolean {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const firstOrLast = direction === 'up' ? index === 0 : index === this.value!.length - 1;

    if (this.definition.uiSchema['ui:canReorder'] === false || firstOrLast) {
      return false;
    }

    if (this.definitions[newIndex].fixed || this.definitions[index].fixed) {
      return false;
    }

    const definition = this.definitions[index];
    const targetDefinition = this.definitions[newIndex];
    if (definition.schema.type !== targetDefinition.schema.type) {
      return false;
    }

    return true;
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

