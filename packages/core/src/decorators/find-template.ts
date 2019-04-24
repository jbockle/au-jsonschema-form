import { ViewStrategy, InlineViewStrategy } from 'aurelia-framework';
import { AuSfBase } from '../elements/au-sf-base';

function defaultBind() {
  // empty
}

export function findTemplate<T extends Class<AuSfBase>>(constructor: T) {
  const previousBind = constructor.prototype.bind || defaultBind;

  return class extends constructor {
    public view: ViewStrategy;
    public bind(bindingContext: any, overrideContext: any) {
      previousBind.call(this, bindingContext, overrideContext);
      this.view = new InlineViewStrategy('<template>hello world!!${test}</template>');
    }
  };
}
