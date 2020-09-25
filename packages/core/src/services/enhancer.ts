import { inject, TemplatingEngine, View, Container, DOM, EnhanceInstruction, ViewResources } from 'aurelia-framework';
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
    attributes?: [string, string][],
    element: Element,
    bindingContext: any,
    overrideBindingContext?: any,
    container: Container,
    resources?: ViewResources,
  }): View {
    return this.enhanceSlot({
      tagName: 'ui-view',
      attributes: options.attributes,
      innerHtml: options.template.entry.template.innerHTML,
      appendTo: options.element,
      bindingContext: options.bindingContext,
      overrideBindingContext: options.overrideBindingContext,
      container: options.container,
      resources: options.template.resources,
    });
  }

  public enhanceSlot(options: {
    tagName: string,
    attributes?: [string, string][],
    innerHtml?: string,
    appendTo: Element,
    bindingContext: any,
    overrideBindingContext?: any,
    container: Container,
    resources?: ViewResources,
  }): View {
    const element = DOM.createElement(options.tagName);
    options.attributes?.forEach(attr => {
      element.setAttribute(attr[0], attr[1]);
    });
    element.innerHTML = options.innerHtml || '';
    options.appendTo.innerHTML = '';
    options.appendTo.append(element);

    const container = options.container.createChild();

    return this._templating.enhance(<EnhanceInstruction>{
      element,
      bindingContext: options.bindingContext,
      overrideContext: options.overrideBindingContext,
      container,
      resources: options.resources,
    });
  }
}
