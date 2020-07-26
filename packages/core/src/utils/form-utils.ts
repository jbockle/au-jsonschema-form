import { FormTemplateRegistry } from '../services';
import { FormTheme } from '../models';

export class FormUtils {
  private static readonly nulltheme: FormTheme = {
    'array-tabs': null!,
    'array-item': null!,
    'number-input': null!,
    'string-input': null!,
    'string-radio': null!,
    'string-select': null!,
    'all-of': null!,
    array: null!,
    checkbox: null!,
    object: null!,
  }

  public static async useThemes(formTemplateRegistry: FormTemplateRegistry, ...themes: Partial<FormTheme>[]): Promise<void> {
    for (const theme of themes) {
      const promises = Object.keys(theme)
        .map(name => formTemplateRegistry.add(name, theme[name]!));

      await Promise.all(promises);
    }
  }

  public static themeIsValid(formTemplateRegistry: FormTemplateRegistry): void {
    const views = Object.keys(this.nulltheme)
      .map(view => ({ view, isValid: formTemplateRegistry.has(view) }));

    if (views.some(o => !o.isValid)) {
      const missingViews = views.filter(o => !o.isValid).map(o => o.view).join(', ');
      throw new Error(`One or more required theme views are missing:${missingViews}`);
    }
  }
}
