import { ViewProvider } from './view-provider';
import { JsonSchema, JsonSchemaConditional } from '../../models/json-schema';

export class ConditionalViewProvider extends ViewProvider<JsonSchema & JsonSchemaConditional> {
  public constructor() {
    super('conditional');
  }
}
