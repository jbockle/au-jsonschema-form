import { ValidationResult } from './error-schema';

export interface SubmitArguments {
  value: any;
  validationResult?: ValidationResult;
}
