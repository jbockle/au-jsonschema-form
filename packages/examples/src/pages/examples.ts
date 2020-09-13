import { observable, inject, TaskQueue } from 'aurelia-framework';
import { NavigationInstruction, RouteConfig, Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';

import { examples } from '../examples';
import { Example, ExampleCtor } from '../examples/example';


@inject(TaskQueue, EventAggregator, Router)
export class Examples {
  public constructor(
    private _tasks: TaskQueue,
    private _events: EventAggregator,
    private _router: Router,
  ) { }

  @observable
  public valueTrigger = 0;

  public examples = examples;

  @observable
  public selectedExample?: ExampleCtor;

  @observable
  public example?: Example | null;

  public activate(params: { id?: string }, _routeConfig: RouteConfig, _navigationInstruction: NavigationInstruction): void {
    if (params.id && this.selectedExample?.id !== params.id) {
      this.selectedExample = this.examples.find(e => e.id === params.id);
    }
  }

  public bind(): void {
    this._events.subscribe('value-updated', () => {
      this.valueTrigger++;
    });
  }

  public selectedExampleChanged(example?: ExampleCtor): void {
    this.example = null;

    if (example) {
      this._router.navigateToRoute('examples', { id: example.id });
      this._tasks.queueMicroTask(() => {
        this.example = new example();
      });
    }
    else {
      this._router.navigateToRoute('examples', {});
    }
  }
}
