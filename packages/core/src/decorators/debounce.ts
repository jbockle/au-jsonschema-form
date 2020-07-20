
export function debounce(timeout: number): Function {
  let timeoutRef: any;

  return function (
    _target: Function,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]): any {
      clearTimeout(timeoutRef);

      timeoutRef = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
    };
    return descriptor;
  };
}

