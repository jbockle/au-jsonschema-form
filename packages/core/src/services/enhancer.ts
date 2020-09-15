import { inject, TemplatingEngine, View, Container, DOM, EnhanceInstruction } from 'aurelia-framework';
import { FormTemplate } from '../models';

@inject(TemplatingEngine)
export class Enhancer {
  public constructor(
    private _templating: TemplatingEngine,
  ) { }

  public hideErrors = false;

  public error(options: {
    message: string,
    element: Element
  }): View | undefined {
    if (this.hideErrors) {
      return;
    }

    const element = DOM.createElement('code');
    element.innerHTML = options.message;
    element.style.color = '#FF0000';
    element.style.backgroundColor = '#000';
    element.style.padding = '5px';

    options.element.innerHTML = '';
    options.element.appendChild(element);

    return this._templating.enhance(<EnhanceInstruction>{
      element,
    });
  }

  public enhanceTemplate(options: {
    template: FormTemplate,
    element: Element,
    container: Container,
    bindingContext: any,
    overrideBindingContext?: any,
  }): View {
    const element = DOM.createElement('div');
    element.innerHTML = options.template.entry.template.innerHTML;
    options.element.innerHTML = '';
    options.element.appendChild(element);

    const container = options.container.createChild();

    return this._templating.enhance(<EnhanceInstruction>{
      element,
      bindingContext: options.bindingContext,
      overrideContext: options.overrideBindingContext,
      container,
      resources: options.template.resources,
    });
  }

  public enhanceSlot(options: {
    tagName: string,
    attributes: [string, string][],
    appendTo: Element,
    container: Container,
    bindingContext: any,
  }): View {
    const element = DOM.createElement(options.tagName);

    options.appendTo.innerHTML = '';

    options.appendTo.append(element);
    options.attributes?.forEach(attr => {
      element.setAttribute(attr[0], attr[1]);
    });

    const container = options.container.createChild();

    return this._templating.enhance(<EnhanceInstruction>{
      element,
      bindingContext: options.bindingContext,
      container,
    });
  }
}
