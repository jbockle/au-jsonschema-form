import util from '../src/util';

describe('utils', () => {
  describe('last', () => {

    // last
    it('grabs last item in an array', () => {
      const result = util.last([1, 2, 3])!;

      expect(result).toEqual(3);
    });

    it('is undefined if array is empty', () => {
      const result = util.last([]);

      expect(result).toEqual(undefined);
    });

    it('is undefined if not an array', () => {
      const result = util.last('' as any);

      expect(result).toEqual(undefined);
    });
  });

  describe('compileTemplate', () => {
    it('complies templated literal', () => {
      const args = { foo: 'hello', bar: 'world' };
      const template = '${foo} ${bar}.';
      const result = util.compileTemplate(template, args);

      expect(result).toEqual('hello world.');
    });
  });
});
