import { FormElementView, ViewMeta } from '../../../domain/form-element-view';
import { FormElementViewModel } from '../../../domain/form-element-view-model';
import { getViewName } from './get-view-name';
import { getElementView } from './get-element-view';
import { createInlineViewStrategy } from '../commands/create-inline-view-strategy';

export function getViewMeta(viewModel: FormElementViewModel): ViewMeta {
  const name = getViewName(viewModel);
  const view: FormElementView = getElementView(name, viewModel.context, viewModel.viewService)
    ?? getUnknownView(name);

  return { viewStrategy: createInlineViewStrategy(view, viewModel.viewSet.dependencies), view };
}

const getUnknownView = (name: string): FormElementView => ({
  markup: `<template><code>unknown view '${name}'</code></template>`,
});
