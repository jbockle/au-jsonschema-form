import { AuSfBase } from '../elements/au-sf-base';

export function bindParent<T extends Class<AuSfBase>>(ctor: T) {

  const previousBind: MaybePromiseFunc<void> = ctor.prototype.bind || function () { };

  return class extends ctor {
    public async bind(bindingContext: any, overrideContext: any) {
      await previousBind.call(this, bindingContext, overrideContext);
      this.parent = bindingContext;
    }
  };
}
