import { ViewProvider } from './view-provider';
import { JsonSchemaBoolean } from '../../models/json-schema';

export class BooleanViewProvider extends ViewProvider<JsonSchemaBoolean, boolean> {
  public constructor() {
    super('checkbox');
  }
}
