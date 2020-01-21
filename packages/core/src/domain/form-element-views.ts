import { FormElementView, ViewSlot } from './form-element-view';

export interface FormElementViews {
  SfString: FormElementView;
  SfStringSelect: FormElementView;
  // SfStringRadio: FormElementView;
  SfBoolean: FormElementView;
  SfNumber: FormElementView;
  SfObject: FormElementView;
  SfErrors: FormElementView;
  SfArray: FormElementView;
  SfArrayItemToolbar: FormElementView;
  [key: string]: FormElementView;
}

export interface FieldViews {
  [key: string]: ViewSlot;
}

export type JsonSchemaTheme = FormElementViews;
