import { FrameworkConfiguration } from 'aurelia-framework';
import { FormElementViews } from './domain/form-element-views';

import { FormElementViewRegistry } from './infrastructure/form-element-view-registry';
import { SfString } from './elements/form/sf-string';
import { SfObject } from './elements/form/sf-object';
import { SfNumber } from './elements/form/sf-number';
import { SfBoolean } from './elements/form/sf-boolean';
import { SfMultiSchema } from './elements/form/sf-multi-schema';
import { SchemaForm } from './elements/schema-form';
import { AppLogger } from './infrastructure/app-logger';

export interface SchemaFormPluginOptions {
  views: FormElementViews;
}

const DEFAULT_OPTIONS: Partial<SchemaFormPluginOptions> = {};
const logger = AppLogger.makeLogger('configure');
logger.debug('plugin initializing');

export function configure(config: FrameworkConfiguration, callback?: (options: SchemaFormPluginOptions) => void): void {
  logger.debug('configuring...');
  if (!(callback instanceof Function)) {
    throw new Error(`au-jsonschema-form requires options during plugin registration`);
  }

  const options: SchemaFormPluginOptions = Object.assign({}, DEFAULT_OPTIONS) as any;
  logger.debug('options', options);
  callback(options);
  validateOptions(options);

  config.container.registerInstance(FormElementViewRegistry, new FormElementViewRegistry(options.views));

  config.globalResources([
    SchemaForm,
    SfObject,
    SfString,
    SfNumber,
    SfBoolean,
    SfMultiSchema,
  ]);

  logger.debug('configured');
}

function validateOptions(options: Partial<SchemaFormPluginOptions>): void {
  const errors: string[] = [];

  if (!('views' in options)) {
    errors.push(`the property 'views' is required`);
  }

  if (errors.length) {
    errors.unshift('au-jsonschema-form callback configuration>one or more errors occurred:');

    throw new Error(errors.join(`\n\t`));
  }
}

export * from './domain';
