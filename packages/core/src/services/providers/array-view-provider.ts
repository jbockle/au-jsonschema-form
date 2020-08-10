import { ViewProvider } from './view-provider';
import { JsonSchemaArray } from '../../models/json-schema';

export class ArrayViewProvider extends ViewProvider<JsonSchemaArray, any[]> {
  public constructor() {
    super('array');
  }
}
