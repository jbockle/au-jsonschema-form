import { merge, mergeAll } from './merge';
import { clone } from './clone';

export class CommonUtils {
  public static clone<T>(item: T): T {
    return clone(item);
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

  private static rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  private static fcssescape(ch: string, asCodePoint: any): string {
    if (asCodePoint) {

      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === '\0') {
        return '\uFFFD';
      }

      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice(0, -1) + '\\' + ch.charCodeAt(ch.length - 1).toString(16) + ' ';
    }

    // Other potentially-special ASCII characters get backslash-escaped
    return '\\' + ch;
  }

  public static escapeSelector(selector: string): string {
    return (selector + '').replace(this.rcssescape, this.fcssescape);
  }
}
