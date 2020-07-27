import { valueConverter } from 'aurelia-framework';

@valueConverter('aujsf_json')
export class AujsfJson {
  public signals = ['aujsf:UpdateJson'];

  public toView(item: any): string {
    return JSON.stringify(item ?? null, null, 2);
  }

  public fromView(json: string): any {
    return JSON.parse(json);
  }
}
