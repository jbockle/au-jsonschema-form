import Ajv from 'ajv';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import v4 from 'ajv/lib/refs/json-schema-draft-04.json';
import v6 from 'ajv/lib/refs/json-schema-draft-06.json';

import { JsonSchema, ErrorSchema, ValidationResult } from '../models';

export type AjvConfigurator = (ajv: Ajv.Ajv) => void;

export interface ValidatorOptions {
  configurators?: AjvConfigurator[]
}

export class Validator {
  private _logger = getLogger('aujsf:validator');
  private _ajv: Ajv.Ajv;
  private _validator: Ajv.ValidateFunction;

  public constructor(
    public schema: JsonSchema,
    public options?: ValidatorOptions,
  ) {
    this._ajv = this.createAjv();
    options?.configurators?.forEach(c => c(this._ajv));
    this._validator = this._ajv.compile(schema);
  }

  public async validate(data: any): Promise<ValidationResult> {
    const validationResult = this._validator(data);

    if (validationResult instanceof Promise) {
      await validationResult;
    }

    const result: ValidationResult = {
      valid: !this._validator.errors,
      errors: this._validator.errors ?? [],
      errorSchema: this.createErrorSchema(this._validator.errors ?? []),
    };

    this._logger.info('validation completed', { ...result });

    return result;
  }

  private createAjv(): Ajv.Ajv {
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

    return ajv;
  }

  private createErrorSchema(errors: Ajv.ErrorObject[]): ErrorSchema {
    const errorSchema = ErrorSchema.create();

    errors.forEach(error => {
      let pointer = JsonPointer.compile(error.dataPath);

      // move missingProperty error to the properties error schema
      if (error.keyword === 'required' && 'missingProperty' in error.params) {
        pointer = new JsonPointer([...pointer.segments, error.params['missingProperty']]);
      }

      const childErrorSchema: ErrorSchema = pointer.get(errorSchema);

      childErrorSchema['es:error-objects'].push(error);
    });

    return errorSchema;
  }

  public getReferenceSchema($ref: string): JsonSchema | undefined {
    const schema = this._ajv?.getSchema($ref)?.schema;

    return schema as JsonSchema;
  }
}
