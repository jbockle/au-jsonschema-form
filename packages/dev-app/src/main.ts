import 'core-js';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { App } from './app';
import { vanillaTheme } from '@au-jsonschema-form/theme-vanilla';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@au-jsonschema-form/core'), vanillaTheme);

  aurelia.use.developmentLogging('debug');

  aurelia.start().then(() => aurelia.setRoot(App));
}
