import { FrameworkConfiguration } from 'aurelia-framework';

import { AppLogger } from './infrastructure/app-logger';
import { ComponentViewRegistry } from './infrastructure/component-view-registry';
import { ComponentSlotViewRegistry } from './infrastructure/component-slot-view-registry';
import { SchemaFormPluginOptions } from './domain/schema-form-plugin-options';

import { SfString } from './components/form/sf-string';
import { SfObject } from './components/form/sf-object';
import { SfNumber } from './components/form/sf-number';
import { SfBoolean } from './components/form/sf-boolean';
import { SfMultiSchema } from './components/form/sf-multi-schema';
import { SchemaForm } from './components/schema-form';
import { SfErrors } from './components/shared/sf-errors';
import { SfArray } from './components/form/sf-array';
import { SfArrayItemToolbar } from './components/shared/sf-array-item-toolbar';
import { SfSlot } from './components/sf-slot';
import { registerDefaultFinders } from './infrastructure/finders';
import { SfArrayItem } from './components/form/sf-array-item';


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

  registerDefaultFinders(config.container);
  config.container.registerInstance(ComponentViewRegistry, new ComponentViewRegistry(options.views));
  config.container.registerInstance(ComponentSlotViewRegistry, new ComponentSlotViewRegistry(options.slotViews));

  config.globalResources([
    SchemaForm,
    SfSlot,
    // form
    SfObject,
    SfArray,
    SfArrayItem,
    SfArrayItemToolbar,
    SfString,
    SfNumber,
    SfBoolean,
    SfMultiSchema,
    // shared
    SfErrors,
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
export * from './infrastructure/component-view-registry';
export * from './infrastructure/component-slot-view-registry';
