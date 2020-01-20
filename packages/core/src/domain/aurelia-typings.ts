import { View, Binding, OverrideContext } from 'aurelia-framework';

export interface AureliaBinding extends Binding {
  target: Element;
  targetProperty: string;
}

export interface AureliaView extends View {
  bindings: AureliaBinding[];
}

export interface AureliaOverrideContext<T = any> extends OverrideContext {
  parentOverrideContext: {
    bindingContext: T;
  };
}

export interface AureliaRepeaterOverrideContext<T = any> extends AureliaOverrideContext<T> {
  $index: number;
  $first: boolean;
  $last: boolean;
  $middle: boolean;
  $even: boolean;
  $odd: boolean;
}
