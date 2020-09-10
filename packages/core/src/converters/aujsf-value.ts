import { valueConverter } from 'aurelia-framework';

type ValueType = 'string' | 'number' | 'date' | 'date-time' | 'time' | 'duration';

@valueConverter('aujsf_value')
export class AujsfValue {
  public toView(value: string, type: ValueType = 'string', toLocal: boolean = false): string {
    if (typeof value === 'string' && type === 'date-time' && toLocal) {
      return this.toDatetimeLocal(new Date(Date.parse(value)));
    }

    return value;
  }

  public fromView(value: string, type: ValueType = 'string'): number | string | undefined {
    if (typeof value === 'string') {

      switch (type) {
        case 'date-time':
          const ms = Date.parse(value);
          if (ms) {
            const date = new Date(ms);
            return date.toISOString();
          }
          break;
        case 'number':
          const parsed = parseFloat(value);
          return isNaN(parsed) ? undefined : parsed;
        default:
          return value || undefined;
      }

    }

    return undefined;
  }

  private toDatetimeLocal(date: Date): string {
    const ten = (i: number): string => {
      return (i < 10 ? '0' : '') + i;
    };
    const YYYY = date.getFullYear(),
      MM = ten(date.getMonth() + 1),
      DD = ten(date.getDate()),
      HH = ten(date.getHours()),
      II = ten(date.getMinutes()),
      SS = ten(date.getSeconds());

    return YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + II + ':' + SS;
  }
}
