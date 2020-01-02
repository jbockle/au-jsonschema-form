
export type ErrorMessages = string[];

export interface ErrorSchema {
  [key: string]: ErrorSchema | ErrorMessages | undefined;
  __errors?: ErrorMessages;
}
