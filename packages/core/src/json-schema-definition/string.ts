// tslint:disable:no-reserved-keywords
import { JsonSchemaDefinition, StringFormat } from './base';

export interface JsonSchemaStringDefinition extends JsonSchemaDefinition {
  type: 'string';
  const?: string;
  enum?: string[];
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  format?: StringFormat;
}
