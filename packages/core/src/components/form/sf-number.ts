import { inject, bindable, bindingMode, inlineView } from 'aurelia-framework';

import { SfFormComponentBase } from './sf-form-component-base';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { AppLogger } from '../../infrastructure/app-logger';
import COMPOSE_VIEW from '../sf-compose-view';

@inlineView(COMPOSE_VIEW)
@inject(FormEvents, FormContext)
export class SfNumber extends SfFormComponentBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
  ) {
    super(events, context, AppLogger.makeLogger(SfNumber));
  }

  @bindable({ defaultBindindMode: bindingMode.twoWay })
  public value: number | null | undefined;

  public inputType = 'number';

  public resolveValue(): void {
    this._logger.debug('resolving value');
    this.value = this.value ?? this.getDefaultValueFromSchema();
  }
}
