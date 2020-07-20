import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { SfBase } from '../sf-base';
import { JsonSchemaString } from '../../models/json-schema';

@customElement('sf-string')
export class SfString extends SfBase<JsonSchemaString, string> {
  protected _logger = getLogger('aujsf:sf-string');

  protected getTemplate(): string {
    if (Array.isArray(this.schema.enum)) {
      return this.schema.enum.length > 5 ? 'string-select' : 'string-radio';
    }

    return 'string-input';
  }
}
