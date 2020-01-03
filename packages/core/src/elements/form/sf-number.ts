import { inject, useView, PLATFORM, observable } from 'aurelia-framework';
import { SfBase } from './sf-base';
import { FormElementViewSet } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/form/sf-view.html'))
@inject(FormEvents, FormContext, FormElementViewRegistry)
export class SfNumber extends SfBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfNumber));
  }

  @observable
  public value: number | null | undefined;

  public viewSet: FormElementViewSet = {
    default: SfNumber.name,
  };

  public inputType = 'number';

  public valueChanged = (): void => {
    switch (typeof this.value) {
      case 'number':
        super.defaultValueChanged.call(this);
        break;
      case 'string':
        this.value = parseFloat(this.value) || null;
    }
  }

  public updateValue(): void {
    this._logger.debug('updating value');
    this.value = this.jsonPointer.get(this.context.model) ?? this.getDefaultValue();
  }
}
