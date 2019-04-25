import { SchemaElement } from '../elements/schema-element';

export function bindParent<T extends Class<SchemaElement<any>>>(ctor: T) {

  const previousBind: MaybePromiseFunc<void> = ctor.prototype.bind || function () { };

  return class extends ctor {
    public parent: any;
    public async bind(bindingContext: any, overrideContext: any) {
      await previousBind.call(this, bindingContext, overrideContext);
      this.parent = bindingContext;
    }
  };
}
