import { getLogger } from 'aurelia-logging';
import { customElement, inject, ViewStrategy, InlineViewStrategy } from 'aurelia-framework';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaAllOf, JsonSchema } from '../../models/json-schema';
import utils from '../../utils';
import { FormContext, FormTemplateRegistry } from '../../services';
import { AllOfViewProvider } from '../../services/providers/all-of-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, AllOfViewProvider)
@customElement('aujsf-all-of')
export class AujsfAllOf extends AujsfBase<JsonSchemaAllOf, any> {
  protected _logger = getLogger('aujsf:sf-all-of');

  public combinedSchema?: JsonSchema;

  public async bound(): Promise<void> {
    this.combinedSchema = utils.common.mergeAll<JsonSchema>({}, utils.jsonSchema.resolveSchemas(this.schema.allOf, this.context.schema), {
      arrayStrategy: 'union',
    });
  }

  protected resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
  }

  protected createViewStrategy(): ViewStrategy {
    const template = this._templateRegistry.get(this.viewProvider.getTemplate(this));

    return new InlineViewStrategy(
      template.entry.template.outerHTML,
      template.entry.dependencies.map(d => d.src));
  }
}
