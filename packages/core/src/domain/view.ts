export type ResourceDependencies = Array<string | Function | Record<string, any>>;

interface ComponentViewBase {
  markup: string;
  dependencies?: ResourceDependencies;
}

export type ComponentState = 'waiting' | 'ready';

export type ComponentView = ComponentViewBase

export type ComponentSlotView = ComponentViewBase;
