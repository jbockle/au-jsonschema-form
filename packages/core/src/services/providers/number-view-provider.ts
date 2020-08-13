import { ViewProvider } from './view-provider';
import { JsonSchemaNumber } from '../../models/json-schema';

export class NumberViewProvider extends ViewProvider<JsonSchemaNumber, number> {
  public constructor() {
    super('number-input', {
      view: 'number-range',
      predicate: model => (typeof model.schema.minimum === 'number' || typeof model.schema.exclusiveMinimum === 'number')
        && (typeof model.schema.maximum === 'number' || typeof model.schema.exclusiveMaximum === 'number'),
      priority: 2,
    });
  }
}
