import { inject, NewInstance, computedFrom } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema, UISchema } from '../models';
import { Validator } from '../utils/validator';
import { PluginOptions } from '../plugin-options';
import { Enhancer } from './enhancer';

@inject(NewInstance.of(Validator), PluginOptions, NewInstance.of(Enhancer))
export class FormContext {
  private _logger = getLogger('aujsf:form-context');
  private _schema?: JsonSchema;

  public constructor(
    public validator: Validator,
    public pluginOptions: PluginOptions,
    public enhancer: Enhancer,
  ) {
    enhancer.hideErrors = !!pluginOptions.hideErrors;
  }

  public uiSchema!: UISchema;

  public value!: any;

  @computedFrom('_schema')
  public get schema(): JsonSchema | undefined {
    return this._schema;
  }

  public set schema(schema: JsonSchema | undefined) {
    this._logger.debug('setting schema', { new: schema, previous: this._schema });
    this._schema = schema;

    if (schema) {
      this.validator.setSchema(schema);
    }
  }
}
