// tslint:disable:no-reserved-keywords
import { JsonSchemaDefinition } from './base';

export interface JsonSchemaArrayDefinition extends JsonSchemaDefinition {
  type: 'array';
  items?: JsonSchemaDefinition;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
}
