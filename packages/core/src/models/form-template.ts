import { TemplateRegistryEntry } from 'aurelia-framework';

export type FormModule = string;

export interface FormTemplateReference {
  name: string;
  url: FormModule;
}

export interface FormTemplate extends FormTemplateReference {
  entry: TemplateRegistryEntry;
}

export interface FormTheme {
  'object': FormModule,
  'array': FormModule,
  'array-tabs': FormModule,
  'array-item': FormModule,
  'string-input': FormModule,
  'string-select': FormModule,
  'string-radio': FormModule,
  'number-input': FormModule,
  'checkbox': FormModule,
  [name: string]: FormModule;
}

export type TemplateNames = keyof FormTheme | string;
