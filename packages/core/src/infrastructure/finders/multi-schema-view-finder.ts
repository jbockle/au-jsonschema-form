import { ViewFinder, ForDefinitionType } from '../view-finder';
import { FormComponentDefinition } from '../../domain/form-component-definition';

export class MultiSchemaViewFinder extends ViewFinder {
  public name = MultiSchemaViewFinder.name;

  public weight = 1;

  public forTypes: ForDefinitionType = 'multi-schema';

  public tryGetSlotViewName(_definition: FormComponentDefinition): string | undefined {
    return;
  }

  public tryGetComponentViewName(definition: FormComponentDefinition): string | undefined {
    return `sf-${definition.type}`;
  }
}
