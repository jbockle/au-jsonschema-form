import { bindable, inlineView, inject } from 'aurelia-framework';

import jsonSchema from '../../app/json-schema';
import uiSchema from '../../app/ui-schema';
import { FormComponentDefinition, ErrorSchema } from '../../domain';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import { FormContext } from '../../infrastructure/form-context';
import { AppLogger } from '../../infrastructure/app-logger';
import { SfArray } from './sf-array';

@inlineView(`<template>
  <sf-slot if.bind="definition"
           value.two-way="value"
           definition.bind="definition"
           errors.bind="errors">
  </sf-slot>
  <sf-array-item-toolbar index.bind="index"
                         parent.bind="parent"
                         definition.bind="definition">
  </sf-array-item-toolbar>
</template>`)
@inject(FormContext, JsonPointerService)
export class SfArrayItem {
  private _logger: AppLogger;

  public constructor(
    private context: FormContext,
    private pointers: JsonPointerService,
  ) {
    this._logger = AppLogger.makeLogger(SfArrayItem);
  }

  @bindable
  public value: any;

  @bindable
  public index!: number;

  @bindable
  public parent!: SfArray;

  @bindable
  public errors!: ErrorSchema;

  public definition!: FormComponentDefinition;

  public resolveValue(): void {
    this.value = this.value ?? null;
  }

  public valueChanged(): void {
    this._logger.debug(`value changed`, { value: this.value });
    this.parent.value[this.index] = this.value;
  }

  public indexChanged(): void {
    this.definition = this.getItemDefinition(this.index);
  }

  public bind(): void {
    this.indexChanged();
  }

  public getItemDefinition(index: number): FormComponentDefinition {
    this._logger.debug(`getting definition for ${index}`);
    const schema = jsonSchema.queries.getItemSchema(index, this.parent.definition.schema, this.context.schema);

    return {
      pointer: this.getPointer(this.index),
      required: false,
      schema,
      type: jsonSchema.queries.resolveSchemaType(schema, this.context.schema),
      uiSchema: uiSchema.queries.getItemUiSchema(index, this.parent.definition.uiSchema),
    };
  }

  public getPointer(index: number): string {
    return this.pointers.getPointerFromSegments([...this.parent.jsonPointer.segments, `${index}`]).toString();
  }
}
