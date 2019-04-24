import { JsonSchemaObjectDefinition } from '../json-schema-definition/object';
import { FormDefinition } from './base';
import { Section } from './section';

export interface ObjectDefinition extends Section {
  schema: JsonSchemaObjectDefinition;
  children: FormDefinition;
}
