import { customElement, inject, BindingEngine, Disposable, Container } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';
import { getLogger } from 'aurelia-logging';
import { JsonPointer } from 'jsonpointerx';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaArray, ArrayKeyDefinition, JsonSchema, UISchema } from '../../models';
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
    this.initDefinitions();
  }

  public unbind(): void {
    this._observer?.dispose();
  }

  public add(): void;
  public add(value: any): void;
  public add(value: any = undefined): void {
    const newItemValue = value ?? this.context.schemaDefaults?.getArrayItemDefaults(this.value.length, this.schema) ?? null;
    this.definitions.push(this.getIndexDefinition(this.definitions.length));
    this.value.push(newItemValue);
  }

  public delete(index: number): void {
    if (index in this.value) {
      this.definitions.splice(index, 1);
      this.value.splice(index, 1);
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

  private initDefinitions(): void {
    const length = this.value?.length ?? 0;

    if (length === 0) {
      this.definitions = [];
      return;
    }

    if (this.definitions.length > length) {
      this.definitions.splice(length - 1, this.definitions.length - length);
    }

    for (let index = 0; index < (length); index++) {
      const definition = this.getIndexDefinition(index);

      this.definitions[index] || this.definitions.push(definition);
      if (this.definitions[index].key !== definition.key) {
        this.definitions.splice(index, 1, definition);
      }
    }
  }

  private getIndexDefinition(index: number): ArrayKeyDefinition {
    const schema = this.getItemJsonSchema(index, this.schema, this.context.schema!);
    const uiSchema = this.getItemUiSchema(index, this.uiSchema, schema);

    return {
      key: index,
      schema,
      uiSchema,
      pointer: new JsonPointer([...this.pointer.segments, index.toString()]),
    };
  }

  private getItemJsonSchema(index: number, schema: JsonSchemaArray, root: JsonSchema): JsonSchema {
    const itemSchema = utils.jsonSchema.getItemJsonSchema(index, schema, root);

    if (!itemSchema) {
      throw new Error('unable to determine item schema');
    }

    return itemSchema;
  }

  private getItemUiSchema(index: number, uiSchema: UISchema, schema: JsonSchema): UISchema {
    if ('ui:items' in uiSchema) {
      if (Array.isArray(uiSchema['ui:items'])) {
        if (index in uiSchema['ui:items']) {
          return utils.common.clone(uiSchema['ui:items'][index]);
        }

        return utils.array.last(uiSchema['ui:items'])!;
      } else {
        return utils.common.clone(uiSchema['ui:items']!);
      }
    }

    return schema['x-ui-schema'] ?? {};
  }

  private signal(): void {
    this.signaler?.signal(this.id);
  }
}

