import { FormTheme } from './models';

export interface IPluginOptions {
  defaultTheme?: FormTheme;
}

export class PluginOptions implements IPluginOptions {
  public defaultTheme?: FormTheme;
}
