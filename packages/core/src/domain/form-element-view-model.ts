import { FormElementViewSet } from './form-element-view';
import { FormContext } from '../infrastructure/form-context';
import { FormElementDefinition } from './form-element-definition';
import { ErrorSchema } from './error-schema';

export interface FormElementViewModel {
  context: FormContext;
  errors: ErrorSchema;
  viewSet: FormElementViewSet;
  definition: FormElementDefinition;
  value: any;
  isReadOnly: boolean;
}
