import 'core-js';
import { Aurelia, PLATFORM } from 'aurelia-framework';

import { THEME } from '@aujsf/bootstrap-theme';
import { IPluginOptions } from '@aujsf/core';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@aujsf/core'), (options: IPluginOptions) => options.defaultTheme = THEME);

  aurelia.use.developmentLogging('debug');

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
