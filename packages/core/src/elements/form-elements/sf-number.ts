import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { SfBase } from '../sf-base';
import { JsonSchemaNumber } from '../../models/json-schema';

@customElement('sf-number')
export class SfNumber extends SfBase<JsonSchemaNumber, number> {
  protected _logger = getLogger('aujsf:sf-number');

  protected getTemplate(): string {
    return 'number-input';
  }
}
