import { customElement, inject, PLATFORM, useView } from 'aurelia-framework';

import { BootstrapJsonSchemaFormBase } from './bootstrap-json-schema-form-base';

@inject(Element)
@useView(PLATFORM.moduleName('@aujsf/bootstrap-theme/bs4-json-schema-form.html'))
@customElement('bs4-json-schema-form')
export class BootstrapJsonSchemaForm extends BootstrapJsonSchemaFormBase { }
