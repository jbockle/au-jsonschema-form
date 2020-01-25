import { valueConverter } from 'aurelia-framework';
import { AppLogger } from '../infrastructure/app-logger';

@valueConverter('processType')
export class ProcessType {
  private _logger = AppLogger.makeLogger(ProcessType.name);

  public fromView(val: any, type: string): string | undefined {
    this._logger.debug('input value', { val });

    if (typeof val === 'string' && val === '') {
      val = undefined;
    }

    if (type === 'number' && val) {
      val = parseFloat(val) || undefined;
    }

    this._logger.debug('from view', { val });
    return val;
  }
}
