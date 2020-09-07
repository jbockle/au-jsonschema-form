import { TemplateRegistryEntry, ViewResources } from 'aurelia-framework';

export type FormModule = string;

export interface FormTemplateReference {
  name: string;
  url: FormModule;
}

export interface FormTemplate extends FormTemplateReference {
  entry: TemplateRegistryEntry;
  resources?: ViewResources;
}

export interface FormTheme {
  'object': FormModule,
  'array': FormModule,
  'array-select': FormModule,
  'array-checkboxes': FormModule,
  'array-tabs': FormModule,
  'textarea': FormModule,
  'string-input': FormModule,
  'string-select': FormModule,
  'string-radio': FormModule,
  'string-date-time': FormModule,
  'string-date': FormModule,
  'string-time': FormModule,
  'number-input': FormModule,
  'checkbox': FormModule,
  'all-of': FormModule,
  'one-of': FormModule,
  [name: string]: FormModule;
}

export type TemplateNames = keyof FormTheme | string;
