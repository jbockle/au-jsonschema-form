import { JsonSchemaFormat } from './json-schema';
import { ViewStrategy } from 'aurelia-framework';

export type ResourceDependencies = Array<string | Function | Record<string, any>>;

interface ViewStrategyArgs {
  markup: string;
  dependencies?: ResourceDependencies;
}

export type FormElementView = ViewStrategyArgs

export type ViewSlot = ViewStrategyArgs;

export interface FormElementViewSet {
  default: string;
  anyOf?: string;
  oneOf?: string;
  enum?: string;
  patternProperties?: string;
  format?: Partial<Record<JsonSchemaFormat, string>>;
  dependencies?: ResourceDependencies;
}

export interface ViewMeta {
  viewStrategy: ViewStrategy;
  view: FormElementView;
}
