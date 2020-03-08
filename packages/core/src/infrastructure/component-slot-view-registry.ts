import { ComponentSlotView } from '../domain/view';
import { ComponentSlotViews } from '../domain/views';
import { inject } from 'aurelia-framework';
import { ComponentViewRegistry } from './component-view-registry';
import Constants from '../constants';

const SEARCH_STRING = '${slot}';

@inject(ComponentViewRegistry)
export class ComponentSlotViewRegistry {
  private _slots!: ComponentSlotViews;

  public constructor(slots: ComponentSlotViews) {
    this.set(slots);
    this.validateSlots(slots);
  }

  public set(views: ComponentSlotViews): void;
  public set(name: string, view: ComponentSlotView): void;
  public set(nameOrViews: string | ComponentSlotViews, view?: ComponentSlotView): void {
    if (typeof nameOrViews === 'string' && view) {
      this._slots[nameOrViews] = view;
    } else if (typeof nameOrViews === 'object') {
      this._slots = nameOrViews;
      this._slots['DEFAULT'] = this._slots['DEFAULT'] ?? Constants.defaultSlot;
    } else {
      throw new Error('invalid usage');
    }
  }

  public get(name?: string): ComponentSlotView {
    if (name && name in this._slots) {
      return this._slots[name];
    }

    return this._slots['DEFAULT'];
  }

  private validateSlots(views: ComponentSlotViews): void {
    for (const viewName in views) {
      this.validateSlot(viewName);
    }
  }

  private validateSlot(name: string): void {
    const view = this._slots[name];

    const firstOccurrence = view.markup.indexOf(SEARCH_STRING);
    const lastOccurrence = view.markup.lastIndexOf(SEARCH_STRING);

    if (firstOccurrence === -1 || firstOccurrence !== lastOccurrence) {
      const message = `The slot view '${name}' is invalid. A slot view must contain a single '${SEARCH_STRING}'.`;
      throw new Error(message);
    }
  }

  // private createNotFoundView(name: string): ComponentSlotView {
  //   return {
  //     markup: `<template><code>unknown view '${name}'</code></template>`,
  //   };
  // }
}
