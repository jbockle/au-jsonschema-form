import { FormElementViewModel } from '../../../domain/form-element-view-model';
import { FormElementViewSet } from '../../../domain';

export function getViewName(viewModel: FormElementViewModel): string {
  if (viewModel.definition.uiSchema['ui:view'] !== undefined) {
    return viewModel.definition.uiSchema['ui:view'];
  }

  const viewSet = viewModel.getViewSet();
  if (viewModel.definition.schema.enum !== undefined && 'enum' in viewSet) {
    return viewSet.enum!;
  }

  const formatView = getFormatView(viewModel, viewSet);
  if (formatView) {
    return formatView;
  }

  return viewSet.default;
}

export function getFormatView(viewModel: FormElementViewModel, viewSet: FormElementViewSet): string | undefined {
  if (viewModel.definition.schema.type === 'string'
    && viewModel.definition.schema.format
    && viewSet.format
    && viewModel.definition.schema.format in viewSet.format) {
    return viewSet.format[viewModel.definition.schema.format];
  }

  return;
}
