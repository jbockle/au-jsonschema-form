import { JsonSchemaArrayDefinition } from '../json-schema-definition/array';
import { ValuePredicate, FormItem } from './base';
import { Section } from './section';

export interface ArrayDefinition extends Section, Removable {
  schema: JsonSchemaArrayDefinition;
  arrayItem: ArrayItemDefinition;
  initializeArray?: boolean;
  addable?: boolean;
}

export interface ArrayItemDefinition extends FormItem, Removable { }

interface Removable {
  removable?: boolean | ValuePredicate;
}
