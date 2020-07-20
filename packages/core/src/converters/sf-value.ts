import { valueConverter } from 'aurelia-framework';

@valueConverter('sfValue')
export class SfValue {
  public fromView(value: string, toNumber: boolean = false): number | string | undefined {
    if (typeof value === 'string') {

      if (toNumber) {
        return parseFloat(value) || undefined;
      } else if (value !== '') {
        return value;
      }
      
    }

    return undefined;
  }
}
