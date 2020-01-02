import { JsonSchemaFormat } from './json-schema';

export interface FormElementView {
  markup: string;
  dependencies?: Array<string | Function | Record<string, any>>;
}

export interface FormElementViewSet {
  default: string;
  anyOf?: string;
  oneOf?: string;
  enum?: string;
  patternProperties?: string;
  format?: Partial<Record<JsonSchemaFormat, string>>;
}
