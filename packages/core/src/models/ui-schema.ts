import { SchemaType } from './json-schema';

/**
 * an interface defining the custom options of a schema form element, nestable to your schema's model
 * @extending you can define custom options for more control in custom views, 
 * suggested to prefix/suffix option keys (i.e. prefix with 'ui:' like 'ui:my-custom-option') or other 
 * unique prefix/suffix so that it will not clash with schema properties
 */
export interface UISchema {
  [key: string]: UISchema | any;

  /**
   * override the title
   * @default jsonschema.title
   */
  'ui:title'?: false | string;

  /**
   * override the view template to be used
   * @default determined from schema.type
   */
  'ui:view'?: string;

  /**
   * specify the property or item order
   */
  'ui:order'?: number;

  /**
   * override the schema type used (may be useful in array schema types)
   */
  'ui:type'?: SchemaType;

  /**
   * show a pre-selected default option in the select dropdown, tuple is [label,value]
   */
  'ui:select-default'?: [string, any];

  /**
   * used to prevents an array's item from being re-ordered
   */
  'ui:no-reorder'?: boolean;

  /**
   * used to prevent removing an item from an array
   */
  'ui:no-remove'?: boolean;

  /**
   * use for an array's UISchema to define the array item(s) UISchema,
   * if an array, the the UISchema is applied to the item with the same index, 
   * or the last index
   */
  'ui:items'?: UISchema | UISchema[];

  /**
   * the array item view to use, can be set on an array's ui schema or on a 'ui:items' ui schema
   * @default 'array-item'
   */
  'ui:item-view'?: string;

  /**
   * template-like literal string to format, @see SfItemTitle converter
   */
  'ui:item-title'?: string;
}
