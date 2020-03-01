import { JsonSchema, UISchema } from '.';
import { JsonSchemaTypeName } from './json-schema';
import { FormComponentViewModel } from './form-component-view-model';
import { ViewStrategy } from 'aurelia-framework';

export type DefinitionType = JsonSchemaTypeName | 'multi-schema';

export interface FormComponentDefinition {
  schema: JsonSchema<any>;
  uiSchema: UISchema;
  pointer: string;
  required: boolean;
  parent?: FormComponentViewModel;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
  type: DefinitionType;
  viewStrategy?: ViewStrategy;
  [key: string]: any;
}
