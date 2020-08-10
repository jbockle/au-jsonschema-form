import { ViewProvider } from './view-provider';
import { JsonSchema } from '../../models/json-schema';

export class EmptyViewProvider extends ViewProvider<JsonSchema> {
  public constructor() {
    super(undefined);
  }

  public key = [];

  public addRules(..._params: any[]): void {
    throw new Error('not supported');
  }
}
