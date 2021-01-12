import { inject, NewInstance, computedFrom, Factory } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema, UISchema } from '../models';
import { Validator, ValidatorFactory } from './validator';
import { PluginOptions } from '../plugin-options';
import { Enhancer } from './enhancer';

@inject(Factory.of(Validator), PluginOptions, NewInstance.of(Enhancer))
export class FormContext {
  private _logger = getLogger('aujsf:form-context');
  private _schema?: JsonSchema;

  public constructor(
    public validatorFactory: ValidatorFactory,
    public pluginOptions: PluginOptions,
    public enhancer: Enhancer,
  ) {
    this.validator = validatorFactory(pluginOptions.ajvConfigurators);
    enhancer.hideErrors = !!pluginOptions.hideErrors;
  }

  public validator: Validator;

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
