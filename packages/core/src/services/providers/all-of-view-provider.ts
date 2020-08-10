import { ViewProvider } from './view-provider';
import { JsonSchemaString } from '../../models/json-schema';

export class AllOfViewProvider extends ViewProvider<JsonSchemaString, string> {
  public constructor() {
    super('all-of');
  }
}
