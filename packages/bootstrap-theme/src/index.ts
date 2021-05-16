import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

import { FormTheme } from '@aujsf/core';

const theme: FormTheme = {
  'object': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-object.html'),
  'array': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-array.html'),
  'array-select': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-array-select.html'),
  'array-checkboxes': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-array-checkboxes.html'),
  'array-tabs': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-array-tabs.html'),
  'textarea': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-textarea.html'),
  'string-input': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-string-input.html'),
  'string-date-time': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-string-date-time.html'),
  'string-date': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-string-date.html'),
  'string-time': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-string-time.html'),
  'string-select': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-string-select.html'),
  'string-radio': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-string-radio.html'),
  'number-input': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-number-input.html'),
  'number-range': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-number-range.html'),
  'switch': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-switch.html'),
  'checkbox': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-checkbox.html'),
  'all-of': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-all-of.html'),
  'one-of': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-one-of.html'),
  'conditional': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-conditional.html'),
  'boolean-select': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-boolean-select.html'),
  'boolean-radio': PLATFORM.moduleName('@aujsf/bootstrap-theme/aujsf-bs-boolean-radio.html'),
};

export const BS4_THEME = Object.freeze(theme);

export function configure(framework: FrameworkConfiguration): void {
  framework.globalResources([
    PLATFORM.moduleName('@aujsf/bootstrap-theme/bs4-json-schema-form'),
  ]);
}

export * from './bootstrap-json-schema-form-base';
