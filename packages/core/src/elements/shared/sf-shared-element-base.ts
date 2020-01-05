import { ViewStrategy } from 'aurelia-framework';
import kebabCase from 'lodash/kebabCase';

import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import views from '../../app/view';

export abstract class SfSharedElementBase {
  public constructor(
    public name: string,
    public context: FormContext,
    public viewService: FormElementViewRegistry) { }

  public viewStrategy!: ViewStrategy;

  public get className(): string {
    return kebabCase(this.name) + '-compose';
  }

  public bind(): void {
    const view = views.queries.getElementView(this.name, this.context, this.viewService);

    if (!view) {
      throw new Error(`A view for '${this.name}' was not found`);
    }

    this.viewStrategy = views.commands.createInlineViewStrategy(view);
  }
}
