import { SfThemeFunc, ComponentViews, ComponentSlotViews } from '@au-jsonschema-form/core';

import sfInput from './sf-input.html';
import sfRange from './sf-range.html';
import sfObject from './sf-object.html';
import sfCheckbox from './sf-boolean.html';
import sfErrors from './sf-errors.html';
import sfArrays from './sf-array.html';
import sfArrayItem from './sf-array-item.html';
import sfArrayItemToolbar from './sf-array-item-toolbar.html';
import sfSelect from './sf-select.html';
import sfRadio from './sf-radio.html';
import sfMultiSchema from './sf-multi-schema.html';

export const bootstrap4Views: ComponentViews = {
  'sf-input': {
    markup: sfInput,
  },
  'sf-range': {
    markup: sfRange,
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
  'sf-array-item': {
    markup: sfArrayItem,
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

export const bootstrap4SlotViews: ComponentSlotViews = {
  'sf-field': {
    markup: `<template><div class="form-group">\${slot}</div></template>`,
  },
};

export const bootstrap4Theme: SfThemeFunc = (options) => {
  options.views = bootstrap4Views;

  options.slotViews = bootstrap4SlotViews;
};

