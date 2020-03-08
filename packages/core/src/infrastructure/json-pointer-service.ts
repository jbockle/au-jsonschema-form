import { JsonPointer } from 'jsonpointerx';
import { AppLogger } from './app-logger';

export class JsonPointerService {
  private _logger = AppLogger.makeLogger('JsonPointerService');

  public cache = new Map<string, JsonPointer>();

  public getValue(pointer: string, model: any): any {
    this._logger.debug(`${JsonPointerService.name}: getValue`, pointer, model);
    return this.getPointer(pointer).get(model);
  }

  public setValue(pointer: string, model: any, value: any): void {
    this._logger.debug(`${JsonPointerService.name}: setValue`, pointer, model, value);
    this.getPointer(pointer).set(model, value);
  }

  public getPointerFromSegments(segments: string[]): JsonPointer {
    const pointer = new JsonPointer(segments);
    return this.getPointer(pointer.toString());
  }

  public getPointer(pointer: string): JsonPointer {
    if (!this.cache.has(pointer)) {
      this.cache.set(pointer, JsonPointer.compile(pointer));
    }

    return this.cache.get(pointer)!;
  }
}
