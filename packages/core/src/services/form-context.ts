import { getLogger } from 'aurelia-logging';

import utils from '../utils';
import { JsonSchemaDefaultResolver } from '../utils/json-schema-default-resolver';
import { Validator } from '../utils/validator';
import { FormOptions, JsonSchema, UISchema } from '../models';

export class FormContext {
  private _logger = getLogger('aujsf:form-context');
  private _schema: JsonSchema = <any>{};
  private _formOptions: FormOptions = {};

  public validator?: Validator;

  public uiSchema: UISchema = {};

  public value: any;

  public schemaDefaults?: JsonSchemaDefaultResolver;

  public get schema(): JsonSchema {
    return this._schema;
  }

  public set schema(schema: JsonSchema) {
    this._logger.debug('setting schema', { new: schema, previous: this._schema });
    this._schema = schema;
    this.schemaDefaults = utils.jsonSchema.getDefaultResolver(schema);

    this.validator = new Validator(this.schema, this.formOptions.validatorOptions);
  }

  public get formOptions(): FormOptions {
    return this._formOptions;
  }

  public set formOptions(value: FormOptions) {
    this._formOptions = value;

    this.validator = new Validator(this.schema, this.formOptions.validatorOptions);
  }
}
