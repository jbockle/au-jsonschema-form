import { inject, useView, PLATFORM, observable } from 'aurelia-framework';
import { SfBase } from './sf-base';
import { FormElementViewSet } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/form/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry)
export class SfString extends SfBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfString));
  }

  @observable
  public value: string | null | undefined;

  public viewSet: FormElementViewSet = {
    enum: 'SfStringSelect',
    default: SfString.name,
    format: {
      // date: 'SfStringDate',
    },
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

  public updateValue(): void {
    this._logger.debug('updating value');
    this.value = this.jsonPointer.get(this.context.model) ?? this.getDefaultValue();
  }

  public valueChanged = super.defaultValueChanged.bind(this);
}
