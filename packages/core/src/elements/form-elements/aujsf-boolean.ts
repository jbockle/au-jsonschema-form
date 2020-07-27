import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaBoolean } from '../../models/json-schema';

@customElement('aujsf-boolean')
export class AujsfBoolean extends AujsfBase<JsonSchemaBoolean, boolean> {
  protected _logger = getLogger('aujsf:sf-boolean');

  protected getTemplate(): string {
    return 'checkbox';
  }
}
