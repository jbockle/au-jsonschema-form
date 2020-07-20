import { ErrorObject } from 'ajv';

export interface ValidationResult {
  valid: boolean,
  errors: ErrorObject[],
  errorSchema: ErrorSchema
}

export interface ErrorSchema {
  [key: string]: ErrorSchema | ErrorObject[] | string[] | undefined;
  _errorobjects_?: ErrorObject[];
  _errors_?: string[];
}
