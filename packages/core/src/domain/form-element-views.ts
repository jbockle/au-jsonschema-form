import { FormElementView } from './form-element-view';

export interface FormElementViews {
  SfString: FormElementView;
  SfStringSelect: FormElementView;
  // SfStringRadio: FormElementView;
  SfBoolean: FormElementView;
  SfNumber: FormElementView;
  SfObject: FormElementView;
  SfErrors: FormElementView;
  SfArray: FormElementView;
  [key: string]: FormElementView;
}

export type JsonSchemaTheme = FormElementViews;
