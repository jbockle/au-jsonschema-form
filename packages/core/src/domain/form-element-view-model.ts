import { FormElementViewSet } from './form-element-view';
import { FormContext } from '../infrastructure/form-context';
import { FormElementDefinition } from './form-element-definition';
import { ErrorSchema } from './error-schema';
import { FormElementViewRegistry } from '../infrastructure/form-element-view-registry';

export interface DynamicElementViewModel {
  context: FormContext;
  viewSet: FormElementViewSet;
  viewService: FormElementViewRegistry;
}

export interface FormElementViewModel extends DynamicElementViewModel {
  errors: ErrorSchema;
  definition: FormElementDefinition;
  value: any;
  isReadOnly: boolean;
}
