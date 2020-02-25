import { ComponentViews, ComponentSlotViews } from './views';

export interface SchemaFormPluginOptions {
  views: ComponentViews;
  slotViews: ComponentSlotViews;
}

export type SfThemeFunc = (options: SchemaFormPluginOptions) => void;
