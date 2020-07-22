import Ajv from 'ajv';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, ErrorSchema, ValidationResult } from '../models';

export class Validator {
  private _logger = getLogger('aujsf:validator');
  private _ajv: Ajv.Ajv;
  private _validator?: Ajv.ValidateFunction;

  public constructor() {
    this._ajv = new Ajv({
      allErrors: true,
      multipleOfPrecision: 8,
      schemaId: 'auto',
      unknownFormats: 'ignore',
      jsonPointers: true,
      verbose: true,
    });
  }

  /**
   * @internal
   */
  public setSchema(schema: JsonSchema): void {
    this._logger.debug('received schema', schema);
    this._validator = this._ajv.compile(schema);
  }

  public validate(data: any): ValidationResult {
    if (this._validator) {
      this._validator(data);

      const result: ValidationResult = {
        valid: !this._validator.errors,
        errors: this._validator.errors ?? [],
        errorSchema: this.createErrorSchema(this._validator.errors ?? []),
      };

      this._logger.info('validation completed', { ...result });

      return result;
    } else {
      throw new Error(`a schema has not been set`);
    }
  }

  public createErrorSchema(errors: Ajv.ErrorObject[]): ErrorSchema {
    const errorSchema: ErrorSchema = {
      _errors_: [],
    };

    errors.forEach(error => {
      if (error.dataPath === '' && error.keyword !== 'required') {
        errorSchema._errors_?.push(error.message!);
      }

      let pointer = JsonPointer.compile(error.dataPath);

      if (error.keyword === 'required' && 'missingProperty' in error.params) {
        pointer = new JsonPointer([...pointer.segments, error.params['missingProperty']]);
      }

      let childErrorSchema: ErrorSchema = pointer.get(errorSchema);
      if (!pointer.get(errorSchema)) {
        childErrorSchema = {
          _errors_: [],
        };

        pointer.set(errorSchema, childErrorSchema);
      }

      childErrorSchema._errors_?.push(error.message!);
    });

    return errorSchema;
  }
}
