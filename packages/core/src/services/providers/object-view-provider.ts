import { ViewProvider } from './view-provider';
import { JsonSchemaObject } from '../../models/json-schema';

export class ObjectViewProvider extends ViewProvider<JsonSchemaObject, Record<string, any>> {
  public constructor() {
    super('object');
  }
}
