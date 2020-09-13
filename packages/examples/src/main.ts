import 'core-js';
import { Aurelia, PLATFORM } from 'aurelia-framework';

import { IPluginOptions } from '@aujsf/core';
import { THEME } from '@aujsf/bootstrap-theme';
import 'jquery';
import 'bootstrap';

import { App } from './app';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@aujsf/core'), (options: IPluginOptions) => {
      options.defaultTheme = THEME;
      // options.hideErrors = true;
    });

  aurelia.use.developmentLogging('debug');

  aurelia.start().then(() => aurelia.setRoot(App));
}
