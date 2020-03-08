import { valueConverter } from 'aurelia-framework';
import { FormComponentViewModel } from '../domain';
import Constants from '../constants';

@valueConverter('isVisible')
export class IsVisible {
  public signals: string[] = [`${Constants.pluginName}/model-changed`];

  public toView(viewModel: FormComponentViewModel): boolean {
    const uiHidden = viewModel?.definition.uiSchema['ui:hidden'];

    if (uiHidden && typeof uiHidden === 'boolean') {
      return !uiHidden;
    }

    if (uiHidden instanceof Function) {
      return !uiHidden(viewModel);
    }

    return true;
  }
}
