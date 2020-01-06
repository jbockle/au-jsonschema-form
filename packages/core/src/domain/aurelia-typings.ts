import { View, Binding } from 'aurelia-framework';

export interface AureliaBinding extends Binding {
  target: Element;
  targetProperty: string;
}

export interface AureliaView extends View {
  bindings: AureliaBinding[];
}
