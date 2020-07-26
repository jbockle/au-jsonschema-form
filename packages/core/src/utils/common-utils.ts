import { merge, mergeAll } from './merge';

export class CommonUtils {
  public static clone<T>(item: T): T {
    return JSON.parse(JSON.stringify(item));
  }

  public static startCase(text: string): string {
    return text
      .replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, (_str, $1, $2) => $1 + ' ' + $2)
      .replace(/(\s|^)(\w)/g, (_str, $1, $2) => $1 + $2.toUpperCase());
  }

  public static fillTemplate(templateString: string, templateVars: any): string {
    return new Function(...Object.keys(templateVars), 'return `' + templateString + '`;')(
      ...Object.values(templateVars),
    );
  }

  public static notNullOrUndefined<T>(item: T | undefined): item is T {
    return item !== null && item !== undefined;
  }

  public static merge = merge;

  public static mergeAll = mergeAll;
}
