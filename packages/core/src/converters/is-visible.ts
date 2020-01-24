import { valueConverter } from 'aurelia-framework';
import { FormElementViewModel } from '../domain';

@valueConverter('isVisible')
export class IsVisible {
  public signals: string[] = ['@au-jsonschema-form/model-changed'];

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
