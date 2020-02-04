import { valueConverter } from 'aurelia-framework';
import { FormElementViewModel } from '../domain';
import { Constants } from '../constants';

@valueConverter('isVisible')
export class IsVisible {
  public signals: string[] = [`${Constants.pluginName}/model-changed`];

  public toView(viewModel: FormElementViewModel): boolean {
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
