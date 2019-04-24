import { FormDefinition, FormElement } from './base';
/**
 * the emmet-like element that wraps additional
 * emmet-like elements and/or form items
 * @example "div#my_div.class.class-2": []
 */
export interface EmmetLikeDefinition extends FormElement {
  template: 'emmet';
  emmet: string;
  children?: FormDefinition;
}
