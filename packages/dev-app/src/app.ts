import { Loader } from 'aurelia-loader';
import { inject, PLATFORM } from 'aurelia-framework';

@inject(Loader)
export class App {
  public constructor(loader: Loader) {
    loader.loadText(PLATFORM.moduleName('app.html')).then(app => console.log(app));
  }
  public message: string = 'Hello World!';

  public schema = {
    type: 'object',
    properties: {
      x: {
        title: 'x test',
        type: 'string',
        // format: 'regex',
        // pattern: '^a',
        const: 'test',
      },
      a: {
        type: 'string',
      },
      droot: {
        type: 'number',
        minimum: 5,
      },
      broot: {
        type: 'boolean',
      },
      obj: {
        type: 'object',
        properties: {
          c: {
            title: 'c test',
            type: ['string', 'null'],
            format: 'regex',
            pattern: '^a',
          },
          d: {
            type: 'number',
          },
        },
        required: [
          'c',
          'd',
        ],
      },
    },
    required: [
      'a',
      'obj',
      'x',
    ],
  }

  public uiSchema = {
    'ui:title': 'Test',
  }

  public model: any = {
    // x: 'a',
  };

  public get modelString(): string {
    return JSON.stringify(this.model, null, 2);
  }
}
