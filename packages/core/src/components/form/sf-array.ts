import { SfFormComponentBase } from './sf-form-component-base';
import { inject, bindable, bindingMode, inlineView, NewInstance } from 'aurelia-framework';

import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { AppLogger } from '../../infrastructure/app-logger';
import { JsonPointerService } from '../../infrastructure/json-pointer-service';
import COMPOSE_VIEW from '../sf-compose-view';
import { ArrayEvents, ArrayEventMap } from '../../infrastructure/array-events';

@inlineView(COMPOSE_VIEW)
@inject(FormEvents, FormContext, JsonPointerService, NewInstance.of(ArrayEvents))
export class SfArray extends SfFormComponentBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    public pointers: JsonPointerService,
    public arrayEvents: ArrayEvents,
  ) {
    super(events, context, AppLogger.makeLogger('SfArray'));

    this._subs = Object.keys(this.callbacks).map(eventName => {
      const eventId = eventName as keyof ArrayEventMap;
      const callback = this.callbacks[eventId]!;

      return this.arrayEvents.subscribe(
        eventId,
        callback.bind(this));
    });
  }

  public $$this = this;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any[] = [];

  // todo: move to view finder
  public isCheckboxesSchema(): boolean {
    return typeof this.definition.schema.items === 'object'
      && !Array.isArray(this.definition.schema.items)
      && this.definition.schema.items.type.includes('boolean');
  }

  // todo: move to view finder
  public isFilesSchema(): boolean {
    return typeof this.definition.schema.items === 'object'
      && !Array.isArray(this.definition.schema.items)
      && this.definition.schema.items.type.includes('string')
      && this.definition.schema.items.format === 'data-url';
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValueFromSchema() ?? [];
  }

  public get canAdd(): boolean {
    return this.definition.schema.maxItems
      ? this.value.length < this.definition.schema.maxItems
      : true;
  }

  public add(): void {
    if (this.canAdd) {
      this.value.push(null);
      this.events.emit.validate();
      this.arrayEvents.emit('spliced');
    }
  }

  private callbacks: Partial<ArrayEventMap> = {
    remove: (args: { index: number }) => {
      this.value.splice(args.index, 1);
      this.events.emit.validate();
      this.arrayEvents.emit('spliced');
    },
    move: (args: { index: number; direction: 'up' | 'down' }) => {
      const newIndex = args.direction === 'up' ? args.index - 1 : args.index + 1;
      const itemValue = this.value.splice(args.index, 1);
      this.value.splice(newIndex, 0, ...itemValue);
      this.events.emit.validate();
      this.arrayEvents.emit('reordered');
    },
  }
}

