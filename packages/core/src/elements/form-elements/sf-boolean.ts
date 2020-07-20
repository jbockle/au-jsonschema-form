import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { SfBase } from '../sf-base';
import { JsonSchemaBoolean } from '../../models/json-schema';

@customElement('sf-boolean')
export class SfBoolean extends SfBase<JsonSchemaBoolean, boolean> {
  protected _logger = getLogger('aujsf:sf-boolean');

  protected getTemplate(): string {
    return 'checkbox';
  }
}
