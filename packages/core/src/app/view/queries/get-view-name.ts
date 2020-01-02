import { FormElementViewModel } from '../../../domain/form-element-view-model';

export function getViewName(viewModel: FormElementViewModel): string {
  if (viewModel.definition.uiSchema['ui:view'] !== undefined) {
    return viewModel.definition.uiSchema['ui:view'];
  }

  if (viewModel.definition.schema.enum !== undefined && 'enum' in viewModel.viewSet) {
    return viewModel.viewSet.enum!;
  }

  const formatView = getFormatView(viewModel);
  if (formatView) {
    return formatView;
  }

  return viewModel.viewSet.default;
}

export function getFormatView(viewModel: FormElementViewModel): string | undefined {
  if (viewModel.definition.schema.type === 'string'
    && viewModel.definition.schema.format
    && viewModel.viewSet.format
    && viewModel.definition.schema.format in viewModel.viewSet.format) {
    return viewModel.viewSet.format[viewModel.definition.schema.format];
  }

  return;
}
