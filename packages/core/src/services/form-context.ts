import { inject, NewInstance } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema, UISchema, FormOptions } from '../models';
import { Validator } from '../utils/validator';
import { PluginOptions } from '../plugin-options';
import { Enhancer } from './enhancer';

@inject(NewInstance.of(Validator), PluginOptions, NewInstance.of(Enhancer))
export class FormContext {
  private _logger = getLogger('aujsf:form-context');
  private _schema: JsonSchema = { type: 'null' };

  public constructor(
    public validator: Validator,
    public options: PluginOptions,
    public enhancer: Enhancer,
  ) {
    enhancer.hideErrors = !!options.hideErrors;
  }

  public setSchema(schema: JsonSchema, options: FormOptions): void {
    this._logger.debug('setting schema', { new: schema, previous: this._schema });
    this._schema = schema;
    this.validator.setSchema(schema, options);
  }

  public get schema(): JsonSchema {
    return this._schema;
  }

  public uiSchema!: UISchema;

  public value!: any;
}
