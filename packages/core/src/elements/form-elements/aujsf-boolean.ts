import { customElement, inject, Container } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaBoolean } from '../../models/json-schema';

import { FormContext, FormTemplateRegistry } from '../../services';
import { BooleanViewProvider } from '../../services/providers/boolean-view-provider';

@inject(Element, Container, FormTemplateRegistry, FormContext, BooleanViewProvider)
@customElement('aujsf-boolean')
export class AujsfBoolean extends AujsfBase<JsonSchemaBoolean, boolean> {
  protected _logger = getLogger('aujsf:sf-boolean');
}
