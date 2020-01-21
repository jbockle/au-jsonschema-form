import { FormElementViews, FieldViews } from './form-element-views';

export interface SchemaFormPluginOptions {
  views: FormElementViews;
  fields: FieldViews;
}

export type SfThemeFunc = (options: SchemaFormPluginOptions) => void;
