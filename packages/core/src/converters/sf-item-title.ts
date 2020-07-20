import utils from '../utils';
import { UISchema, ArrayKeyDefinition } from '../models';
import { valueConverter } from 'aurelia-framework';

@valueConverter('sfItemTitle')
export class SfItemTitle {
  public signals = ['value-changed'];
  
  public toView(uiSchema: UISchema, definition: ArrayKeyDefinition, rest: Record<string, any>): string | undefined {
    if (typeof uiSchema['ui:item-title'] === 'string') {
      return utils.common.fillTemplate(uiSchema['ui:item-title'], { ...definition, ...rest });
    }

    return `Item ${definition.key + 1}`;
  }
}
