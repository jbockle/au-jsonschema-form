import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import Constants from '../constants';

export type ArrayEventCallback = (args?: any) => void;

export interface ArrayEventMap {
  spliced: ArrayEventCallback;
  reordered: ArrayEventCallback;
  remove: ArrayEventCallback;
  move: ArrayEventCallback;
}

export class ArrayEvents {
  private _scopedEvents = new EventAggregator();

  public emit(name: keyof ArrayEventMap, args?: Record<string, any>): void {
    this._scopedEvents.publish(getEventName(name), args);
  }

  public subscribe(name: keyof ArrayEventMap, callback: ArrayEventCallback): Subscription {
    return this._scopedEvents.subscribe(getEventName(name), callback);
  }
}

function getEventName(name: string): string {
  return `${Constants.pluginName}/array-events/${name}`;
}
