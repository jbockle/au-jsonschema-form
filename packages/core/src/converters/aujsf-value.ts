import { valueConverter } from 'aurelia-framework';

@valueConverter('aujsf_value')
export class AujsfValue {
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
