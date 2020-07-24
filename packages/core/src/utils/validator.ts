import Ajv from 'ajv';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import v4 from 'ajv/lib/refs/json-schema-draft-04.json';
import v6 from 'ajv/lib/refs/json-schema-draft-06.json';

import { JsonSchema, ErrorSchema, ValidationResult, FormOptions } from '../models';

export class Validator {
  private _logger = getLogger('aujsf:validator');
  public ajv!: Ajv.Ajv;
  public validator?: Ajv.ValidateFunction;

  /**
   * @internal
   */
  public setSchema(schema: JsonSchema, options: FormOptions): void {
    this._logger.debug('received schema', schema);
    this.ajv = this.createAjv(options);
    this.validator = this.ajv.compile(schema);
  }

  /**
   * @internal
   */
  public createAjv(options: FormOptions): Ajv.Ajv {
    const ajv = new Ajv(Object.assign({
      allErrors: true,
      multipleOfPrecision: 8,
      schemaId: 'auto',
      unknownFormats: 'ignore',
      jsonPointers: true,
      verbose: true,
    }, options.ajv?.options ?? {}));

    if (options.ajv?.transform instanceof Function) {
      options.ajv.transform(ajv);
    } else {
      ajv.addMetaSchema(v4);
      ajv.addMetaSchema(v6);
    }

    return ajv;
  }

  public validate(data: any): ValidationResult {
    if (this.validator) {
      this.validator(data);

      const result: ValidationResult = {
        valid: !this.validator.errors,
        errors: this.validator.errors ?? [],
        errorSchema: this.createErrorSchema(this.validator.errors ?? []),
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
