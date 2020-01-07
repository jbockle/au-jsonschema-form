import { FormElementViews } from './form-element-views';
import { FormatValidator, FormatDefinition } from 'ajv';

export type DestroyAction = 'none' | 'null' | 'delete';
export type CustomFormat = FormatValidator | FormatDefinition;

export interface AjvOptions {
  customFormats?: { [name: string]: CustomFormat };
}

export interface SchemaFormOptions {
  destroyAction?: DestroyAction;
  views?: Partial<FormElementViews>;
  ajv?: AjvOptions;
}
