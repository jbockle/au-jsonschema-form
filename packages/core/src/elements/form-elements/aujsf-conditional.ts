import { getLogger } from 'aurelia-logging';
import { inject, Container, customElement } from 'aurelia-framework';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaConditional, JsonSchema } from '../../models';
import { ConditionalAdapter } from '../../models/conditional-adapter';
import { FormTemplateRegistry, FormContext, Enhancer } from '../../services';
import { ConditionalViewProvider } from '../../services/providers/conditional-view-provider';

@inject(Element, Container, FormTemplateRegistry, FormContext, ConditionalViewProvider)
@customElement('aujsf-conditional')
export class AujsfConditional extends AujsfBase<JsonSchema & JsonSchemaConditional>{
  public slot?: HTMLElement;

  protected _logger = getLogger('aujsf:conditional');

  public adapter?: ConditionalAdapter;

  public bound(): void {
    this._element.addEventListener('value-changed', this.valueChangedHandler);

    if (this.schema) {
      this.adapter = new ConditionalAdapter(this);
    }
  }

  public unbind(): void {
    this._element.removeEventListener('value-changed', this.valueChangedHandler);
  }

  protected valueChangedHandler = ((): void => this.adapter?.valueChanged()).bind(this);

  protected resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
  }

  protected enhance(): void {
    this.adapter?.valueChanged();
    // TODO should try/catch exception
    const template = this._templateRegistry.get(this.viewProvider.getTemplate(this));

    this.view = this._container.get(Enhancer).enhanceTemplate({
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
