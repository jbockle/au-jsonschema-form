import { getLogger, Logger } from 'aurelia-logging';
import Constants from '../constants';

export class AppLogger {
  private constructor(private _logger: Logger) { }

  public static makeLogger(name: string): AppLogger {
    return new AppLogger(getLogger(`${Constants.pluginName}::${name}`));
  }

  public debug(message: string, ...args: any[]): void {
    this._logger.debug(message, ...args);
  }

  public info(message: string, ...args: any[]): void {
    this._logger.info(message, ...args);
  }

  public warn(message: string, ...args: any[]): void {
    this._logger.warn(message, ...args);
  }

  public error(message: string, ...args: any[]): void {
    this._logger.error(message, ...args);
  }
}
