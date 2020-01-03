import { FormElementViews } from '@au-jsonschema-form/core';
import sfStringMarkup from './sf-string.html';
import sfObjectMarkup from './sf-object.html';
import sfBooleanMarkup from './sf-boolean.html';

export const theme: FormElementViews = {
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
};
