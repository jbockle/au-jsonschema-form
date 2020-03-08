import { bindable, inject, inlineView } from 'aurelia-framework';

import { SfSharedComponentBase } from './sf-shared-component-base';
import { FormComponentDefinition } from '../../domain';
import { AppLogger } from '../../infrastructure/app-logger';
import { SfArray } from '../form/sf-array';
import { ViewFinderService } from '../../infrastructure/view-finder-service';
import COMPOSE_VIEW from '../sf-compose-view';
import { ArrayEvents, ArrayEventMap } from '../../infrastructure/array-events';

@inlineView(COMPOSE_VIEW)
@inject(ViewFinderService, ArrayEvents)
export class SfArrayItemToolbar extends SfSharedComponentBase {
  public constructor(
    viewFinder: ViewFinderService,
    public arrayEvents: ArrayEvents,
  ) {
    super('sf-array-item-toolbar', viewFinder, AppLogger.makeLogger('SfArrayItemToolbar'));

    this._subs = Object.keys(this.callbacks).map(eventName => {
      const eventId = eventName as keyof ArrayEventMap;
      const callback = this.callbacks[eventId]!;

      return this.arrayEvents.subscribe(
        eventId,
        callback.bind(this));
    });
  }
  @bindable
  public index!: number;

  @bindable
  public definition!: FormComponentDefinition;

  @bindable
  public parent!: SfArray;

  public reordable: boolean = false;

  public canMoveUp: boolean = false;

  public canMoveDown: boolean = false;

  public definitionChanged(): void {
    this.beforeInitialize();
  }

  public move(direction: 'up' | 'down'): void {
    this.arrayEvents.emit('move', { index: this.index, direction });
  }

  public remove(): void {
    this.arrayEvents.emit('remove', { index: this.index });
  }

  public beforeInitialize(): void {
    this.reordable = !Array.isArray(this.parent.definition.schema.items)
      && (this.parent.definition.uiSchema['ui:canReorder'] ?? true);
    this.canMoveUp = this.reordable && this.canReorder('up');
    this.canMoveDown = this.reordable && this.canReorder('down');
  }

  private canReorder(direction: 'up' | 'down'): boolean {
    const firstOrLast = direction === 'up'
      ? this.isFirst()
      : this.isLast();

    return !firstOrLast;
  }

  private isFirst(): boolean {
    return this.index === 0;
  }

  private isLast(): boolean {
    return this.parent.value.length - 1 === this.index;
  }

  private callbacks: Partial<ArrayEventMap> = {
    reordered: () => {
      this.beforeInitialize();
    },
    spliced: () => {
      this.beforeInitialize();
    },
  }
}
