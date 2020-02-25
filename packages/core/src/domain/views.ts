import { ComponentView, ComponentSlotView } from './view';

export interface ComponentViews {
  [key: string]: ComponentView;
}

export interface ComponentSlotViews {
  // 'sf-object': ComponentSlotView;
  // 'sf-array': ComponentSlotView;
  // 'sf-field': ComponentSlotView;
  [key: string]: ComponentSlotView;
}
