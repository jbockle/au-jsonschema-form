import { customElement, inject } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaArray, ValueChangedEventDict, ArrayKeyDefinition, JsonSchema } from '../../models';
import { FormTemplateRegistry, FormContext } from '../../services';
import utils from '../../utils';
import { ArrayViewProvider } from '../../services/providers/array-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, ArrayViewProvider, BindingSignaler)
@customElement('aujsf-array')
export class AujsfArray extends AujsfBase<JsonSchemaArray, any[]> {
  protected _logger = getLogger('aujsf:sf-array');

  public async bound(): Promise<void> {
    // TODO create collection mutation observer, dispatch value-changed
    this.value = this.value ?? [];
    this.updateDefinitions();
  }

  public add(): void {
    const length = this.value.length;
    const newLength = this.value.push(null);

    const detail: ValueChangedEventDict = {
      newValue: newLength, oldValue: length,
      pointer: new JsonPointer([...this.pointer.segments, 'length']),
    };

    this.dispatchEvent('value-changed', detail);

    this.updateDefinitions();
  }

  public delete(index: number): void {
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
      this.signal();
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
      this.signal();
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
      if (this.definitions[index].key !== definition.key) {
        this.definitions.splice(index, 1, definition);
      }
    }
  }

  private getItemJsonSchema(index: number, schema: JsonSchemaArray, root: JsonSchema): JsonSchema {
    const itemSchema = utils.jsonSchema.getItemJsonSchema(index, schema, root);

    if (!itemSchema) {
      throw new Error('unable to determine item schema');
    }

    return itemSchema;
  }

  private signal(): void {
    this.signaler?.signal(this.id);
  }
}

