import { JsonSchema, UISchema, FormElementViews } from '../domain';

export class FormContext {
  public schema!: JsonSchema<'object' | 'array'>;

  public uiSchema!: UISchema;

  public model!: any;

  public views?: Partial<FormElementViews>;
}
