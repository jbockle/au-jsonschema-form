import { ViewProvider } from './view-provider';
import { JsonSchemaString } from '../../models/json-schema';

export class StringViewProvider extends ViewProvider<JsonSchemaString, string> {
  public constructor() {
    super('string-input', {
      view: 'string-select',
      predicate: model => Array.isArray(model.schema.enum) && model.schema.enum.length > 5,
      priority: 2,
    }, {
      view: 'string-radio',
      predicate: model => Array.isArray(model.schema.enum) && model.schema.enum.length <= 5,
      priority: 4,
    });
  }
}
