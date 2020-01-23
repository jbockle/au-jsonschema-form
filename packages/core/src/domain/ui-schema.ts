import { FormElementViewModel } from './form-element-view-model';
import { DestroyAction } from './schema-form-options';

export type SfViewModelExpression = (viewModel: FormElementViewModel) => boolean;

export interface UISchema {
  'ui:title'?: string;
  'ui:view'?: string;
  'ui:viewSlot'?: string;
  'ui:readOnly'?: boolean | SfViewModelExpression;
  'ui:destroyAction'?: DestroyAction;
  'ui:items'?: UISchema | UISchema[];
  'ui:canReorder'?: boolean;
  'ui:hidden'?: boolean;
  [key: string]: UISchema | UISchema[] | string | boolean | SfViewModelExpression | undefined;
}
