import { valueConverter } from 'aurelia-framework';

@valueConverter('sfJson')
export class SfJson {
  public signals = ['sfJson'];

  public toView(item: any): string {
    return JSON.stringify(item ?? null, null, 2);
  }

  public fromView(json: string): any {
    return JSON.parse(json);
  }
}
