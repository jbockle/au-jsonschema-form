export function clone(obj: any): any {
  if (typeof obj == 'function') {
    return obj;
  }

  const result: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    const value = obj[key];

    const valueType = typeof value;
    if (Array.isArray(value)) {
      result[key] = clone(value);
    }
    else if (valueType === 'object') {
      if (value instanceof Date) {
        result[key] = new Date(value.getTime());
      }
      else if (value instanceof RegExp) {
        result[key] = RegExp(value.source, value.flags);
      }
      else {
        result[key] = clone(value);
      }
    }
    else {
      result[key] = value;
    }
  }

  return result;
}
