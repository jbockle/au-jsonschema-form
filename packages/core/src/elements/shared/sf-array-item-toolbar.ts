import { inlineView, bindable, inject } from 'aurelia-framework';

import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { FormContext } from '../../infrastructure/form-context';
import { SfSharedElementBase } from './sf-shared-element-base';
import { FormElementDefinition } from '../../domain';
import { AppLogger } from '../../infrastructure/app-logger';
import { SfArray } from '../form/sf-array';
import { AureliaRepeaterOverrideContext } from '../../domain/aurelia-typings';
import SF_VIEW from '../sf-view';

@inlineView(SF_VIEW)
@inject(FormContext, FormElementViewRegistry)
export class SfArrayItemToolbar extends SfSharedElementBase {
  public constructor(
    context: FormContext,
    viewService: FormElementViewRegistry) {
    super(SfArrayItemToolbar.name, context, viewService, AppLogger.makeLogger(SfArrayItemToolbar));
  }

  @bindable
  public moveUp!: Function;

  @bindable
  public moveDown!: Function;

  @bindable
  public remove!: Function;

  @bindable
  public definition!: FormElementDefinition;

  public overrideContext!: AureliaRepeaterOverrideContext<SfArray>;
}
