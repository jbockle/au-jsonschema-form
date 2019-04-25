import 'core-js/stable';
import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import { TemplateCache, Template } from '@au-jsonschema-form/core';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@au-jsonschema-form/core'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
  const cache: TemplateCache = aurelia.container.get(TemplateCache);
  cache.add(new Template(
    undefined, 'string',
    '<template><input type="text" value.bind="model"></template>',
    { defaultForSchemaType: true }));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
