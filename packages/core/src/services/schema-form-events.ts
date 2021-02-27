import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { ValueChangedEventDict } from '../models/form-events';

export const POINTER_VALUE_CHANGED = 'aujsf-pointer-value-changed';

export interface SchemaFormEventSubscription {
  dispose(): void;
}

@inject(EventAggregator)
export class SchemaFormEvents {
  public constructor(private _events: EventAggregator) { }

  public subscribeToPointerChanges(callback: (event: ValueChangedEventDict) => any): SchemaFormEventSubscription {
    return { dispose: this._events.subscribe(POINTER_VALUE_CHANGED, callback).dispose };
  }

  /**
   * @internal
   */
  public emitPointerChange(event: ValueChangedEventDict): void {
    this._events.publish(POINTER_VALUE_CHANGED, event);
  }
}
