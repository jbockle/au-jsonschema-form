import { inject, useView, PLATFORM, observable } from 'aurelia-framework';
import { SfBase } from './sf-base';
import { FormElementViewSet } from '../../domain';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../infrastructure/form-element-view-registry';
import { AppLogger } from '../../infrastructure/app-logger';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/form/sf-view.html'))
@inject(FormEvents, FormContext)
export class SfBoolean extends SfBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
    viewService: FormElementViewRegistry,
  ) {
    super(events, context, viewService, AppLogger.makeLogger(SfBoolean));
  }

  @observable
  public value: boolean | null | undefined;

  public viewSet: FormElementViewSet = {
    default: SfBoolean.name,
  };

  public getDefaultValue(): boolean {
    return super.getDefaultValue() ?? false;
  }

  public updateValue(): void {
    this._logger.debug('updating value');
    this.value = this.jsonPointer.get(this.context.model) ?? this.getDefaultValue();
  }

  public valueChanged = super.defaultValueChanged.bind(this);
}
