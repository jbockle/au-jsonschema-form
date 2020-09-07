import { FormTheme } from './models';

export interface IPluginOptions {
  defaultTheme?: FormTheme;
  hideErrors?: boolean;
}

export class PluginOptions implements IPluginOptions {
  public defaultTheme?: FormTheme;
  public hideErrors?: boolean;
}
