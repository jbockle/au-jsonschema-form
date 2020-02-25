import { JsonSchema, UISchema, ComponentViews } from '../domain';

export class FormContext {
  public schema!: JsonSchema<'object' | 'array'>;

  public uiSchema!: UISchema;

  public model!: any;

  public views?: Partial<ComponentViews>;
}
