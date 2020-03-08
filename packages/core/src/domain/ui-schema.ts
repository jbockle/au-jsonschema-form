import { FormComponentViewModel } from './form-component-view-model';
import { DestroyAction } from './schema-form-options';
import { ErrorMessages } from './error-messages';

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
  'ui:inputType'?: string;
  'ui:step'?: number;
  'ui:errorMessages'?: ErrorMessages;
  // 'ui:defaultValue'?: any; // TODO: add optional default value
  [key: string]: UISchema | UISchema[] | string | number | boolean | SfViewModelExpression | ErrorMessages | undefined;
}
