import { computedFrom } from 'aurelia-binding';

export class App {
  public message: string = 'Hello World!';
  public model: { [key: string]: any } = { test: 'abcd' };

  @computedFrom('model', 'model.test')
  public get modelJson() {
    return JSON.stringify(this.model);
  }

  public getModelState(key: string) {
    return (value: string) => {
      console.log('setting model', key, value);
      if (value !== '') {
        this.model[key] = value;
      } else if (key in this.model) {
        delete this.model[key];
      }
    };
  }
}
