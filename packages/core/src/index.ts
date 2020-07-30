import { FrameworkConfiguration } from 'aurelia-framework';

import { JsonSchemaForm } from './elements/json-schema-form';

import { AujsfObject } from './elements/fieldsets/aujsf-object';
import { AujsfSlot } from './elements/aujsf-slot';
import { AujsfArray } from './elements/fieldsets/aujsf-array';
import { AujsfArrayItem } from './elements/fieldsets/aujsf-array-item';

import { AujsfString } from './elements/form-elements/aujsf-string';
import { AujsfNumber } from './elements/form-elements/aujsf-number';
import { AujsfBoolean } from './elements/form-elements/aujsf-boolean';
import { AujsfAllOf } from './elements/combined/aujsf-all-of';
import { AujsfOneOf } from './elements/combined/aujsf-one-of';
import { AujsfHidden } from './elements/form-elements/aujsf-hidden';

import { AujsfSortDefinitions } from './converters/aujsf-sort-definitions';
import { AujsfValue } from './converters/aujsf-value';
import { AujsfJson } from './converters/aujsf-json';
import { AujsfItemTitle } from './converters/aujsf-item-title';

import { IPluginOptions, PluginOptions } from './plugin-options';

export function configure(framework: FrameworkConfiguration, configure?: (options: IPluginOptions) => void): void {
  const options = framework.container.get(PluginOptions);

  configure instanceof Function && configure(options);

  framework.globalResources([
    JsonSchemaForm,
    // fieldset
    AujsfSlot,
    AujsfObject,
    AujsfArray,
    AujsfArrayItem,
    // form elements
    AujsfHidden,
    AujsfString,
    AujsfNumber,
    AujsfBoolean,
    // combined schemas
    AujsfAllOf,
    AujsfOneOf,
    // converters
    AujsfSortDefinitions,
    AujsfItemTitle,
    AujsfValue,
    AujsfJson,
  ]);
}

export * from './models';
export * from './services';
export * from './plugin-options';
