import { ProcessType } from 'src/converters/process-type';

describe('processType', () => {
  let sut: ProcessType;
  beforeEach(() => {
    sut = new ProcessType();
  });
  describe('string type', () => {
    it('should return a string value', () => {
      const result = sut.fromView('foo', 'string');

      expect(result).toBe('foo');
    });
    it('should return undefined value when value is empty', () => {
      const result = sut.fromView('', 'string');

      expect(result).toBeUndefined();
    });
  });
  describe('number type', () => {
    it('should return a number value', () => {
      const result = sut.fromView('1', 'number');

      expect(result).toBe(1);
    });
    it('should return a number value from falsy number', () => {
      const result = sut.fromView('0', 'number');

      expect(result).toBe(0);
    });
    it('should return undefined value when value is empty', () => {
      const result = sut.fromView('', 'number');

      expect(result).toBeUndefined();
    });
  });
});
