import { FormComponentViewModel } from './form-component-view-model';
import { DestroyAction } from './schema-form-options';

export type SfViewModelExpression = (viewModel: FormComponentViewModel) => boolean;

export interface UISchema {
  'ui:title'?: string;
  'ui:view'?: string;
  'ui:slotView'?: string;
  'ui:readOnly'?: boolean | SfViewModelExpression;
  'ui:destroyAction'?: DestroyAction;
  'ui:items'?: UISchema | UISchema[];
  'ui:canReorder'?: boolean;
  'ui:hidden'?: boolean | SfViewModelExpression;
  [key: string]: UISchema | UISchema[] | string | boolean | SfViewModelExpression | undefined;
}
