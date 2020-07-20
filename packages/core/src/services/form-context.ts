import { inject, NewInstance } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema, UISchema } from '../models';
import { Validator } from '../utils/validator';
import { PluginOptions } from '../plugin-options';

@inject(NewInstance.of(Validator), PluginOptions)
export class FormContext {
  private _logger = getLogger('aujsf:form-context');
  private _schema: JsonSchema = {type: 'null'};

  public constructor(
    public validator: Validator,
    public options: PluginOptions,
  ) { }

  public set schema(schema: JsonSchema) {
    this._logger.debug('setting schema', {new: schema, previous: this._schema});
    this._schema = schema;
    this.validator.setSchema(schema);
  }

  public get schema(): JsonSchema {
    return this._schema;
  }

  public uiSchema!: UISchema;

  public value!: any;
}
