import utils from '../utils';
import { AujsfConditional } from '../elements/form-elements/aujsf-conditional';
import { JsonSchema, JsonSchemaConditional } from './json-schema';

export class ConditionalAdapter {
  private viewModel: AujsfConditional;

  public constructor(
    viewModel: AujsfConditional,
  ) {
    this.viewModel = viewModel;
    this.thenSchema = this.getThenSchema(viewModel);
    this.elseSchema = this.getElseSchema(viewModel);
  }

  public thenSchema: JsonSchema;

  public elseSchema: JsonSchema;

  public ifValid = false;

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

  public valueChanged(): void {
    setTimeout(() => {
      this.ifValid = this.viewModel.context.validator.ajv
        .validate(this.viewModel.schema.if, this.viewModel.value) as boolean;
    });
  }
}