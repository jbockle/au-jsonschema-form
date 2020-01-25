import { SfThemeFunc } from '@au-jsonschema-form/core';

import sfStringMarkup from './sf-string.html';
import sfObjectMarkup from './sf-object.html';
import sfBooleanMarkup from './sf-boolean.html';
import sfErrorsMarkup from './sf-errors.html';
import sfArraysMarkup from './sf-array.html';
import sfArrayItemToolbar from './sf-array-item-toolbar.html';
import sfStringSelectMarkup from './sf-string-select.html';
import sfStringRadioMarkup from './sf-string-radio.html';
import sfMultiSchemaMarkup from './sf-multi-schema.html';

export const vanillaTheme: SfThemeFunc = (options) => {
  options.views = {
    SfString: {
      markup: sfStringMarkup,
    },
    SfObject: {
      markup: sfObjectMarkup,
    },
    SfBoolean: {
      markup: sfBooleanMarkup,
    },
    SfNumber: {
      markup: sfStringMarkup,
    },
    SfErrors: {
      markup: sfErrorsMarkup,
    },
    SfArray: {
      markup: sfArraysMarkup,
    },
    SfStringSelect: {
      markup: sfStringSelectMarkup,
    },
    SfStringRadio: {
      markup: sfStringRadioMarkup,
    },
    SfArrayItemToolbar: {
      markup: sfArrayItemToolbar,
    },
    SfMultiSchema: {
      markup: sfMultiSchemaMarkup,
    },
  };

  options.fields = {};
};

