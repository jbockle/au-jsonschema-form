import { ViewStrategy } from 'aurelia-framework';

import views from '../../app/view';
import { AppLogger } from '../../infrastructure/app-logger';
import { ResourceDependencies, ComponentState } from '../../domain';
import { ViewFinderService } from '../../infrastructure/view-finder-service';
import { Subscription } from 'aurelia-event-aggregator';

export abstract class SfSharedComponentBase {
  protected _subs: Subscription[] = [];

  public constructor(
    public name: string,
    public viewFinder: ViewFinderService,
    protected _logger: AppLogger,
  ) { }

  public viewStrategy!: ViewStrategy;

  public dependencies?: ResourceDependencies;

  public state: ComponentState = 'ready';

  public bind(_bindingContext: any, _overrideContext: any): void {
    this.beforeInitialize();
    const view = this.viewFinder.getSharedComponentView(this.name);

    this.viewStrategy = views.commands.createInlineViewStrategy(view, this.dependencies);
  }

  public unbind(): void {
    this._subs.forEach(sub => sub.dispose());
  }

  protected beforeInitialize(): void {
    // override me
  }
}
