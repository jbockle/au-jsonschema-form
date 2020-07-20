
export type SchemaPrimitiveType =
  'object' |
  'array' |
  'number' |
  'string' |
  'boolean' |
  'null';

export type SchemaType = SchemaPrimitiveType | Array<SchemaPrimitiveType>

export type JsonSchema =
  JsonSchemaObject |
  JsonSchemaArray |
  JsonSchemaNumber |
  JsonSchemaBoolean |
  JsonSchemaString |
  JsonSchemaNull |
  JsonSchemaMulti |
  JsonSchemaRef |
  JsonSchemaAnyOf |
  JsonSchemaOneOf;

interface JsonSchemaAnnotations {
  title?: string;
  description?: string;
  readOnly?: boolean;
  writeOnly?: boolean;
  default?: any;
}

interface JsonSchemaBase extends JsonSchemaAnnotations {
  type: SchemaType;
  const?: any;
  enum?: any[];
  [key: string]: any;
}

export interface JsonSchemaObject extends JsonSchemaBase {
  type: 'object';
  properties?: { [prop: string]: JsonSchema };
  patternProperties?: { [regex: string]: JsonSchema };
  additionalProperties?: boolean | JsonSchema;
  required?: string[];
  enum?: Record<string, any>[];
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
}

export interface JsonSchemaNull extends JsonSchemaBase {
  type: 'null';
  const?: null,
  default?: null
}

export interface JsonSchemaMulti extends JsonSchemaBase {
  type: Array<SchemaPrimitiveType>;
}

export interface JsonSchemaRef extends JsonSchemaAnnotations {
  $ref: string;
}

export interface JsonSchemaAnyOf extends JsonSchemaAnnotations {
  anyOf: JsonSchema[];
}

export interface JsonSchemaOneOf extends JsonSchemaAnnotations {
  oneOf: JsonSchema[];
}
