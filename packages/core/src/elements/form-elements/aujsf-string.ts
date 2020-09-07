import { customElement, inject, Container } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaString } from '../../models/json-schema';
import { StringViewProvider } from '../../services/providers/string-view-provider';
import { FormTemplateRegistry, FormContext } from '../../services';

@customElement('aujsf-string')
@inject(Element, Container, FormTemplateRegistry, FormContext, StringViewProvider)
export class AujsfString extends AujsfBase<JsonSchemaString, string> {
  protected _logger = getLogger('aujsf:sf-string');
}
