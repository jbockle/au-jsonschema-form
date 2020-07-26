import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

// import { JsonSchemaForm } from './elements/json-schema-form';

import { SfObject } from './elements/fieldsets/sf-object';
import { SfSlot } from './elements/sf-slot';
import { SfArray } from './elements/fieldsets/sf-array';
import { SfArrayItem } from './elements/fieldsets/sf-array-item';

import { SfString } from './elements/form-elements/sf-string';
import { SfNumber } from './elements/form-elements/sf-number';
import { SfBoolean } from './elements/form-elements/sf-boolean';

import { SfGetItemDefinition } from './converters/sf-get-item-definition';
import { SfValue } from './converters/sf-value';
import { SfJson } from './converters/sf-json';
import { SfItemTitle } from './converters/sf-item-title';
import { IPluginOptions, PluginOptions } from './plugin-options';
import { SfAllOf } from './elements/combined/sf-all-of';

export function configure(framework: FrameworkConfiguration, configure?: (options: IPluginOptions) => void): void {
  const options = framework.container.get(PluginOptions);

  configure instanceof Function && configure(options);

  framework.globalResources([
    PLATFORM.moduleName('@aujsf/core/elements/json-schema-form'),
    // fieldset
    SfSlot,
    SfObject,
    SfArray,
    SfArrayItem,
    // form elements
    SfString,
    SfNumber,
    SfBoolean,
    // combined schemas
    SfAllOf,
    // converters
    SfGetItemDefinition,
    SfItemTitle,
    SfValue,
    SfJson,
  ]);
}

export * from './models';
export * from './services';
export * from './plugin-options';
