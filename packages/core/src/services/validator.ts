import Ajv from 'ajv';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import v4 from 'ajv/lib/refs/json-schema-draft-04.json';
import v6 from 'ajv/lib/refs/json-schema-draft-06.json';

import { JsonSchema, ErrorSchema, ValidationResult } from '../models';

export type ValidatorFactory = (configurators: IAjvConfigurator[]) => Validator;

export interface IAjvConfigurator {
  configure(ajv: Ajv.Ajv): void;
}

export class Validator {
  private _logger = getLogger('aujsf:validator');
  private _ajv?: Ajv.Ajv;
  private _validator?: Ajv.ValidateFunction;

  public constructor(
    private _configurators: IAjvConfigurator[] = [],
  ) { }

  /**
   * @internal
   */
  public setSchema(schema: JsonSchema): void {
    this._logger.debug('received schema', schema);
    this._ajv = this.createAjv();
    this._validator = this._ajv.compile(schema);
  }

  /**
   * @internal
   */
  public createAjv(): Ajv.Ajv {
    const ajv = new Ajv({
      allErrors: true,
      multipleOfPrecision: 8,
      schemaId: 'auto',
      unknownFormats: 'ignore',
      jsonPointers: true,
      verbose: true,
    });

    ajv.addMetaSchema(v4);
    ajv.addMetaSchema(v6);

    this._configurators.forEach(c => c.configure(ajv));

    return ajv;
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

  public isValid(schema: JsonSchema, data: any): boolean {
    const valid = this._ajv?.validate(schema, data) as boolean | undefined;

    return valid ?? false;
  }

  public createErrorSchema(errors: Ajv.ErrorObject[]): ErrorSchema {
    const errorSchema: ErrorSchema = {
      _errors_: [],
    };

    errors.forEach(error => {
      let pointer = JsonPointer.compile(error.dataPath);

      // move missingProperty error to the properties error schema
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

  public getReferenceSchema($ref: string): JsonSchema | undefined {
    const schema = this._ajv?.getSchema($ref)?.schema;

    return schema as JsonSchema;
  }
}
