import utils from '../utils';
import { AujsfConditional } from '../elements/form-elements/aujsf-conditional';
import { JsonSchema, JsonSchemaConditional } from './json-schema';
import { Validator } from '../utils/validator';

export class ConditionalAdapter {
  private viewModel: AujsfConditional;

  public constructor(
    viewModel: AujsfConditional,
  ) {
    this.viewModel = viewModel;

    this.ifSchema = this.getIfSchema(viewModel);
    this.ifValidator = new Validator(this.ifSchema, this.viewModel.context.formOptions.validatorOptions);

    this.thenSchema = this.getThenSchema(viewModel);
    this.elseSchema = this.getElseSchema(viewModel);
  }

  public ifSchema: JsonSchema;
  public ifValidator: Validator;

  public thenSchema: JsonSchema;

  public elseSchema: JsonSchema;

  public ifValid = false;

  private getIfSchema(viewModel: AujsfConditional): JsonSchema {
    return utils.common.clone(viewModel.schema.if);
  }

  private getThenSchema(viewModel: AujsfConditional): JsonSchema {
    const thenSchema = utils.common.clone(viewModel.schema) as JsonSchema & Partial<JsonSchemaConditional>;

    utils.common.merge(thenSchema, thenSchema.then, { arrayStrategy: 'union' });

    delete thenSchema.if;
    delete thenSchema.then;
    delete thenSchema.else;

    return thenSchema;
  }

  private getElseSchema(viewModel: AujsfConditional): JsonSchema {
    const elseSchema = utils.common.clone(viewModel.schema) as JsonSchema & Partial<JsonSchemaConditional>;

    if ('else' in elseSchema) {
      utils.common.merge(elseSchema, elseSchema.else, { arrayStrategy: 'union' });
    }

    delete elseSchema.if;
    delete elseSchema.then;
    delete elseSchema.else;

    return elseSchema;
  }

  private _ifValidHandler: any = -1;
  public valueChanged(): void {
    clearTimeout(this._ifValidHandler);
    this._ifValidHandler = setTimeout(async () => {
      const result = await this.ifValidator.validate(this.viewModel.value);
      this.ifValid = result.valid;
    }, 50);
  }
}
