import { getLogger } from 'aurelia-logging';
import { inject, Container, observable, customElement } from 'aurelia-framework';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaConditional, JsonSchema } from '../../models';
import { ConditionalAdapter } from '../../models/conditional-adapter';
import { FormTemplateRegistry, FormContext } from '../../services';
import { ConditionalViewProvider } from '../../services/providers/conditional-view-provider';

@inject(Element, Container, FormTemplateRegistry, FormContext, ConditionalViewProvider)
@customElement('aujsf-conditional')
export class AujsfConditional extends AujsfBase<JsonSchema & JsonSchemaConditional>{
  @observable
  public slot?: HTMLElement;

  protected _logger = getLogger('aujsf:conditional');

  public adapter?: ConditionalAdapter;

  public slotChanged(newElement?: HTMLElement, oldElement?: HTMLElement): void {
    setTimeout(() => {
      if (newElement && oldElement !== undefined) {
        // TODO assumptious, need to rework this to select last focused element
        const firstInput = newElement.querySelector('input');
        firstInput?.focus();
      }
    });
  }

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

    this.view = this.context.enhancer.enhanceTemplate({
      element: this._element,
      bindingContext: this,
      container: this._container,
      template,
    });
  }
}
