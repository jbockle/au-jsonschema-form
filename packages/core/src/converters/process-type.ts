import { valueConverter } from 'aurelia-framework';
import { AppLogger } from '../infrastructure/app-logger';
import { DefinitionType } from '../domain';

@valueConverter('processType')
export class ProcessType {
  private _logger = AppLogger.makeLogger(ProcessType);

  public fromView(val: any, type: DefinitionType): any {
    this._logger.debug('input value', { val });

    if (val === '') {
      val = undefined;
    }

    if (type === 'number' && val !== undefined) {
      val = parseFloat(val) ?? undefined;
    }

    this._logger.debug('from view', { val });
    return val;
  }
}
