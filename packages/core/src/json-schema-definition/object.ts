// tslint:disable:no-reserved-keywords
import { JsonSchemaDefinition } from './base';

export interface JsonSchemaObjectDefinition extends JsonSchemaDefinition {
  type: 'object';
  propertyOrder?: string[];
  properties?: {
    [key: string]: JsonSchemaDefinition;
  };
  patternProperties?: {
    [key: string]: JsonSchemaDefinition;
  };
  minProperties?: number;
  maxProperties?: number;
  required?: string[];
}
