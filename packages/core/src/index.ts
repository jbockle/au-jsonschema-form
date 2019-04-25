import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/au-sf-string'),
  ]);
}

export * from './templating';
export * from './form-definition';
export * from './json-schema-definition';
