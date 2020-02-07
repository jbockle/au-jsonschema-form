import { debounce } from 'src/decorators/debounce';

describe('debounce', () => {
  it('waits debounce timeframe', (d) => {
    class Component {
      public constructor(private _done: any) { }
      @debounce(500)
      public foo(): void {
        this._done();
      }
    }

    const startTime = Date.now();
    let endTime: number = 0;
    function done(): void {
      endTime = Date.now();
      expect(endTime - startTime).toBeGreaterThanOrEqual(500);
      d();
    }
    const component = new Component(done);

    component.foo();
  });
});
