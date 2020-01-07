import { inject, useView, PLATFORM, bindable, bindingMode } from 'aurelia-framework';

import { SfFormElementBase } from './sf-form-element-base';
import { FormElementViewSet } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry)
export class SfBoolean extends SfFormElementBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfBoolean));
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: boolean | null | undefined;

  public getViewSet(): FormElementViewSet {
    return {
      default: SfBoolean.name,
    };
  };

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValue() ?? false;
  }
}
