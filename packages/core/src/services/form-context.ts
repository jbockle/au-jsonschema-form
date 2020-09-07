import { inject, NewInstance, computedFrom } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { JsonSchema, UISchema, FormOptions } from '../models';
import { Validator } from '../utils/validator';
import { PluginOptions } from '../plugin-options';
import { Enhancer } from './enhancer';

@inject(NewInstance.of(Validator), PluginOptions, NewInstance.of(Enhancer))
export class FormContext {
  private _logger = getLogger('aujsf:form-context');
  private _schema?: JsonSchema;
  private _options?: FormOptions;

  public constructor(
    public validator: Validator,
    public pluginOptions: PluginOptions,
    public enhancer: Enhancer,
  ) {
    enhancer.hideErrors = !!pluginOptions.hideErrors;
  }

  public uiSchema!: UISchema;

  public value!: any;

  @computedFrom('_options')
  public get options(): FormOptions | undefined {
    return this._options;
  }

  public set options(options: FormOptions | undefined) {
    this._options = options;

    if (options && this.schema) {
      this.validator.setSchema(this.schema, options);
    }
  }

  @computedFrom('_schema')
  public get schema(): JsonSchema | undefined {
    return this._schema;
  }

  public set schema(schema: JsonSchema | undefined) {
    this._logger.debug('setting schema', { new: schema, previous: this._schema });
    this._schema = schema;

    if (schema && this.options) {
      this.validator.setSchema(schema, this.options);
    }
  }
}
