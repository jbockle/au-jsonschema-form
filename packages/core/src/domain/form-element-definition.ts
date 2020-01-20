import { JsonSchema, UISchema } from '.';
import { JsonSchemaTypeName } from './json-schema';
import { FormElementViewModel } from './form-element-view-model';

export interface FormElementDefinition {
  schema: JsonSchema<any>;
  uiSchema: UISchema;
  pointer: string;
  required: boolean;
  parent?: FormElementViewModel;
  fixed?: boolean;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
  type: JsonSchemaTypeName | 'multi-schema';
  [key: string]: any;
}
