import Ajv from 'ajv';
import lodash from 'lodash';
import { ErrorSchema } from '../../../domain';

export function toErrorSchema(errors: Ajv.ErrorObject[]): ErrorSchema {
  if (!errors.length) {
    return {};
  }

  return errors.reduce<ErrorSchema>(reduceErrorSchema, {});
}

function reduceErrorSchema(errorSchema: ErrorSchema, error: Ajv.ErrorObject): ErrorSchema {
  const { dataPath, message, params } = error;
  const path = lodash.toPath(dataPath);
  let parent: ErrorSchema = errorSchema;

  // If the property is at the root (.level1) then toPath creates
  // an empty array element at the first index. Remove it.
  if (path.length > 0 && path[0] === '') {
    path.splice(0, 1);
  }

  for (const segment of path.slice(0)) {
    defineSegment(segment, parent);
    parent = parent[segment] as ErrorSchema;
  }

  if ('missingProperty' in params) {
    const segment = params['missingProperty'];
    defineSegment(segment, parent);
    addError(parent[segment] as ErrorSchema, 'Required');
  } else {
    addError(parent, message);
  }

  return errorSchema;
}

function defineSegment(segment: string, parent: ErrorSchema): void {
  if (segmentIsUndefined(segment, parent)) {
    parent[segment] = {};
  }
}

function addError(parent: ErrorSchema, message: string | undefined): void {
  if (Array.isArray(parent.__errors)) {
    if (message) {
      parent.__errors = parent.__errors.concat(message);
    }
  }
  else {
    if (message) {
      parent.__errors = [message];
    }
  }
}

function segmentIsUndefined(segment: string, parent: ErrorSchema): boolean {
  return !(segment in parent);
}
