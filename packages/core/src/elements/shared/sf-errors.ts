import { inlineView, bindable, inject } from 'aurelia-framework';

import { ErrorSchema } from '../../domain';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { FormContext } from '../../infrastructure/form-context';
import { SfSharedElementBase } from './sf-shared-element-base';
import { AppLogger } from '../../infrastructure/app-logger';
import SF_VIEW from '../sf-view';

@inlineView(SF_VIEW)
@inject(FormContext, FormElementViewRegistry)
export class SfErrors extends SfSharedElementBase {
  public constructor(
    context: FormContext,
    viewService: FormElementViewRegistry) {
    super(SfErrors.name, context, viewService, AppLogger.makeLogger(SfErrors));
  }

  @bindable
  public errors!: ErrorSchema;
}
