import { ErrorObject } from 'ajv';
import { computedFrom } from 'aurelia-framework';

export { ErrorObject };

export interface ValidationResult {
  valid: boolean,
  errors: ErrorObject[],
  errorSchema: ErrorSchema
}

type ErrorSchemaIndex = ErrorSchema | ErrorObject[] | string | string[] | undefined | Function | boolean | Symbol;

const IS_ERROR_SCHEMA = Symbol('is-error-schema');

export interface ErrorSchema {
  [key: string]: ErrorSchemaIndex;
  ['es:error-objects']: ErrorObject[];
}

export class ErrorSchema {
  public [IS_ERROR_SCHEMA] = true;
  public ['es:key']?: string;
  public ['es:error-objects']: ErrorObject[] = [];

  private constructor(thiskey?: string) {
    this['es:key'] = thiskey ?? 'ROOT';
  }

  @computedFrom('es:error-objects')
  public get ['es:hasErrors'](): boolean {
    return this['es:error-objects'].length > 0;
  }

  public ['es:getErrorMessages'](): string[] {
    return this['es:error-objects'].map(error => error.message!)
      .filter((message, index, array) => !!message && array.indexOf(message) === index);
  }

  public ['es:hasChildErrors'](): boolean {
    const keys = Object.getOwnPropertyNames(this);
    return keys
      .filter(isNotErrorSchemaProp)
      .some(key => {
        const keyValue = this[key];
        return typeof keyValue === 'object'
          && isErrorSchema(keyValue)
          && (keyValue['es:hasErrors'] || keyValue['es:hasChildErrors']());
      });
  }

  public static create(thisKey?: string): ErrorSchema {
    const proxy = new Proxy(new ErrorSchema(thisKey), {
      get(target, prop, _receiver): ErrorSchemaIndex {
        if (prop === 'toJSON') {
          return (): any => target;
        }
        if (prop === '__observers__') {
          return Reflect.get(target, prop);
        }

        prop = typeof prop === 'number' ? prop.toString() : prop; // because json pointer uses string for props, ensure indexing by number works
        if (typeof prop === 'string' && !Reflect.has(target, prop)) {
          Reflect.set(target, prop, ErrorSchema.create(prop));
        }

        return Reflect.get(target, prop);
      },
      getOwnPropertyDescriptor(_target, _prop): PropertyDescriptor | undefined {
        return {
          enumerable: true,
          configurable: true,
        };
      },
      ownKeys(target): any {
        return Reflect.ownKeys(target);
      },
    });



    return proxy;
  }
}

function isErrorSchema(obj: any): obj is ErrorSchema {
  return !!obj[IS_ERROR_SCHEMA];
}

function isErrorSchemaProp(prop: string | symbol | number): boolean {
  return typeof prop === 'string' && prop.substring(0, 2) !== 'es:';
}

function isNotErrorSchemaProp(prop: string): boolean {
  return !isErrorSchemaProp(prop);
}
