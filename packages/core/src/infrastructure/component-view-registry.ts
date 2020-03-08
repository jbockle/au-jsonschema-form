import { ComponentView } from '../domain/view';
import { ComponentViews } from '../domain/views';
import { AppLogger } from './app-logger';

export class ComponentViewRegistry {
  private _views: ComponentViews;

  private _logger = AppLogger.makeLogger('ComponentViewRegistry');

  public constructor(views: ComponentViews) {
    this._views = views;
  }

  public set(views: ComponentViews): void;
  public set(name: string, view: ComponentView): void;
  public set(nameOrViews: string | ComponentViews, view?: ComponentView): void {
    if (typeof nameOrViews === 'string' && view) {
      this._logger.debug('setting view:', nameOrViews, view);
      this._views[nameOrViews] = view;
    } else if (typeof nameOrViews === 'object') {
      this._logger.debug('setting views:', nameOrViews);
      this._views = nameOrViews;
    } else {
      throw new Error('invalid usage');
    }
  }

  public get(name: string): ComponentView {
    this._logger.debug(`fetching view`, name);
    if (name in this._views) {
      return this._views[name];
    }

    return this.getDefault(name);
  }

  private getDefault(name: string): ComponentView {
    const view = {
      markup: `<template><code>unknown view '${name}'</code></template>`,
    };

    return view;
  }
}
