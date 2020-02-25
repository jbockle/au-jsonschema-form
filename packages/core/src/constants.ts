import { ComponentSlotView, ComponentView } from './domain';

interface PluginConstants {
  pluginName: string;
  defaultSlot: ComponentSlotView;
  defaultComponentView: ComponentView;
}

export const Constants = Object.freeze({
  pluginName: '@au-jsonschema-form',
  defaultSlot: {
    markup: '<template>${slot}</template>',
  },
  defaultComponentView: {
    markup: `<template><code>unknown view '\${name}'</code></template>`,
  },
} as PluginConstants);
