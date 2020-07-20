import { valueConverter, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { JsonSchema, UISchema, JsonSchemaArray, ArrayKeyDefinition } from '../models';
import { FormContext } from '../services/form-context';
import utils from '../utils';

@valueConverter('sfGetItemDefinition')
@inject(FormContext)
export class SfGetItemDefinition {
  private _logger = getLogger('aujsf:to-definition');

  public constructor(
    private _context: FormContext) { }

  public signals = ['sfGetItemDefinition'];

  public toView(
    length: number | undefined, schema: JsonSchemaArray, uiSchema: UISchema, pointer: JsonPointer,
  ): ArrayKeyDefinition[] {
    const definitions: ArrayKeyDefinition[] = [];

    for (let index = 0; index < (length ?? 0); index++) {
      const definition: ArrayKeyDefinition = {
        key     : index,
        schema  : this.getItemJsonSchema(index, schema),
        uiSchema: this.getItemUiSchema(index, uiSchema),
        pointer : new JsonPointer([...pointer.segments, index.toString()]),
      };

      this._logger.debug('created definition', definition);

      definitions.push(definition);
    }

    this._logger.debug('created definitions', definitions);

    return definitions;
  }

  public getItemJsonSchema(index: number, schema: JsonSchemaArray): JsonSchema {
    if (schema.items) {
      schema.items = this.getReferencedSchema(schema.items);

      if (Array.isArray(schema.items)) {
        if (index in schema.items) {
          return schema.items[index];
        }
      } else if (schema.items) {
        return schema.items;
      }
    }

    if (schema.additionalItems) {
      schema.additionalItems = this.getReferencedSchema(schema.additionalItems) as JsonSchema;

      return schema.additionalItems;
    }

    throw new Error('unable to determine item schema');
  }

  public getItemUiSchema(index: number, uiSchema: UISchema): UISchema {
    if ('ui:items' in uiSchema) {
      if (Array.isArray(uiSchema['ui:items'])) {
        if (index in uiSchema['ui:items']) {
          return utils.common.clone(uiSchema['ui:items'][index]);
        }

        return utils.array.last(uiSchema['ui:items'])!;
      } else {
        return utils.common.clone(uiSchema['ui:items']!);
      }
    }

    return {};
  }

  public getReferencedSchema(schemaOrSchemas: JsonSchema | JsonSchema[]): JsonSchema | JsonSchema[] {
    if (Array.isArray(schemaOrSchemas)) {
      return schemaOrSchemas.map(schema => this.getReferencedSchema(schema) as JsonSchema);
    } else if ('$ref' in schemaOrSchemas) {
      return this.getReferencedSchema(utils.jsonSchema.resolveSchemaReference(schemaOrSchemas.$ref, this._context.schema));
    } else {
      return schemaOrSchemas;
    }
  }
}
