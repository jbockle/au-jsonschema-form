import { InlineViewStrategy } from 'aurelia-framework';

import { FormElementView } from '../../../domain/form-element-view';

export function createInlineViewStrategy(view: FormElementView): InlineViewStrategy {
  return new InlineViewStrategy(view.markup, view.dependencies);
}
