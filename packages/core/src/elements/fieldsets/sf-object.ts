import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { SfBase } from '../sf-base';
import { JsonSchemaObject, JsonSchema, UISchema, ObjectKeyDefinition } from '../../models';
import { JsonPointer } from 'jsonpointerx';
import utils from '../../utils';

@customElement('sf-object')
export class SfObject extends SfBase<JsonSchemaObject> {
  protected _logger = getLogger('aujsf:sf-object');

  public definitions: ObjectKeyDefinition[] = [];

  public async bound(): Promise<void> {
    this.value = this.value ?? {};
    this.definitions = this.getKeys()
      .map(key => {
        try {
          const propertyUiSchema = this.getPropertyUiSchema(key);
          return {
            key,
            uiSchema: propertyUiSchema,
            schema  : utils.common.clone(this.getPropertySchema(key, propertyUiSchema)),
            pointer : new JsonPointer([...this.pointer.segments, key]),
            required: (this.schema.required ?? []).indexOf(key) !== -1,
          } as ObjectKeyDefinition;
        } catch (error) {
          this._logger.error('error parsing key', key, error);
        }
      })
      .filter(utils.common.notNullOrUndefined);
  }

  protected getTemplate(): string {
    return 'object';
  }

  public getKeys(): string[] {
    return Object.keys(Object.assign(
      {},
      this.schema.properties ?? {},
      this.value ?? {}));
  }

  public getPropertySchema(property: string, propUiSchema: UISchema): JsonSchema {
    if (propUiSchema['ui:type']) {
      return { type: propUiSchema['ui:type'] };
    }

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
      throw new Error(`unable to determine property schema: 'additionalProperties' as a boolean is not supported. consider applying uiSchema['ui:type']`);
    } else if (this.schema.additionalProperties) {
      return this.schema.additionalProperties;
    }

    throw new Error(`unable to determine schema type`);
  }

  public getPropertyUiSchema(property: string): UISchema {
    return property in this.uiSchema
      ? utils.common.clone(this.uiSchema[property])
      : {};
  }
}

