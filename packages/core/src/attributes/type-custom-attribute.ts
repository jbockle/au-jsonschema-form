import { inject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';
import { AureliaView, AureliaBinding } from '../domain/aurelia-typings';

@inject(DOM.Element)
export class TypeCustomAttribute {
  public constructor(element: Element) {
    this.element = element;
  }

  public value: any;

  public element: Element;

  public owningView!: AureliaView;

  public valueBinding?: AureliaBinding;

  public updateSource?: (value: any) => void;
  public updateTarget?: (value: any) => void;

  public created(owningView: AureliaView): void {
    this.owningView = owningView;
  }

  public bind(): void {
    (this.element as any).type = this.value;
    if (this.isNumberElement(this.element)) {
      const valueBinding = this.valueBinding = this.owningView.bindings
        .find(b => b.target === this.element && b.targetProperty === 'value');
      if (valueBinding) {
        this.updateSource = valueBinding.updateSource;
        this.updateTarget = valueBinding.updateTarget;
        const updateSource = this.updateSource!.bind(valueBinding);
        const updateTarget = this.updateTarget!.bind(valueBinding);
        valueBinding.updateSource = (v): void => {
          ((v = parseFloat(v)) || v === 0) && updateSource(v);
        };
        valueBinding.updateTarget = (v): void => {
          Number.isFinite(v) && updateTarget(v);
        };
      }
    }
  }

  public unbind(): void {
    if (this.valueBinding) {
      this.valueBinding.updateSource = this.updateSource;
      this.valueBinding.updateTarget = this.updateTarget;
    }
  }

  public isNumberElement(element: Element): boolean {
    return this.isInputElement(element) && element.type === 'number';
  }

  public isInputElement(element: Element): element is HTMLInputElement {
    return element.tagName.trim().toLowerCase() === 'input';
  }
}
