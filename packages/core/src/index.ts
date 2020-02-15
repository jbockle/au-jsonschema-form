import { FrameworkConfiguration } from 'aurelia-framework';

import { AppLogger } from './infrastructure/app-logger';
import { FormElementViewRegistry } from './infrastructure/form-element-view-registry';
import { FieldViewRegistry } from './infrastructure/view-slot-registry';
import { SchemaFormPluginOptions } from './domain/schema-form-plugin-options';

import { SfString } from './elements/form/sf-string';
import { SfObject } from './elements/form/sf-object';
import { SfNumber } from './elements/form/sf-number';
import { SfBoolean } from './elements/form/sf-boolean';
import { SfMultiSchema } from './elements/form/sf-multi-schema';
import { SchemaForm } from './elements/schema-form';
import { SfErrors } from './elements/shared/sf-errors';
import { SfArray } from './elements/form/sf-array';
import { SfArrayItemToolbar } from './elements/shared/sf-array-item-toolbar';
import { SfViewSlot } from './elements/sf-view-slot';


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
  config.container.registerInstance(FieldViewRegistry, new FieldViewRegistry(options.fields));

  config.globalResources([
    SchemaForm,
    SfViewSlot,
    // form
    SfObject,
    SfArray,
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
export * from './infrastructure/form-element-view-registry';
