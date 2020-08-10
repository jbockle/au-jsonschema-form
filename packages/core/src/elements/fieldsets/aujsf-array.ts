import { customElement, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaArray, ValueChangedEventDict, ArrayKeyDefinition, JsonSchema } from '../../models';
import { FormTemplateRegistry, FormContext } from '../../services';
import utils from '../../utils';
import { ArrayViewProvider } from '../../services/providers/array-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, ArrayViewProvider)
@customElement('aujsf-array')
export class AujsfArray extends AujsfBase<JsonSchemaArray, any[]> {
  protected _logger = getLogger('aujsf:sf-array');

  // public definitionsComputeHandle = 0;

  // @computedFrom('definitionsComputeHandle')
  // public get definitions(): ArrayKeyDefinition[] {
  //   return utils.form.getItemDefinitions(this);
  // }

  public async bound(): Promise<void> {
    // TODO create collection mutation observer, dispatch value-changed
    this.value = this.value ?? [];
    this.updateDefinitions();
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

  public add(event: (MouseEvent & { target: Element }) | undefined = undefined): void {
    const length = this.value.length;
    const newLength = this.value.push(null);

    const detail: ValueChangedEventDict = {
      newValue: newLength, oldValue: length,
      pointer: new JsonPointer([...this.pointer.segments, 'length']),
    };

    this.dispatchEvent('value-changed', detail);

    if (event && event.target !== this._element) {
      this.dispatchEvent('add-array-item', detail, event.target);
    }

    this.updateDefinitions();
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
        pointer: new JsonPointer([...this.pointer.segments, 'length']),
      };

      this.dispatchEvent('value-changed', detail);
      this.updateDefinitions();
    }
  }

  public moveUp(index: number): void {
    if (index in this.value && index !== 0) {
      const array = [...this.value];

      utils.array.move(this.value, index, 'up');

      const detail: ValueChangedEventDict = {
        newValue: this.value, oldValue: array,
        pointer: this.pointer,
      };

      this.dispatchEvent('value-changed', detail);
    }
  }

  public moveDown(index: number): void {
    if (index in this.value && index < this.value.length - 1) {
      const array = [...this.value];

      utils.array.move(this.value, index, 'down');

      const detail: ValueChangedEventDict = {
        newValue: this.value, oldValue: array,
        pointer: this.pointer,
      };

      this.dispatchEvent('value-changed', detail);
    }
  }

  public definitions: ArrayKeyDefinition[] = [];

  private updateDefinitions(): void {
    const length = this.value?.length ?? 0;

    if (length === 0) {
      this.definitions = [];
      return;
    }

    if (this.definitions.length > length) {
      this.definitions.splice(length - 1, this.definitions.length - length);
    }

    for (let index = 0; index < (length); index++) {
      const definition = {
        key: index,
        schema: this.getItemJsonSchema(index, this.schema, this.context.schema),
        uiSchema: utils.form.getItemUiSchema(index, this.uiSchema),
        pointer: new JsonPointer([...this.pointer.segments, index.toString()]),
      };

      this.definitions[index] || this.definitions.push(definition);
    }
  }

  private getItemJsonSchema(index: number, schema: JsonSchemaArray, root: JsonSchema): JsonSchema {
    const itemSchema = utils.jsonSchema.getItemJsonSchema(index, schema, root);

    if (!itemSchema) {
      throw new Error('unable to determine item schema');
    }

    return itemSchema;
  }
}

