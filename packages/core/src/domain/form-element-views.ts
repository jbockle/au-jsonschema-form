import { FormElementView } from './form-element-view';

export interface FormElementViews {
  SfString: FormElementView;
  // SfStringSelect: View;
  // SfStringRadio: View;
  SfBoolean: FormElementView;
  SfNumber: FormElementView;
  SfObject: FormElementView;
  [key: string]: FormElementView;
}

export type JsonSchemaTheme = FormElementViews;
