import { bindable, inject, inlineView } from 'aurelia-framework';

import { SfSharedComponentBase } from './sf-shared-component-base';
import { FormComponentDefinition } from '../../domain';
import { AppLogger } from '../../infrastructure/app-logger';
import { SfArray } from '../form/sf-array';
import { AureliaRepeaterOverrideContext } from '../../domain/aurelia-typings';
import { ViewFinderService } from '../../infrastructure/view-finder-service';
import COMPOSE_VIEW from '../sf-compose-view';

@inlineView(COMPOSE_VIEW)
@inject(ViewFinderService)
export class SfArrayItemToolbar extends SfSharedComponentBase {
  public constructor(
    viewFinder: ViewFinderService,
  ) {
    super('sf-array-item-toolbar', viewFinder, AppLogger.makeLogger(SfArrayItemToolbar));
  }

  @bindable
  public moveUp!: Function;

  @bindable
  public moveDown!: Function;

  @bindable
  public remove!: Function;

  @bindable
  public definition!: FormComponentDefinition;

  public overrideContext!: AureliaRepeaterOverrideContext<SfArray>;
}
