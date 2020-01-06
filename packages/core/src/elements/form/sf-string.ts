import { inject, useView, PLATFORM, bindable, bindingMode } from 'aurelia-framework';

import { SfFormElementBase } from './sf-form-element-base';
import { FormElementViewSet } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';
import { TypeCustomAttribute } from '../../attributes/type-custom-attribute';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry)
export class SfString extends SfFormElementBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfString));
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string | null | undefined;

  public viewSet: FormElementViewSet = {
    enum: 'SfStringSelect',
    default: SfString.name,
    format: {
      // date: 'SfStringDate',
    },
    dependencies: [TypeCustomAttribute],
  };

  public get inputType(): string {
    switch (this.definition.schema.format) {
      case 'date':
        return 'date';
      case 'time':
        return 'time';
      case 'date-time':
        return 'datetime-local';
      case 'email':
      case 'idn-email':
        return 'email';
      case 'uri-reference':
      case 'uri':
        return 'url';
      default:
        return 'text';
    }
  }

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValue();
  }
}
