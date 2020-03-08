import { inject, bindable, bindingMode, inlineView, computedFrom } from 'aurelia-framework';

import { SfFormComponentBase } from './sf-form-component-base';
import { FormEvents } from '../../infrastructure/form-events';
import { FormContext } from '../../infrastructure/form-context';
import { AppLogger } from '../../infrastructure/app-logger';
import COMPOSE_VIEW from '../sf-compose-view';

@inlineView(COMPOSE_VIEW)
@inject(FormEvents, FormContext)
export class SfString extends SfFormComponentBase {
  public constructor(
    events: FormEvents,
    context: FormContext,
  ) {
    super(events, context, AppLogger.makeLogger('SfString'));
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string | null | undefined;

  @computedFrom('definition')
  public get inputType(): string {
    if (this.definition.uiSchema['ui:inputType']) {
      return this.definition.uiSchema['ui:inputType'];
    }

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
    this.value = this.value ?? this.getDefaultValueFromSchema();
  }
}
