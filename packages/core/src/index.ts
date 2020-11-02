import { FrameworkConfiguration } from 'aurelia-framework';

import { JsonSchemaForm } from './elements/json-schema-form';

import { AujsfObject } from './elements/fieldsets/aujsf-object';
import { AujsfSlot } from './elements/aujsf-slot';
import { AujsfArray } from './elements/fieldsets/aujsf-array';

import { AujsfString } from './elements/form-elements/aujsf-string';
import { AujsfNumber } from './elements/form-elements/aujsf-number';
import { AujsfBoolean } from './elements/form-elements/aujsf-boolean';
import { AujsfAllOf } from './elements/combined/aujsf-all-of';
import { AujsfOneOf } from './elements/combined/aujsf-one-of';
import { AujsfHidden } from './elements/form-elements/aujsf-hidden';
import { AujsfConditional } from './elements/form-elements/aujsf-conditional';

import { AujsfSortDefinitions } from './converters/aujsf-sort-definitions';
import { AujsfValue } from './converters/aujsf-value';
import { AujsfItemTitle } from './converters/aujsf-item-title';

import { IPluginOptions, PluginOptions } from './plugin-options';
import { FormTemplateRegistry } from './services';

export async function configure(framework: FrameworkConfiguration, configure?: (options: IPluginOptions) => void): Promise<void> {
  const options = framework.container.get(PluginOptions);

  configure instanceof Function && configure(options);

  options.assertValid();

  const registry = framework.container.get(FormTemplateRegistry);

  for (const template in options.theme) {
    await registry.add(template, options.theme[template]);
  }

  framework.globalResources([
    JsonSchemaForm,
    // fieldset
    AujsfSlot,
    AujsfObject,
    AujsfArray,
    // form elements
    AujsfHidden,
    AujsfString,
    AujsfNumber,
    AujsfBoolean,
    AujsfConditional,
    // combined schemas
    AujsfAllOf,
    AujsfOneOf,
    // converters
    AujsfSortDefinitions,
    AujsfItemTitle,
    AujsfValue,
  ]);
}

export * from './models';
export * from './services';
export * from './plugin-options';
