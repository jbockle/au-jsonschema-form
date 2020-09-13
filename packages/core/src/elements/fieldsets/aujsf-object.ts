import { customElement, inject, computedFrom, observable, Container } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaObject, JsonSchema, UISchema, ObjectKeyDefinition } from '../../models';
import { JsonPointer } from 'jsonpointerx';
import utils from '../../utils';
import { FormContext, FormTemplateRegistry } from '../../services';
import { ObjectViewProvider } from '../../services/providers/object-view-provider';

@inject(Element, Container, FormTemplateRegistry, FormContext, ObjectViewProvider)
@customElement('aujsf-object')
export class AujsfObject extends AujsfBase<JsonSchemaObject> {
  protected _logger = getLogger('aujsf:sf-object');

  @observable
  public newPropertyKey?: string;

  @computedFrom()
  public get supportsAdditional(): boolean {
    return !this.readonly && !!this.schema.additionalProperties || !!this.schema.patternProperties;
  }

  public definitions: ObjectKeyDefinition[] = [];

  public bound(): void {
    this.value = this.value ?? {};
    this.definitions = this.getKeys()
      .map(key => {
        try {
          return this.getPropertyDefinition(key);
        } catch (error) {
          this._logger.error('error parsing key', key, error);
        }
      })
      .filter(utils.common.notNullOrUndefined);
  }

  public add(): void {
    if (this.newPropertyKey && !this.definitions.some(def => def.key === this.newPropertyKey)) {
      this.definitions.push(this.getPropertyDefinition(this.newPropertyKey));
    }

    this.newPropertyKey = undefined;
  }

  public onKeyDown(event: KeyboardEvent): boolean {
    if (event.key.toLowerCase() === 'enter') {
      return false;
    }

    return true;
  }

  public getKeys(): string[] {
    return Object.keys(Object.assign(
      {},
      this.schema.properties ?? {},
      this.value ?? {}));
  }

  public getPropertyDefinition(key: string): ObjectKeyDefinition {
    const schema = utils.common.clone(this.getPropertySchema(key));
    const propertyUiSchema = this.getPropertyUiSchema(key, schema);

    return {
      key,
      uiSchema: propertyUiSchema,
      schema,
      pointer: new JsonPointer([...this.pointer.segments, key]),
      required: (this.schema.required ?? []).indexOf(key) !== -1,
    };
  }

  public getPropertySchema(property: string): JsonSchema {
    if (this.schema.properties) {
      if (property in this.schema.properties) {
        return this.schema.properties[property];
      }
    }

    if (this.schema.patternProperties) {
      for (const pattern in this.schema.patternProperties) {
        if (new RegExp(pattern).test(property)) {
          return this.schema.patternProperties[pattern];
        }
      }
    }

    if (typeof this.schema.additionalProperties === 'boolean') {
      // todo support ui:type
      throw new Error(`unable to determine property schema: 'additionalProperties' as a boolean is not supported. consider applying uiSchema['ui:type']`);
    } else if (this.schema.additionalProperties) {
      return this.schema.additionalProperties;
    }

    throw new Error(`unable to determine schema type`);
  }

  public getPropertyUiSchema(property: string, schema: JsonSchema): UISchema {
    return property in this.uiSchema
      ? utils.common.clone(this.uiSchema[property])
      : schema['x-ui-schema'] ?? {};
  }
}

