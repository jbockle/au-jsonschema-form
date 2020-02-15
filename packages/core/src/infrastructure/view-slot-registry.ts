import { ViewSlot } from '../domain/form-element-view';
import { FieldViews } from '../domain/form-element-views';
import { inject } from 'aurelia-framework';
import { FormElementViewRegistry } from './form-element-view-registry';

const DEFAULT_FIELD_VIEW: ViewSlot = {
  markup: '<template>${slot}</template>',
};

const SEARCH_STRING = '${slot}';

@inject(FormElementViewRegistry)
export class FieldViewRegistry {
  private _views: FieldViews;

  public constructor(views: FieldViews) {
    this._views = views;
    this.validateViews(views);
  }

  public set(name: string, view: ViewSlot): void {
    this._views[name] = view;
  }

  public get(name?: string): ViewSlot {
    if (name && name in this._views) {
      return this._views[name];
    } else if (name) {
      return this.createNotFoundView(name);
    }

    return DEFAULT_FIELD_VIEW;
  }

  // eslint-disable-next-line @typescript-eslint/member-naming
  private validateViews(views: FieldViews): void {
    for (const viewName in views) {
      this.validateView(viewName);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-naming
  private validateView(name: string): void {
    const view = this._views[name];

    const firstOccurrence = view.markup.indexOf(SEARCH_STRING);
    const lastOccurrence = view.markup.lastIndexOf(SEARCH_STRING);

    if (firstOccurrence === -1 || firstOccurrence !== lastOccurrence) {
      const message = `The field view '${name}' is invalid. A field view must contain a single '${SEARCH_STRING}'.`;
      throw new Error(message);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-naming
  private createNotFoundView(name: string): ViewSlot {
    return {
      markup: `<template><code>unknown view '${name}'</code></template>`,
    };
  }
}
