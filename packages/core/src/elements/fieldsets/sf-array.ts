import { customElement, signalBindings } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { SfBase } from '../sf-base';
import { JsonSchemaArray, ValueChangedEventDict } from '../../models';
import utils from '../../utils';
import { JsonPointer } from 'jsonpointerx';

@customElement('sf-array')
export class SfArray extends SfBase<JsonSchemaArray, any[]> {
  protected _logger = getLogger('aujsf:sf-array');

  public async bound(): Promise<void> {
    // TODO create collection mutation observer, dispatch value-changed
    this.value = this.value ?? [];

    // TODO on rebind, don't re-add listener
    // TODO below handled events should stop propagation
    // TODO remove listeners on dispose
    this._element.addEventListener('delete-array-item',
      (event: CustomEvent<number>) => { this.delete(event.detail); event.stopPropagation(); });
    this._element.addEventListener('move-array-item-up',
      (event: CustomEvent<number>) => { this.moveUp(event.detail); event.stopPropagation(); });
    this._element.addEventListener('move-array-item-down',
      (event: CustomEvent<number>) => { this.moveDown(event.detail); event.stopPropagation(); });
  }

  protected getTemplate(): string {
    return 'array';
  }

  public add(event: (MouseEvent & {target: Element}) | undefined = undefined): void {
    const length = this.value.length;
    const newLength = this.value.push(null);

    const detail: ValueChangedEventDict = {
      newValue: newLength, oldValue: length,
      pointer : new JsonPointer([...this.pointer.segments, 'length']),
    };

    this.dispatchEvent('value-changed', detail);
    
    if (event && event.target !== this._element) {
      this.dispatchEvent('add-array-item', detail, event.target);
    }
  }

  public delete(index: number, event: (MouseEvent & { target: Element }) | undefined = undefined): void {
    if (event && event.target !== this._element) {
      this.dispatchEvent('delete-array-item', index, event.target);
      return;
    }

    if (index in this.value) {
      const length = this.value.length;
      this.value.splice(index, 1);

      const detail: ValueChangedEventDict = {
        newValue: this.value.length, oldValue: length,
        pointer : new JsonPointer([...this.pointer.segments, 'length']),
      };

      this.dispatchEvent('value-changed', detail);
    }
  }

  public moveUp(index: number): void {
    if (index in this.value && index !== 0) {
      const array = [...this.value];

      utils.array.move(this.value, index, 'up');

      const detail: ValueChangedEventDict = {
        newValue: this.value, oldValue: array,
        pointer : this.pointer,
      };

      this.dispatchEvent('value-changed', detail);

      signalBindings('sfGetItemDefinition');
    }
  }

  public moveDown(index: number): void {
    if (index in this.value && index < this.value.length - 1) {
      const array = [...this.value];

      utils.array.move(this.value, index, 'down');

      const detail: ValueChangedEventDict = {
        newValue: this.value, oldValue: array,
        pointer : this.pointer,
      };

      this.dispatchEvent('value-changed', detail);

      signalBindings('sfGetItemDefinition');
    }
  }
}

