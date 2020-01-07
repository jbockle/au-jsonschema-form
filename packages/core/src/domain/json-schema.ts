
/**
 * JSON Schema 7
 * Draft 07
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01
 */

/**
 * Primitive type
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1
 */
export type JsonSchemaTypeName = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array' | 'null';
export type JsonSchemaType = JsonSchemaArrayType | boolean | number | null | JsonSchemaObjectType | string;
export type JsonSchemaObjectType = { [key: string]: string | number | boolean | null | JsonSchemaArrayType | JsonSchemaObjectType }
export type JsonSchemaArrayType = Array<JsonSchemaType>;

/**
 * Meta schema
 *
 * Recommended values:
 * - 'http://json-schema.org/schema#'
 * - 'http://json-schema.org/hyper-schema#'
 * - 'http://json-schema.org/draft-07/schema#'
 * - 'http://json-schema.org/draft-07/hyper-schema#'
 *
 * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-5
 */
export type JsonSchemaVersion = string;

export type JsonSchemaFormat = StandardFormats | CustomFormats;
// standard schema formats
export type StandardFormats = RegExFormat | DateTimeFormat | EmailFormat | HostnameFormat | IPFormat | URIFormat;
export type RegExFormat = 'regex';
export type DateTimeFormat = 'date' | 'time' | 'date-time' | 'regex' | 'duration';
export type EmailFormat = 'email' | 'idn-email';
export type HostnameFormat = 'hostname' | 'idn-hostname';
export type IPFormat = 'ipv4' | 'ipv6';
export type URIFormat = 'uri' | 'uri-reference' | 'iri' | 'iri-reference' | 'uri-template' | 'json-pointer';
// custom schema formats
export type CustomFormats = DataUrlFormat | string;
export type DataUrlFormat = 'data-url';


export interface JsonSchema<TSchemaTypeName extends JsonSchemaTypeName | JsonSchemaTypeName[]> {
  $id?: string;
  $ref?: string;
  $schema?: JsonSchemaVersion;
  $comment?: string;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1
   */
  type?: TSchemaTypeName;
  enum?: JsonSchemaType[];
  const?: JsonSchemaType;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.2
   */
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.3
   */
  maxLength?: number;
  minLength?: number;
  pattern?: string;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.4
   */
  items?: JsonSchema<any> | JsonSchema<any>[];
  additionalItems?: JsonSchema<any>;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  contains?: JsonSchema<any>;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.5
   */
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  properties?: {
    [key: string]: JsonSchema<any>;
  };
  patternProperties?: { [key: string]: JsonSchema<any> } | false;
  additionalProperties?: JsonSchema<any> | boolean;
  dependencies?: {
    [key: string]: JsonSchema<any> | string[];
  };
  propertyNames?: JsonSchema<any>;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.6
   */
  if?: JsonSchema<any>;
  then?: JsonSchema<any>;
  else?: JsonSchema<any>;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.7
   */
  allOf?: JsonSchema<any>[];
  anyOf?: JsonSchema<any>[];
  oneOf?: JsonSchema<any>[];
  not?: JsonSchema<any>;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-7
   */
  format?: JsonSchemaFormat;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-8
   */
  contentMediaType?: string;
  contentEncoding?: string;

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-9
   */
  definitions?: {
    [key: string]: JsonSchema<any>;
  };

  /**
   * @see https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-10
   */
  title?: string;
  description?: string;
  default?: JsonSchemaType;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: JsonSchemaType;
}
