export function debounce(wait: number) {
  return function (_target: any, _propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    let timeout: any;
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): void {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const context = this;
      const later = function (): void {
        timeout = null;
        originalMethod.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };

    return descriptor;
  };
};
