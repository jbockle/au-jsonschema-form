import { customElement, inject, PLATFORM, useView } from 'aurelia-framework';
import { FormTheme, JsonSchemaForm } from '@aujsf/core';

import { BS4_THEME } from './index';

/**
 * The base view model for <bs4-json-schema-form/>
 * @description implement your own bootstrap json schema custom element by inheriting from this
 */
export abstract class BootstrapJsonSchemaFormBase extends JsonSchemaForm {
  /**
   * override to add/customize bootstrap theme controls
   */
  protected getTheme(): FormTheme {
    return BS4_THEME;
  }
}

@inject(Element)
@useView(PLATFORM.moduleName('@aujsf/bootstrap-theme/bs4-json-schema-form.html'))
@customElement('bs4-json-schema-form')
export class BootstrapJsonSchemaForm extends BootstrapJsonSchemaFormBase { }
