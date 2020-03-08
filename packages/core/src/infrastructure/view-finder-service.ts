import lodash from 'lodash';
import { inject, All } from 'aurelia-framework';

import { ViewFinder } from './view-finder';
import { FormComponentDefinition, DefinitionType } from '../domain/form-component-definition';
import { ComponentSlotView, ComponentView } from '../domain/view';
import { ComponentViewRegistry } from './component-view-registry';
import { ComponentSlotViewRegistry } from './component-slot-view-registry';
import { AppLogger } from './app-logger';

@inject(
  ComponentViewRegistry,
  ComponentSlotViewRegistry,
  All.of(ViewFinder),
)
export class ViewFinderService {
  private _logger = AppLogger.makeLogger('ViewFinderService');

  public constructor(
    public componentViewRegistry: ComponentViewRegistry,
    public slowViewRegistry: ComponentSlotViewRegistry,
    finders: ViewFinder[],
  ) {
    this._logger.debug('creating', finders);
    finders.forEach(finder => {
      const viewTypes = Array.isArray(finder.forTypes) ? finder.forTypes : [finder.forTypes];
      viewTypes.forEach(viewType => {
        if (!this._finders.has(viewType)) {
          this._finders.set(viewType, []);
        }

        this._finders.get(viewType)!.push(finder);
      });
    });

    this.sortFinders();
  }

  private _finders: Map<DefinitionType, ViewFinder[]> = new Map();

  public getSlotView(definition: FormComponentDefinition): ComponentSlotView {
    const name = this.getSlotViewName(definition);

    return this.slowViewRegistry.get(name);
  }

  public getFormComponentView(definition: FormComponentDefinition): ComponentView {
    const name = this.getFormComponentViewName(definition);

    return this.componentViewRegistry.get(name);
  }

  public getSharedComponentView(name: string): ComponentView {
    return this.componentViewRegistry.get(name);
  };

  private getSlotViewName(definition: FormComponentDefinition): string {
    let viewName: string | undefined;

    if (definition.uiSchema['ui:slotView']) {
      return definition.uiSchema['ui:slotView'];
    }

    if (this._finders.has(definition.type)) {
      this._finders.get(definition.type)!.some(finder => {
        viewName = finder.tryGetSlotViewName(definition);
        return viewName !== undefined;
      });
    }

    return viewName ?? 'DEFAULT';
  }

  private getFormComponentViewName(definition: FormComponentDefinition): string {
    if (definition.uiSchema['ui:view']) {
      return definition.uiSchema['ui:view'];
    }

    let viewName: string | undefined;

    if (this._finders.has(definition.type)) {

      this._finders.get(definition.type)!.some(finder => {
        viewName = finder.tryGetComponentViewName(definition);
        return viewName !== undefined;
      });
    }

    return viewName ?? 'DEFAULT';
  }

  private sortFinders(): void {
    const keyIterator = this._finders.keys();

    let next = keyIterator.next();

    while (!next.done) {
      next = keyIterator.next();

      const finders = this._finders.get(next.value)!;

      this._finders.set(next.value, lodash.orderBy(finders, 'weight', 'desc'));
    }
  }
}
