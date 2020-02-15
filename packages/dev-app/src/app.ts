import lodash from 'lodash';

import samples from './samples';
import { computedFrom, observable } from 'aurelia-framework';

export class App {
  public themes = ['vanilla', 'bootstrap4'];
  public theme = 'bootstrap4';

  public samples: string[] = Object.keys(samples);
  @observable
  public sample = this.samples[0];

  @computedFrom('sample')
  public get schema(): any {
    return (samples as any)[this.sample].schema;
  }

  @computedFrom('sample')
  public get uiSchema(): any {
    return (samples as any)[this.sample].uiSchema;
  }

  public sampleChanged(): void {
    this.model = undefined;
    setTimeout(() => {
      this.model = lodash.cloneDeep((samples as any)[this.sample].model);
    });
  }

  public model: any = {};

  public get modelString(): string {
    return JSON.stringify(this.model, null, 2);
  }
}
