import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { UISchema, JsonSchema } from '../domain';
import { inject } from 'aurelia-framework';
import { Constants } from '../constants';

export type FormChangedCallback = (args: { pointer: string; value: any; schema: JsonSchema<any>; uiSchema: UISchema }) => void | PromiseLike<void>;
export type Callback = () => void | PromiseLike<void>;

export const EVENT_NAMES = Object.freeze({
  validate: getEventName('validate'),
  valueChanged: getEventName('value-changed'),
  modelChanged: getEventName('model-changed'),
  exception: getEventName('exception'),
});

@inject(EventAggregator)
export class FormEvents {
  private _scopedEvents = new EventAggregator();

  public constructor(private _globalEvents: EventAggregator) { }

  public emit = {
    validate: (): void => {
      this._scopedEvents.publish(EVENT_NAMES.validate);
    },
    valueChanged: (pointer: string, value: any, schema: JsonSchema<any>, uiSchema: UISchema): void => {
      this._scopedEvents.publish(EVENT_NAMES.valueChanged, { pointer, value, schema, uiSchema });
    },
    modelChanged: (): void => {
      this._scopedEvents.publish(EVENT_NAMES.modelChanged);
    },
    exception: (error: Error, type?: string): void => {
      this._scopedEvents.publish(EVENT_NAMES.exception, { error, type });
      this._globalEvents.publish(EVENT_NAMES.exception, { error, type });
    },
  }

  public subscribe = {
    onValidate: (callback: Callback): Subscription =>
      this._scopedEvents.subscribe(EVENT_NAMES.validate, callback),
    onValueChanged: (callback: FormChangedCallback): Subscription =>
      this._scopedEvents.subscribe(EVENT_NAMES.valueChanged, callback),
    onModelChanged: (callback: Callback): Subscription =>
      this._scopedEvents.subscribe(EVENT_NAMES.modelChanged, callback),
    exception: (callback: Callback): Subscription =>
      this._scopedEvents.subscribe(EVENT_NAMES.exception, callback),
  }
}

function getEventName(name: string): string {
  return `${Constants.pluginName}/events/${name}`;
}
