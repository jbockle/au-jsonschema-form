import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { Example } from '../examples/example';

@inject(EventAggregator)
export class BootstrapTheme {
  public constructor(
    private _events: EventAggregator) {
    this.options = {
      sizes: [
        { name: 'Default', class: '' },
        { name: 'Small', class: 'form-small' },
        { name: 'ExtraSmall', class: 'form-extra-small' },
      ],
    };

    this.selectedSize = this.options.sizes[0];
  }

  @bindable
  public example?: Example;

  public bind(): void {
    this.toString();
  }

  public onValueUpdated(): void {
    this._events.publish('value-updated');
  }

  public options: { sizes: { name: string, class: string }[] };

  public selectedSize: { name: string, class: string };
}
