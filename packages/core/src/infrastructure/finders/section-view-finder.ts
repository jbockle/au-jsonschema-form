import { ViewFinder, ForDefinitionType } from '../view-finder';
import { FormComponentDefinition } from '../../domain/form-component-definition';

export class SectionViewFinder extends ViewFinder {
  public name = SectionViewFinder.name;

  public weight = 1;

  public forTypes: ForDefinitionType = ['object', 'array'];

  public tryGetSlotViewName(definition: FormComponentDefinition): string | undefined {
    return `sf-${definition.type}`;
  }

  public tryGetComponentViewName(definition: FormComponentDefinition): string | undefined {
    return `sf-${definition.type}`;
  }
}
