import { inject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';
import { AureliaView, AureliaBinding } from '../domain/aurelia-typings';

type UpdateValueFunc = (value: any) => void;
type OverrideFuncs = {
  source: (func: UpdateValueFunc) => UpdateValueFunc;
  target: (func: UpdateValueFunc) => UpdateValueFunc;
};

interface OverrideDictionary {
  text: OverrideFuncs;
  number: OverrideFuncs;
  [key: string]: OverrideFuncs;
}

const OVERRIDES: OverrideDictionary = {
  number: {
    source: (updateSource) => {
      return (value): void => {
        (value = parseFloat(value)) || value === 0;
        updateSource(value || undefined);
      };
    },
    target: (updateTarget) => {
      return (value): void => {
        Number.isFinite(value) && updateTarget(value);
      };
    },
  },
  text: {
    source: (updateSource) => {
      return (value): void => {
        value = !!value ? value : null;
        updateSource(value || undefined);
      };
    },
    target: (updateTarget) => {
      return (value): void => {
        updateTarget(value);
      };
    },
  },
};

@inject(DOM.Element)
export class TypeCustomAttribute {
  public constructor(public element: Element) { }

  public value: any;

  public owningView!: AureliaView;

  public valueBinding?: AureliaBinding;

  public updateSource?: (value: any) => void;
  public updateTarget?: (value: any) => void;

  public created(owningView: AureliaView): void {
    this.owningView = owningView;
  }

  public bind(): void {
    if (this.isInputElement(this.element)) {
      (this.element as any).type = this.value;

      switch (this.element.type) {
        case 'text':
        case 'number':
          const valueBinding = this.valueBinding = this.owningView.bindings
            .find(b => b.target === this.element && b.targetProperty === 'value');
          if (valueBinding) {
            this.updateSource = valueBinding.updateSource;
            this.updateTarget = valueBinding.updateTarget;
            const updateSource = this.updateSource!.bind(valueBinding);
            const updateTarget = this.updateTarget!.bind(valueBinding);
            valueBinding.updateSource = OVERRIDES[this.element.type].source(updateSource);
            valueBinding.updateTarget = OVERRIDES[this.element.type].target(updateTarget);
          }
          break;
      }
    }
  }

  public unbind(): void {
    if (this.valueBinding) {
      this.valueBinding.updateSource = this.updateSource;
      this.valueBinding.updateTarget = this.updateTarget;
    }
  }

  public isInputElement(element: Element): element is HTMLInputElement {
    return element.tagName.toLowerCase() === 'input';
  }
}
