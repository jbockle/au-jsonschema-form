import { getLogger } from 'aurelia-logging';
import { customElement, inject, Container } from 'aurelia-framework';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaAllOf, JsonSchema } from '../../models/json-schema';
import utils from '../../utils';
import { FormContext, FormTemplateRegistry } from '../../services';
import { AllOfViewProvider } from '../../services/providers/all-of-view-provider';

@inject(Element, Container, FormTemplateRegistry, FormContext, AllOfViewProvider)
@customElement('aujsf-all-of')
export class AujsfAllOf extends AujsfBase<JsonSchemaAllOf, any> {
  protected _logger = getLogger('aujsf:sf-all-of');

  public combinedSchema?: JsonSchema;

  public bound(): void {
    const mergedSchema = utils.jsonSchema.mergeAllOf(this.schema, this.context.schema!);

    this.combinedSchema = mergedSchema;
  }

  protected resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
  }

  protected enhance(): void {
    const template = this._templateRegistry.get(this.viewProvider.getTemplate(this));

    this.view = this.context.enhancer.enhanceTemplate({
      element: this._element,
      bindingContext: this,
      container: this._container,
      template,
      attributes: this.uiSchema['ui:view-class']
        ? [['class', this.uiSchema['ui:view-class']]]
        : undefined,
    });
  }
}
