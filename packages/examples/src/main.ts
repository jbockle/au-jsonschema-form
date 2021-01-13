import 'core-js';
import { Aurelia, PLATFORM } from 'aurelia-framework';

import 'jquery';
import 'bootstrap';

import { App } from './app';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@aujsf/core'))
    .plugin(PLATFORM.moduleName('@aujsf/bootstrap-theme'));

  aurelia.use.developmentLogging('debug');

  aurelia.start().then(() => aurelia.setRoot(App));
}
