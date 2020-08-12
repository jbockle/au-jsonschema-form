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
    }, {
      view: 'string-date-time',
      predicate: model => model.schema.format === 'date-time',
      priority: 6,
    }, {
      view: 'string-date',
      predicate: model => model.schema.format === 'date',
      priority: 6,
    }, {
      view: 'string-time',
      predicate: model => model.schema.format === 'time',
      priority: 6,
    });
  }
}
