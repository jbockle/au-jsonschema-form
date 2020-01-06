import { InlineViewStrategy } from 'aurelia-framework';

import { FormElementView, ResourceDependencies } from '../../../domain/form-element-view';

export function createInlineViewStrategy(view: FormElementView, additionalDependencies: ResourceDependencies = []): InlineViewStrategy {
  return new InlineViewStrategy(
    view.markup,
    [...(view.dependencies ?? []), ...additionalDependencies]);
}
