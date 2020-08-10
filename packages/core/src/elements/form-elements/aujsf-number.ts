import { customElement, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaNumber } from '../../models/json-schema';
import { FormContext, FormTemplateRegistry } from '../../services';
import { NumberViewProvider } from '../../services/providers/number-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, NumberViewProvider)
@customElement('aujsf-number')
export class AujsfNumber extends AujsfBase<JsonSchemaNumber, number> {
  protected _logger = getLogger('aujsf:sf-number');
}
