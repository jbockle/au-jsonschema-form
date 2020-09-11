import { observable, inject, TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { examples } from '../examples';
import { Example, ExampleCtor } from '../examples/example';

@inject(TaskQueue, EventAggregator)
export class Examples {
  public constructor(
    private _tasks: TaskQueue,
    private _events: EventAggregator,
  ) { }

  @observable
  public valueTrigger = 0;

  public examples = examples;

  @observable
  public selectedExample?: Example;

  @observable
  public example?: Example | null;

  public bind(): void {
    this._events.subscribe('value-updated', () => {
      this.valueTrigger++;
    });
  }

  public selectedExampleChanged(example?: ExampleCtor): void {
    this.example = null;

    if (example) {
      this._tasks.queueMicroTask(() => {
        this.example = new example();
      });
    }
  }
}
