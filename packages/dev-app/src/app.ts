import { schema } from 'kitchen-sink-schema';

export class App {
  public message: string = 'Hello World!';

  public schema = {
    type: 'object',
    properties: {
      foo: schema,
      bar: schema,
    },
  };

  public uiSchema = {
    'ui:title': 'Test',
    a: {
      'ui:textarea': true,
    },
  }

  public model: any = {
    // x: 'a',
  };

  public get modelString(): string {
    return JSON.stringify(this.model, null, 2);
  }
}
