import { KeyDefinition } from '../models';
import { valueConverter } from 'aurelia-framework';

@valueConverter('aujsf_sortDefinitions')
export class AujsfSortDefinitions {
  public toView(definitions: KeyDefinition[]): KeyDefinition[] {
    return definitions.sort((a, b) => {
      const aOrder = a.uiSchema['ui:order'] ?? definitions.length;
      const bOrder = b.uiSchema['ui:order'] ?? definitions.length;

      return aOrder - bOrder;
    });
  }
}
