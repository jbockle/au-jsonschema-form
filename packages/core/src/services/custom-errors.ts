import { ErrorObject } from 'ajv';

export abstract class CustomErrors {
  public abstract getErrorMessage(error: ErrorObject): string;
}

export class DefaultCustomErrors extends CustomErrors {
  public getErrorMessage(error: ErrorObject): string {
    const params: Record<string, any> = error.params;

    switch (error.keyword) {
      case 'required':
        return 'required';
      case 'type':
        return '';
      case 'maxItems':
        return `exceeded item limit of ${params.limit}`;
      case 'minItems':
        return `at least ${params.limit} items required`;
      case 'pattern':
        return 'input does not match required format';
      default:
        return error.message ?? 'invalid';
    }
  }
}
