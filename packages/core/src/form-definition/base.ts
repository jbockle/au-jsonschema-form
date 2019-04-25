import { ModelType, JsonSchemaDefinition } from '../json-schema-definition';

/**
 * defines a form
 */
export type FormDefinition = FormElement[];

/**
 * Changes behavior when model is cleared, default is to remove the property
 */
export type DestroyStrategy = 'remove' | 'null';

/**
 * @param item the schema key item's value
 * @returns boolean
 */
export declare type ValuePredicate = (value?: ModelType) => Promise<boolean>;

export interface FormElement {
  template?: string;
}

export interface FormItem extends FormElement {
  /** the schema key for this form element */
  key: string;
  /** title of schema key, uses $schema.title or property key or specify custom, set to false for none */
  title?: string | false;
  /** custom class to apply to template */
  htmlClass?: string;
  /** the json schema definition, populated at runtime by key of this IFormOverride */
  schema?: JsonSchemaDefinition;
  /** the parent override of this override */
  parent?: FormItem;
  /** specifies if schema key is required, defined from parent schema */
  required?: boolean | ValuePredicate;
  /** specifies if the schema key is readonly, defined from schema */
  readOnly?: boolean | ValuePredicate;
  /** specify behavior when model is cleared, default is to remove the property */
  destroyStrategy?: DestroyStrategy;
  /** specify template, otherwise default for schema type is used */
  template?: string;
}
