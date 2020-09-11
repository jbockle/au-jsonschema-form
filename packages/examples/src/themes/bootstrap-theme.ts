import { useShadowDOM, bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { Example } from '../examples/example';


@useShadowDOM()
@inject(EventAggregator)
export class BootstrapTheme {
  public constructor(
    private _events: EventAggregator) { }

  @bindable
  public example?: Example;

  public bind(): void {
    this.toString();
  }

  public onValueUpdated(): void {
    this._events.publish('value-updated');
  }
}
