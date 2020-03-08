import Ajv from 'ajv';
import { JsonPointer } from 'jsonpointerx';
import { inject } from 'aurelia-framework';

import { ErrorSchema, UISchema } from '../domain';
import { JsonPointerService } from './json-pointer-service';
import { ErrorMessages } from '../domain/error-messages';
import { AppLogger } from './app-logger';

const DEFAULT_ERROR_MESSAGES: ErrorMessages = {
  type: 'invalid value',
  oneOf: 'invalid value',
};

@inject(JsonPointerService)
export class ErrorSchemaService {
  private _logger = AppLogger.makeLogger('ErrorSchemaService');

  public constructor(private _pointers: JsonPointerService) { }

  public toErrorSchema(errors: Ajv.ErrorObject[], uiSchema: UISchema, errorMessages: ErrorMessages | undefined): ErrorSchema {
    if (!errors.length) {
      return {};
    }

    this._logger.debug('creating error schema', errors);

    errorMessages = Object.assign({}, DEFAULT_ERROR_MESSAGES, errorMessages);

    return errors.reduce<ErrorSchema>(this.getReducer(uiSchema, errorMessages), {});
  }

  private getReducer(uiSchema: UISchema, errorMessages: ErrorMessages): (errorSchema: ErrorSchema, error: Ajv.ErrorObject) => ErrorSchema {
    return (errorSchema: ErrorSchema, error: Ajv.ErrorObject): ErrorSchema => {
      const { dataPath, params } = error;

      const pointer = this._pointers.getPointer(dataPath);
      const segments = pointer.segments;

      let parent: ErrorSchema = errorSchema;

      // If the property is at the root (.level1) then toPath creates
      // an empty array element at the first index. Remove it.	
      if (segments.length > 0 && segments[0] === '') {
        segments.splice(0, 1);
      }

      for (const segment of segments.slice(0)) {
        this.defineSegment(segment, parent);
        parent = parent[segment] as ErrorSchema;
      }

      const customErrorMessages = this.getSegmentErrorMessagesMap(pointer, uiSchema, errorMessages);

      if ('missingProperty' in params) { // move this error as a child segment
        const segment = params['missingProperty'];
        this.defineSegment(segment, parent);
        this.addError(parent[segment] as ErrorSchema, customErrorMessages['missingProperty'] ?? 'Required');
      } else {
        const message = this.getErrorMessage(error, customErrorMessages);
        message && this.addError(parent, message);
      }

      return errorSchema;
    };
  }

  private getSegmentErrorMessagesMap(pointer: JsonPointer, uiSchema: UISchema, errorMessages: ErrorMessages): ErrorMessages {
    const uiSchemaErrorMessages: ErrorMessages = (pointer.get(uiSchema) ?? {})['ui:errorMessages'] ?? {};
    const segmentErrorMessages = Object.assign({}, errorMessages, uiSchemaErrorMessages);

    return segmentErrorMessages;
  }

  private getErrorMessage(error: Ajv.ErrorObject, errorMessages: ErrorMessages): string | null | undefined {
    if (error.keyword in errorMessages) {
      return errorMessages[error.keyword] === null ? 'invalid value' : errorMessages[error.keyword];
    }

    for (const param in error.params) {
      if (error.params.hasOwnProperty(param) && param in errorMessages) {
        return errorMessages[param] ?? 'invalid value';
      }
    }

    return error.message ?? 'invalid value';
  }

  private defineSegment(segment: string, parent: ErrorSchema): void {
    if (this.segmentIsUndefined(segment, parent)) {
      parent[segment] = {};
    }
  }

  private addError(parent: ErrorSchema, message: string | undefined): void {
    if (message) {
      if (!Array.isArray(parent._errors_)) {
        parent._errors_ = [];
      }
      if (parent._errors_.indexOf(message) === -1) {
        parent._errors_.push(message);
      }
    }
  }

  private segmentIsUndefined(segment: string, parent: ErrorSchema): boolean {
    return !(segment in parent);
  }
}

