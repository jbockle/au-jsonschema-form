// tslint:disable:no-reserved-keywords
export declare type StringFormat = 'date-time' | 'date' | 'time' | 'ipv4' | 'ipv6' | 'email';

/** the value type, if it is an array, validation only occurs on type at index 0 */
export declare type SchemaType = 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';

export declare type ModelType = object | string | number | boolean | null;

export declare type PrimitiveType = number | boolean | string | null;

export interface JsonSchemaDefinition {
  $schema?: string;
  description?: string;
  title?: string;
  type: SchemaType | SchemaType[];
  examples?: ModelType[];
  default?: ModelType;
  const?: ModelType;
  readOnly?: boolean;
  enum?: ModelType[];
  [key: string]: any;
}
