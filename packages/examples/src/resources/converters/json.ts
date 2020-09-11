export class JsonValueConverter {
  public toView(value: any, space: number, _update: any): string {
    return JSON.stringify(value, null, space);
  }

  public fromView(value: string, _space: number, _update: any): string {
    return JSON.parse(value);
  }
}
