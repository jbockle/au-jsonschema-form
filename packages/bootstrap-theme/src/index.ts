import { PLATFORM } from 'aurelia-framework';

import { FormTheme } from '@aujsf/core';

const theme: FormTheme = {
  'object': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-object.html'),
  'array': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-array.html'),
  'array-tabs': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-array-tabs.html'),
  'array-item': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-array-item.html'),
  'string-input': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-string-input.html'),
  'string-select': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-string-select.html'),
  'string-radio': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-string-radio.html'),
  'number-input': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-number-input.html'),
  'checkbox': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-checkbox.html'),
  'all-of': PLATFORM.moduleName('@aujsf/bootstrap-theme/sf-all-of.html'),
};

export const THEME = Object.freeze(theme);
