// tslint:disable:no-reserved-keywords
import { JsonSchemaDefinition } from './base';

export interface JsonSchemaNumberDefinition extends JsonSchemaDefinition {
  type: 'number';
  multipleOf?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
}
