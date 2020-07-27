import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaNumber } from '../../models/json-schema';

@customElement('aujsf-number')
export class AujsfNumber extends AujsfBase<JsonSchemaNumber, number> {
  protected _logger = getLogger('aujsf:sf-number');

  protected getTemplate(): string {
    return 'number-input';
  }
}
