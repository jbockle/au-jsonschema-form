import { SchemaElement } from '../elements/schema-element';

export function modelState<T extends Class<SchemaElement<any>>>(ctor: T) {

  const previousObservable: (value: any, old: any) => MaybePromise<void> = ctor.prototype.modelChanged || function (value: any, old: any) { };

  ctor.prototype.modelChanged = async function (value: any, old: any) {
    console.log('model changed x', value);
    await previousObservable.call(this, value, old);

    if (this.setModel instanceof Function) {
      this.setModel(value);
    }
  };
}
