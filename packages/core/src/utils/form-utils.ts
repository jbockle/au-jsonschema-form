import { FormTemplateRegistry } from '../services';
import { FormTheme } from '../models';

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
  'conditional': null!,
  'array': null!,
  'checkbox': null!,
  'object': null!,
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
}
