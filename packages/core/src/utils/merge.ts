interface MergeOptions {
  arrayStrategy: 'replace' | 'union';
}

const DEFAULT_MERGE_OPTIONS: MergeOptions = {
  arrayStrategy: 'replace',
};

export function merge<T>(target: any, source: any, options?: Partial<MergeOptions>): T {
  const mergeOptions = { ...DEFAULT_MERGE_OPTIONS, ...(options || {}) };

  for (const key of Object.keys(source)) {
    if (mergeOptions.arrayStrategy === 'union' && Array.isArray(source[key])) {
      source[key] = source[key].concat(target[key] ?? []);
    } else if (source[key] instanceof Object) {
      Object.assign(source[key], merge<any>((key in target && target[key]) || {}, source[key]));
    }
  }

  Object.assign(target || {}, source);
  return target;
}

export function mergeAll<T>(target: any, source: any[], options?: Partial<MergeOptions>): T {
  source.forEach(source => merge<T>(target, source, options));

  return target;
}
