
const util = {
  last<T>(array: T[] | undefined): T | undefined {
    if (Array.isArray(array) && array.length > 0) {
      return array[array.length - 1];
    }
    return;
  },
};

export default util;
