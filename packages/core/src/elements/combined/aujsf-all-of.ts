import { AujsfBase } from '../aujsf-base';
import { JsonSchemaAllOf, JsonSchema } from '../../models/json-schema';
import { getLogger } from 'aurelia-logging';
import { customElement, ViewStrategy, InlineViewStrategy } from 'aurelia-framework';
import utils from '../../utils';

@customElement('aujsf-all-of')
export class AujsfAllOf extends AujsfBase<JsonSchemaAllOf, any> {
  protected _logger = getLogger('aujsf:sf-all-of');

  public combinedSchema?: JsonSchema;

  public async bound(): Promise<void> {
    this.combinedSchema = utils.common.mergeAll<JsonSchema>({}, this.schema.allOf, {
      arrayStrategy: 'union',
    });
  }

  protected getTemplate(): string {
    return undefined!;
  }

  protected createViewStrategy(): ViewStrategy {
    const template = this._templateRegistry.get('all-of');

    return new InlineViewStrategy(
      template.entry.template.outerHTML,
      template.entry.dependencies.map(d => d.src));
  }
}
