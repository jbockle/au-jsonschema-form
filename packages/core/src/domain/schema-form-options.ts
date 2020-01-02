import { FormElementViews } from './form-element-views';

export type DestroyAction = 'none' | 'null' | 'delete';

export interface SchemaFormOptions {
  destroyAction?: DestroyAction;
  views?: Partial<FormElementViews>;
}
