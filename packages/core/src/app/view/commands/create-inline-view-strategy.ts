import { InlineViewStrategy } from 'aurelia-framework';

import { ComponentView, ResourceDependencies } from '../../../domain/view';

export function createInlineViewStrategy(view: ComponentView, additionalDependencies: ResourceDependencies = []): InlineViewStrategy {
  return new InlineViewStrategy(
    view.markup,
    [...(view.dependencies ?? []), ...additionalDependencies]);
}
