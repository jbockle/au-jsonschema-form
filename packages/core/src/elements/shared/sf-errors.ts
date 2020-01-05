import { useView, PLATFORM, bindable, inject } from 'aurelia-framework';

import { ErrorSchema } from '../../domain';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { FormContext } from '../../infrastructure/form-context';
import { SfSharedElementBase } from './sf-shared-element-base';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/sf-view.html'))
@inject(FormContext, FormElementViewRegistry)
export class SfErrors extends SfSharedElementBase {
  public constructor(
    context: FormContext,
    viewService: FormElementViewRegistry) {
    super(SfErrors.name, context, viewService);
  }

  @bindable
  public errors!: ErrorSchema;
}
