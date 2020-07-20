
export class ArrayUtils {
  public static last<T>(array: T[]): T | undefined {
    return array.length > 0
      ? array[array.length - 1]
      : undefined;
  }

  public static move(array: any[], index: number, direction: 'up' | 'down'): void {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const itemValue = array.splice(index, 1);
    array.splice(newIndex, 0, ...itemValue);
  }
}
