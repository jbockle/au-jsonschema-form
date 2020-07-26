import { KeyDefinition } from '../models';
import { valueConverter } from 'aurelia-framework';

@valueConverter('sfSortDefinitions')
export class SfSortDefinitions {
  public toView(definitions: KeyDefinition[]): KeyDefinition[] {
    return definitions.sort((a, b) => {
      const aOrder = a.uiSchema['ui:order'] ?? definitions.length;
      const bOrder = b.uiSchema['ui:order'] ?? definitions.length;

      return aOrder - bOrder;
    });
  }
}
