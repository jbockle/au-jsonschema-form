import { FormElementViewModel, UISchema, JsonSchema } from '@au-jsonschema-form/core';
import samples from './samples';

export class App {
  public message: string = 'Hello World!';

  public schema: JsonSchema<any> = samples.settings;

  public uiSchema: UISchema = {
    'ui:title': 'Test',
    foo: {
      'ui:hidden': (viewModel: FormElementViewModel): boolean => {
        // eslint-disable-next-line no-console
        console.log('should hide?', viewModel);
        return viewModel.context.model.bar.name === 'foo';
      },
    },
  }

  public model: any = {
    // x: 'a',
  };

  public get modelString(): string {
    return JSON.stringify(this.model, null, 2);
  }
}
