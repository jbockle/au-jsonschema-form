import { inject, bindable, bindingMode, inlineView, computedFrom, signalBindings } from 'aurelia-framework';

import { SfFormComponentBase } from './sf-form-component-base';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { AppLogger } from '../../infrastructure/app-logger';
import COMPOSE_VIEW from '../sf-compose-view';

@inlineView(COMPOSE_VIEW)
@inject(FormEvents, FormContext)
export class SfNumber extends SfFormComponentBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
  ) {
    super(events, context, AppLogger.makeLogger('SfNumber'));
  }

  @bindable({ defaultBindindMode: bindingMode.twoWay })
  public value: number | null | undefined;

  public inputType = 'number';

  @computedFrom('definition')
  public get minimum(): number | undefined {
    return this.definition?.schema.exclusiveMinimum
      ? this.definition.schema.exclusiveMinimum + 1
      : this.definition.schema.minimum;
  }

  @computedFrom('definition')
  public get maximum(): number | undefined {
    return this.definition?.schema.exclusiveMaximum
      ? this.definition.schema.exclusiveMaximum - 1
      : this.definition.schema.maximum;
  }

  @computedFrom('definition')
  public get step(): number {
    return this.definition?.uiSchema['ui:step'] ?? 1;
  }

  public valueChanged(newValue: any, old: any): void {
    signalBindings(this.definition.pointer);
    super.valueChanged(newValue, old);
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value
      ?? this.getDefaultValueFromSchema()
      ?? (this.minimum !== undefined && this.minimum)
      ?? 0;
  }
}
