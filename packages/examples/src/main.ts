import 'core-js';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { App } from './app';

import { THEME } from '@aujsf/bootstrap-theme';
import { IPluginOptions } from '@aujsf/core';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@aujsf/core'), (options: IPluginOptions) => options.defaultTheme = THEME);

  aurelia.use.developmentLogging('debug');

  aurelia.start().then(() => aurelia.setRoot(App));
}
