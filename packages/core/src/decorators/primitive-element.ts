import { useView, PLATFORM, customElement, Container } from 'aurelia-framework';
import { SchemaElement } from '../elements/schema-element';
import { PrimitiveType, SchemaType } from '../json-schema-definition';
import { modelState } from './model-state';
import { TemplateCache } from '../templating';

export function primitiveElement(name: string) {
  return function <T extends Class<SchemaElement<PrimitiveType>>>(ctor: T) {
    const templateCache: TemplateCache = Container.instance.get(TemplateCache);
    const previousBind: MaybePromiseFunc<void> = ctor.prototype.bind || async function () { };

    modelState(ctor);
    useView(PLATFORM.moduleName('../elements/base-view.html'))(ctor);
    customElement(name)(ctor);

    ctor.prototype.bind = async function (bindingContext: any, overrideContext: any) {
      const t: SchemaElement<PrimitiveType> = this;
      await previousBind.call(t, bindingContext, overrideContext);
      t.view = templateCache.find(getType(t.schema.type), t.form.template, t.proposeTemplate()).view;
    };
  };
}

function getType(type: SchemaType | SchemaType[]) {
  if (Array.isArray(type)) {
    return type[0];
  }
  return type;
}
