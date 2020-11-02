import { FormTheme } from './models';

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

export interface IPluginOptions {
  // TODO move this to a separate hoc to allow customize theming
  /**
   * the form theme(s) to use, the order of theme
   */
  theme: FormTheme;

  // TODO inverse so default is to hide
  /**
   * indicates whether the UI should not show form rendering errors
   */
  hideErrors?: boolean;

  /**
   * @internal
   */
  assertValid(): void;
}

/**
 * @internal
 */
export class PluginOptions implements IPluginOptions {
  public theme!: FormTheme;
  public hideErrors?: boolean;

  public assertValid(): void {
    const errors: string[] = [];
    if (!this.theme || typeof this.theme !== 'object' || Array.isArray(this.theme)) {
      errors.push(`A theme object is required`);
    }
    else {
      errors.push(...this.getThemeValidationErrors());
    }

    if (errors.length > 0) {
      throw new Error(`One or more validation errors occurred @aujsf options:\n${errors.join('\n')}`);
    }
  }

  private getThemeValidationErrors(): string[] {
    const missingRequiredModules = REQUIRED_VIEWS
      .filter(view => !(view in this.theme));

    const invalidModule = Object.keys(this.theme)
      .filter(formModule => {
        const template = this.theme[formModule];
        return !template || typeof template !== 'string' || template.trim().length === 0;
      });

    return [
      ...missingRequiredModules.map(formModule => `'${formModule}' is missing`),
      ...invalidModule.map(formModule => `'${formModule}' is invalid`),
    ];
  }
}
