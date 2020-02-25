
import { bindable, useShadowDOM, inject } from 'aurelia-framework';

import { vanillaViews, vanillaSlotViews } from '@au-jsonschema-form/theme-vanilla';
import {
  JsonSchema,
  UISchema,
  ComponentViewRegistry,
  ComponentSlotViewRegistry,
} from '@au-jsonschema-form/core';

@inject(ComponentViewRegistry, ComponentSlotViewRegistry)
@useShadowDOM({ mode: 'closed' })
export class VanillaTheme {
  public constructor(
    private _viewRegistry: ComponentViewRegistry,
    private _slotViewRegistry: ComponentSlotViewRegistry,
  ) { }

  @bindable
  public schema!: JsonSchema<any>;

  @bindable
  public uiSchema!: UISchema;

  @bindable
  public model: any;

  public bind(): void {
    this._viewRegistry.set(vanillaViews);
    this._slotViewRegistry.set(vanillaSlotViews);
  }
}
