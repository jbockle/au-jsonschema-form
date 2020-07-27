import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaString } from '../../models/json-schema';

@customElement('aujsf-string')
export class AujsfString extends AujsfBase<JsonSchemaString, string> {
  protected _logger = getLogger('aujsf:sf-string');

  protected getTemplate(): string {
    if (Array.isArray(this.schema.enum)) {
      return this.schema.enum.length > 5 ? 'string-select' : 'string-radio';
    }

    return 'string-input';
  }
}
