import { FormComponentDefinition, DefinitionType } from '../domain/form-component-definition';

export type ForDefinitionType = DefinitionType | DefinitionType[];

export abstract class ViewFinder {
  /**
   * a name for the finder, for debugging purposes
   */
  public abstract name: string;

  /**
   * one or more definition types this finder will be used against
   */
  public abstract forTypes: ForDefinitionType;

  /**
   * the order in which this finder should run, higher has priority
   * @default 10
   */
  public weight: number = 10;

  public abstract tryGetSlotViewName(definition: FormComponentDefinition): string | undefined;

  public abstract tryGetComponentViewName(definition: FormComponentDefinition): string | undefined;
}

export const ViewFinderSymbol = '__VIEW_FINDER__';
