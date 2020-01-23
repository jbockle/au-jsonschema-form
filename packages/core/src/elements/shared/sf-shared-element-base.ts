import { ViewStrategy } from 'aurelia-framework';

import views from '../../app/view';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';
import { ResourceDependencies } from '../../domain';

export abstract class SfSharedElementBase {
  public constructor(
    public name: string,
    public context: FormContext,
    public viewService: FormElementViewRegistry,
    protected _logger: AppLogger,
  ) { }

  public viewStrategy!: ViewStrategy;

  public dependencies?: ResourceDependencies;

  public bind(_bindingContext: any, _overrideContext: any): void {
    const view = views.queries.getElementView(this.name, this.context, this.viewService);

    if (!view) {
      throw new Error(`A view for '${this.name}' was not found`);
    }

    this.viewStrategy = views.commands.createInlineViewStrategy(view, this.dependencies);
  }
}
