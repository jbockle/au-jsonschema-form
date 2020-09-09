import { View } from 'aurelia-framework';

export abstract class ViewBase {
  private _view?: View;

  public get view(): View | undefined {
    return this._view;
  }

  public set view(view: View | undefined) {
    this._view?.detached();
    this._view?.unbind();
    this._view = view;
  }

  public detached(): void {
    this.view = undefined;
  }
}
