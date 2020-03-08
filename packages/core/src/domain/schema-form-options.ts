import { ComponentViews } from './views';
import { FormatValidator, FormatDefinition } from 'ajv';
import { ErrorMessages } from './error-messages';

export type DestroyAction = 'none' | 'null' | 'delete';
export type CustomFormat = FormatValidator | FormatDefinition;

export interface AjvOptions {
  customFormats?: { [name: string]: CustomFormat };
}

export interface SchemaFormOptions {
  showState?: boolean;
  destroyAction?: DestroyAction;
  autocomplete?: 'on' | 'off';
  views?: Partial<ComponentViews>;
  ajv?: AjvOptions;
  errorMessages?: ErrorMessages;
}
