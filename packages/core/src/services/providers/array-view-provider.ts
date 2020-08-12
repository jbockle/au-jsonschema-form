import { ViewProvider } from './view-provider';
import { JsonSchemaArray } from '../../models/json-schema';
import utils from '../../utils';

export class ArrayViewProvider extends ViewProvider<JsonSchemaArray, any[]> {
  public constructor() {
    super('array', {
      view: 'array-checkboxes',
      predicate: model => {
        const itemSchema = model.schema.items ?? { type: 'null' };
        return !Array.isArray(itemSchema)
          && utils.jsonSchema.isJsonSchemaString(itemSchema)
          && Array.isArray(itemSchema.enum);
      },
      priority: 4,
    });
  }
}
