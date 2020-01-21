
const util = {
  last<T>(array: T[] | undefined): T | undefined {
    if (Array.isArray(array) && array.length > 0) {
      return array[array.length - 1];
    }
    return;
  },
  compileTemplate: (template: string, args: Record<string, any>): string =>
    template.replace(/\${(.*?)}/g, (_, g) => args[g]),
};

export default util;
