import { ViewStrategy } from 'aurelia-framework';

import views from '../../app/view';
import { AppLogger } from '../../infrastructure/app-logger';
import { ResourceDependencies, ComponentState } from '../../domain';
import { ViewFinderService } from '../../infrastructure/view-finder-service';

export abstract class SfSharedComponentBase {
  public constructor(
    public name: string,
    public viewFinder: ViewFinderService,
    protected _logger: AppLogger,
  ) { }

  public viewStrategy!: ViewStrategy;

  public dependencies?: ResourceDependencies;

  public state: ComponentState = 'ready';

  public bind(_bindingContext: any, _overrideContext: any): void {
    const view = this.viewFinder.getSharedComponentView(this.name);

    this.viewStrategy = views.commands.createInlineViewStrategy(view, this.dependencies);
  }
}
