
class Util {
  public static last<T>(array: T[]): T | undefined {
    if (Array.isArray(array)) {
      return array.length > 0 ? array[array.length - 1] : undefined;
    }

    return undefined;
  }

  public static compileTemplateString(template: string, args: Record<string, any>): string {
    return template.replace(/\${(.*?)}/g, (_, g) => args[g]);
  }
}

export default Util;
