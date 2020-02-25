import { SfThemeFunc, ComponentViews, ComponentSlotViews } from '@au-jsonschema-form/core';

import sfInput from './sf-input.html';
import sfObject from './sf-object.html';
import sfCheckbox from './sf-boolean.html';
import sfErrors from './sf-errors.html';
import sfArrays from './sf-array.html';
import sfArrayItemToolbar from './sf-array-item-toolbar.html';
import sfSelect from './sf-select.html';
import sfRadio from './sf-radio.html';
import sfMultiSchema from './sf-multi-schema.html';

export const vanillaViews: ComponentViews = {
  'sf-input': {
    markup: sfInput,
  },
  'sf-object': {
    markup: sfObject,
  },
  'sf-checkbox': {
    markup: sfCheckbox,
  },
  'sf-errors': {
    markup: sfErrors,
  },
  'sf-array': {
    markup: sfArrays,
  },
  'sf-select': {
    markup: sfSelect,
  },
  'sf-radio': {
    markup: sfRadio,
  },
  'sf-array-item-toolbar': {
    markup: sfArrayItemToolbar,
  },
  'sf-multi-schema': {
    markup: sfMultiSchema,
  },
};

export const vanillaSlotViews: ComponentSlotViews = {
};

export const vanillaTheme: SfThemeFunc = (options) => {
  options.views = vanillaViews;

  options.slotViews = vanillaSlotViews;
};

