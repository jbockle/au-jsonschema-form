import { valueConverter, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, UISchema, JsonSchemaArray, ArrayKeyDefinition } from '../models';
import { FormContext } from '../services/form-context';
import utils from '../utils';

@valueConverter('aujsf_getItemDefinition')
@inject(FormContext)
export class AujsfGetItemDefinition {
  private _logger = getLogger('aujsf:to-definition');

  public constructor(
    private _context: FormContext) { }

  public signals = ['aujsf:GetItemDefinition'];

  public toView(
    length: number | undefined, schema: JsonSchemaArray, uiSchema: UISchema, pointer: JsonPointer,
  ): ArrayKeyDefinition[] {
    const definitions: ArrayKeyDefinition[] = [];

    for (let index = 0; index < (length ?? 0); index++) {
      const definition: ArrayKeyDefinition = {
        key: index,
        schema: this.getItemJsonSchema(index, schema),
        uiSchema: utils.form.getItemUiSchema(index, uiSchema),
        pointer: new JsonPointer([...pointer.segments, index.toString()]),
      };

      this._logger.debug('created definition', definition);

      definitions.push(definition);
    }

    this._logger.debug('created definitions', definitions);

    return definitions;
  }

  public getItemJsonSchema(index: number, schema: JsonSchemaArray): JsonSchema {
    const itemSchema = utils.jsonSchema.getItemJsonSchema(index, schema, this._context.schema);

    if (!itemSchema) {
      throw new Error('unable to determine item schema');
    }

    return itemSchema;
  }
}
