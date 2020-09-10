
export type JsonSchemaType =
  'object' |
  'array' |
  'number' |
  'string' |
  'boolean' |
  'null';

export type SchemaType = JsonSchemaType | Array<JsonSchemaType>

export type JsonSchema =
  JsonSchemaObject |
  JsonSchemaArray |
  JsonSchemaNumber |
  JsonSchemaBoolean |
  JsonSchemaString |
  JsonSchemaNull |
  JsonSchemaMulti |
  JsonSchemaRef |
  JsonSchemaAllOf |
  JsonSchemaAnyOf |
  JsonSchemaOneOf;

interface JsonSchemaAnnotations {
  type?: SchemaType;
  title?: string;
  description?: string;
  readOnly?: boolean;
  writeOnly?: boolean;
  default?: any;
  const?: any;
}

interface JsonSchemaBase extends JsonSchemaAnnotations {
  type?: SchemaType;
  const?: any;
  enum?: any[];
  format?: string;
  [key: string]: any;
}

export interface JsonSchemaObject extends JsonSchemaBase {
  type: 'object';
  properties?: { [prop: string]: JsonSchema };
  patternProperties?: { [regex: string]: JsonSchema };
  additionalProperties?: boolean | JsonSchema;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: Record<string, any>[];
  dependentRequired?: Record<string, string[]>;
}

export interface JsonSchemaArray extends JsonSchemaBase {
  type: 'array';
  items?: JsonSchema | JsonSchema[];
  additionalItems?: JsonSchema;
  uniqueItems?: boolean;
  contains?: JsonSchema;
  enum?: any[][];
  minItems?: number;
  maxItems?: number;
}

export interface JsonSchemaNumber extends JsonSchemaBase {
  type: 'number';
  enum?: number[];
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;
}

export interface JsonSchemaBoolean extends JsonSchemaBase {
  type: 'boolean';
  enum?: boolean[];
  const?: boolean;
  default?: boolean;
}

export interface JsonSchemaString extends JsonSchemaBase {
  type: 'string';
  enum?: string[];
  const?: string;
  default?: string;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
  format?: 'date-time' | 'date' | 'time' | 'duration' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'iri' | 'uuid' | string
}

export interface JsonSchemaNull extends JsonSchemaBase {
  type: 'null';
  const?: null,
  default?: null
}

export interface JsonSchemaMulti extends JsonSchemaBase {
  type: Array<JsonSchemaType>;
}

export interface JsonSchemaRef extends JsonSchemaAnnotations {
  $ref: string;
}

export interface JsonSchemaAllOf extends JsonSchemaAnnotations {
  allOf: JsonSchema[];
}

export interface JsonSchemaAnyOf extends JsonSchemaAnnotations {
  anyOf: JsonSchema[];
}

export interface JsonSchemaOneOf extends JsonSchemaAnnotations {
  oneOf: JsonSchema[];
}

export interface JsonSchemaNot extends JsonSchemaAnnotations {
  not: JsonSchema;
}

export interface JsonSchemaConditional {
  if: JsonSchema;
  then: JsonSchema;
  else?: JsonSchema;
}
