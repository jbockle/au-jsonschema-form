import { JsonSchemaStringDefinition } from '../json-schema-definition';
import { PrimitiveStringDefinition } from '../form-options';

export interface AuSfBase {
  schema: JsonSchemaStringDefinition;
  form: PrimitiveStringDefinition;
  parent: AuSfBase;
}
