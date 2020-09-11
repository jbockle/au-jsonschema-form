import { bindable } from 'aurelia-framework';
import { NavModel } from 'aurelia-router';

export class Navigation {
  @bindable
  public routes?: NavModel[]
}
