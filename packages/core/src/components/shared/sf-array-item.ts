import { bindable, inlineView, inject } from 'aurelia-framework';

import jsonSchema from '../../app/json-schema';
import uiSchema from '../../app/ui-schema';
import { FormComponentDefinition, ErrorSchema } from '../../domain';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import { FormContext } from '../../infrastructure/form-context';
import { AppLogger } from '../../infrastructure/app-logger';
import { SfArray } from '../form/sf-array';
import COMPOSE_VIEW from '../sf-compose-view';
import { ViewFinderService } from '../../infrastructure/view-finder-service';
import { SfSharedComponentBase } from './sf-shared-component-base';

@inlineView(COMPOSE_VIEW)
@inject(FormContext, JsonPointerService, ViewFinderService)
export class SfArrayItem extends SfSharedComponentBase {
  public constructor(
    private context: FormContext,
    private pointers: JsonPointerService,
    viewFinder: ViewFinderService,
  ) {
    super('sf-array-item', viewFinder, AppLogger.makeLogger('SfArrayItem'));
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

  public bind(ctx: any, octx: any): void {
    this.indexChanged();
    super.bind(ctx, octx);
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
