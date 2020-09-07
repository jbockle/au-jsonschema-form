import { FormTemplateRegistry } from '../services';
import { FormTheme, UISchema } from '../models';
import { CommonUtils } from './common-utils';
import { ArrayUtils } from './array-utils';

const REQUIRED_VIEWS = Object.keys(<FormTheme>{
  'array-tabs': null!,
  'number-input': null!,
  'string-input': null!,
  'string-radio': null!,
  'string-select': null!,
  'all-of': null!,
  'one-of': null!,
  'array-checkboxes': null!,
  'array-select': null!,
  'textarea': null!,
  'string-date-time': null!,
  'string-date': null!,
  'string-time': null!,
  array: null!,
  checkbox: null!,
  object: null!,
});

export class FormUtils {
  public static async useThemes(formTemplateRegistry: FormTemplateRegistry, ...themes: Partial<FormTheme>[]): Promise<void> {
    formTemplateRegistry.clear();

    for (const theme of themes) {
      const promises = Object.keys(theme)
        .map(name => formTemplateRegistry.add(name, theme[name]!));

      await Promise.all(promises);
    }
  }

  public static themeIsValid(formTemplateRegistry: FormTemplateRegistry): void {
    const views = REQUIRED_VIEWS
      .map(view => ({ view, isValid: formTemplateRegistry.has(view) }));

    if (views.some(o => !o.isValid)) {
      const missingViews = views.filter(o => !o.isValid).map(o => o.view).join(', ');
      throw new Error(`One or more required theme views are missing:${missingViews}`);
    }
  }

  public static getItemUiSchema(index: number, uiSchema: UISchema): UISchema {
    if ('ui:items' in uiSchema) {
      if (Array.isArray(uiSchema['ui:items'])) {
        if (index in uiSchema['ui:items']) {
          return CommonUtils.clone(uiSchema['ui:items'][index]);
        }

        return ArrayUtils.last(uiSchema['ui:items'])!;
      } else {
        return CommonUtils.clone(uiSchema['ui:items']!);
      }
    }

    return {};
  }
}
