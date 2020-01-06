export function debounce(wait: number, immediate: boolean = false) {
  return function (_target: any, _propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    let timeout: any;
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): void {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const context = this;
      const later = function (): void {
        timeout = null;
        if (!immediate) originalMethod.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) originalMethod.apply(context, args);
    };

    return descriptor;
  };
};
