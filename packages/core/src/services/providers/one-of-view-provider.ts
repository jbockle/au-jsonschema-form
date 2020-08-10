import { ViewProvider } from './view-provider';
import { JsonSchemaOneOf } from '../../models/json-schema';

export class OneOfViewProvider extends ViewProvider<JsonSchemaOneOf, any> {
  public constructor() {
    super('one-of');
  }
}
