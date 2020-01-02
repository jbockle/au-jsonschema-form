import { FormElementView } from '../domain/form-element-view';
import { FormElementViews } from '../domain/form-element-views';

export class FormElementViewRegistry {
  private _views: FormElementViews;

  public constructor(views: FormElementViews) {
    this._views = views;
  }

  public set(name: string, view: FormElementView): void {
    this._views[name] = view;
  }

  public get(name: string): FormElementView | undefined {
    if (name in this._views) {
      return this._views[name];
    }

    return;
  }
}
