import { FormContext } from '../infrastructure/form-context';
import { FormComponentDefinition } from './form-component-definition';
import { ErrorSchema } from './error-schema';

export interface ComponentViewModel {
  context: FormContext;
}

export interface FormComponentViewModel extends ComponentViewModel {
  errors: ErrorSchema;
  definition: FormComponentDefinition;
  value: any;
  isReadOnly: boolean;
}
