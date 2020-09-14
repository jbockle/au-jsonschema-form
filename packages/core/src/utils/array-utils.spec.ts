import { ArrayUtils } from './array-utils';

describe('array-utils', () => {
  it('gets last', () => {
    const array = ['foo', 'bar', 'baz'];
    expect(ArrayUtils.last(array)).toEqual('baz');
  });

  describe('moving array items', () => {
    it('moves item in array up', () => {
      const array = ['foo', 'bar', 'baz'];
      const currentIndex = array.indexOf('bar');

      ArrayUtils.move(array, currentIndex, 'up');

      expect(array).toEqual(['bar', 'foo', 'baz']);
    });

    it('moves item in array down', () => {
      const array = ['foo', 'bar', 'baz'];
      const currentIndex = array.indexOf('bar');

      ArrayUtils.move(array, currentIndex, 'down');

      expect(array).toEqual(['foo', 'baz', 'bar']);
    });
  });
});
