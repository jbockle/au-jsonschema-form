import { FormElementView } from '../domain/form-element-view';
import { FormElementViews } from '../domain/form-element-views';

export class FormElementViewRegistry {
  private _views: FormElementViews;

  public constructor(views: FormElementViews) {
    this._views = views;
  }

  public set(views: FormElementViews): void;
  public set(name: string, view: FormElementView): void;
  public set(nameOrViews: string | FormElementViews, view?: FormElementView): void {
    if (typeof nameOrViews === 'string' && view) {
      this._views[nameOrViews] = view;
    } else if (typeof nameOrViews === 'object') {
      this._views = nameOrViews;
    } else {
      throw new Error('invalid usage');
    }
  }

  public get(name: string): FormElementView | undefined {
    if (name in this._views) {
      return this._views[name];
    }

    return;
  }
}
