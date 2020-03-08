import { ComponentSlotView } from './domain';

export default class Constants {
  public static readonly pluginName = '@au-jsonschema-form';

  public static defaultSlot: ComponentSlotView = {
    markup: '<template>${slot}</template>',
  }
};
