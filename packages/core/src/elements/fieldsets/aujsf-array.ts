import { customElement, inject, BindingEngine, Disposable, Container } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaArray, ArrayKeyDefinition, JsonSchema } from '../../models';
import { FormTemplateRegistry, FormContext } from '../../services';
import utils from '../../utils';
import { ArrayViewProvider } from '../../services/providers/array-view-provider';

@inject(Element, Container, FormTemplateRegistry, FormContext, ArrayViewProvider, BindingSignaler, BindingEngine)
@customElement('aujsf-array')
export class AujsfArray extends AujsfBase<JsonSchemaArray, any[]> {
  protected _logger = getLogger('aujsf:sf-array');
  protected _observer?: Disposable;

  public bound(): void {
    this.value = this.value ?? [];
    this._observer = this.engine?.collectionObserver(this.value).subscribe(changeRecords => {
      this.valueChanged(this.value, changeRecords);
    });
    this.updateDefinitions();
  }

  public unbind(): void {
    this._observer?.dispose();
  }

  public add(): void {
    this.value.push(null);
    this.updateDefinitions();
  }

  public delete(index: number): void {
    if (index in this.value) {
      this.value.splice(index, 1);
      this.updateDefinitions();
    }
  }

  public moveUp(index: number): void {
    if (index in this.value && index !== 0) {
      utils.array.move(this.value, index, 'up');
      this.signal();
    }
  }

  public moveDown(index: number): void {
    if (index in this.value && index < this.value.length - 1) {
      utils.array.move(this.value, index, 'down');
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

