import { bindable, inject, inlineView } from 'aurelia-framework';

import { ErrorSchema } from '../../domain';
import { SfSharedComponentBase } from './sf-shared-component-base';
import { AppLogger } from '../../infrastructure/app-logger';
import { ViewFinderService } from '../../infrastructure/view-finder-service';
import COMPOSE_VIEW from '../sf-compose-view';

@inlineView(COMPOSE_VIEW)
@inject(ViewFinderService)
export class SfErrors extends SfSharedComponentBase {
  public constructor(
    viewFinder: ViewFinderService,
  ) {
    super('sf-errors', viewFinder, AppLogger.makeLogger(SfErrors));
  }

  @bindable
  public errors!: ErrorSchema;
}
