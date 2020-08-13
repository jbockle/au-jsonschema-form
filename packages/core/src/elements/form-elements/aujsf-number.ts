import { customElement, inject, computedFrom } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaNumber } from '../../models/json-schema';
import { FormContext, FormTemplateRegistry } from '../../services';
import { NumberViewProvider } from '../../services/providers/number-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, NumberViewProvider)
@customElement('aujsf-number')
export class AujsfNumber extends AujsfBase<JsonSchemaNumber, number> {
  protected _logger = getLogger('aujsf:sf-number');

  @computedFrom('schema')
  public get minimum(): number {
    if (typeof this.schema.minimum === 'number') {
      return this.schema.minimum;
    }

    if (typeof this.schema.exclusiveMinimum === 'number') {
      return this.schema.exclusiveMinimum + 1;
    }

    return null!;
  }

  @computedFrom('schema')
  public get maximum(): number {
    if (typeof this.schema.maximum === 'number') {
      return this.schema.maximum;
    }

    if (typeof this.schema.exclusiveMaximum === 'number') {
      return this.schema.exclusiveMaximum - 1;
    }

    return null!;
  }

  public async bound(): Promise<void> {
    this.value = this.value ?? this.minimum;
  }
}
