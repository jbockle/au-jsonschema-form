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
    this._element.addEventListener('value-changed', () => {
      this.adapter?.valueChanged();
    });

    if (this.schema) {
      this.adapter = new ConditionalAdapter(this);
    }
  }

  public valueChanged(newValue: any, oldValue: any): void {
    if (this.adapter) {
      super.valueChanged(newValue, oldValue);
      this.adapter.valueChanged();
    }
  }

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
