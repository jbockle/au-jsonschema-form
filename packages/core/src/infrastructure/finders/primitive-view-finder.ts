import { ViewFinder, ForDefinitionType } from '../view-finder';
import { FormComponentDefinition } from '../../domain/form-component-definition';

export class PrimitiveViewFinder extends ViewFinder {
  public name = PrimitiveViewFinder.name;

  public weight = 1;

  public forTypes: ForDefinitionType = ['string', 'boolean', 'number'];

  public tryGetSlotViewName(_definition: FormComponentDefinition): string | undefined {
    return 'sf-field';
  }

  public tryGetComponentViewName(definition: FormComponentDefinition): string | undefined {
    let view: string | undefined;

    if (definition.type === 'string' && definition.schema.format) {
      view = this.getByFormat(definition);
    } else if (definition.schema.enum) {
      view = definition.schema.enum.length > 5
        ? 'sf-select'
        : 'sf-radio';
    } else if (definition.schema.readOnly) {
      view = 'sf-primitive-readonly';
    }

    switch (definition.type) {
      case 'number':
        if (this.isRange(definition)) {
          view = 'sf-range';
        }
        break;
      case 'boolean':
        view = 'sf-checkbox';
        break;
    }

    return view ?? 'sf-input';
  }

  private isRange(definition: FormComponentDefinition): boolean {
    return !!(definition.schema.minimum || definition.schema.exclusiveMinimum)
      && !!(definition.schema.maximum || definition.schema.exclusiveMaximum);
  }

  private getByFormat(definition: FormComponentDefinition): string | undefined {
    switch (definition.schema.format) {
      case 'date-time':
      case 'date':
      case 'time':
      case 'duration':
        return `sf-${definition.schema.format}`;
      default:
        return;
    }
  }
}
