import { computedFrom, observable } from 'aurelia-framework';
import { UISchema } from '@aujsf/core';


export class Playground {

  @observable
  public schemaJson = JSON.stringify({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
    },
    required: ['name'],
  }, null, 2);

  @observable
  public uiSchemaJson = JSON.stringify(<UISchema>{
    'ui:title': 'Hello..',
  }, null, 2);

  public schema: any = {};

  public uiSchema: any = {};

  public model: any = undefined;

  @computedFrom('valueTrigger', 'model')
  public get modelJson(): string {
    try {
      return JSON.stringify(this.model ?? 'undefined', null, 2);
    }
    catch (error) {
      return JSON.stringify(error);
    }
  }

  public valueTrigger = 0;

  private _schemaJsonChangedHandle: any = 0;
  public schemaJsonChanged(newValue?: string): void {
    clearTimeout(this._schemaJsonChangedHandle);
    this._schemaJsonChangedHandle = setTimeout(() => {
      if (newValue) {
        this.schema = JSON.parse(newValue);
      }
    }, 300);
  }

  private _uiSchemaJsonChangedHandle: any = 0;
  public uiSchemaJsonChanged(newValue?: string): void {
    clearTimeout(this._uiSchemaJsonChangedHandle);
    this._uiSchemaJsonChangedHandle = setTimeout(() => {
      if (newValue) {
        this.uiSchema = JSON.parse(newValue);
      }
    }, 300);
  }
}
