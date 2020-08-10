import { ViewProvider } from './view-provider';
import { JsonSchemaNumber } from '../../models/json-schema';

export class NumberViewProvider extends ViewProvider<JsonSchemaNumber, number> {
  public constructor() {
    super('number-input');
  }
}
