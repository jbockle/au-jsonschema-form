
export type Errors = string[];

export interface ErrorSchema {
  [key: string]: ErrorSchema | Errors | undefined;
  _errors_?: Errors;
}
