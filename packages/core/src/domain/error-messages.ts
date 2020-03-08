
/**
 * Adds a custom error message for a specific ajv keyword/error parameter
 * if `null`, the value is overridden to 'invalid value'
 * if `undefined`, the error is not displayed
 * @see https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
 * @see https://github.com/epoberezkin/ajv#error-parameters
 */
export interface ErrorMessages {
  [keywordOrParameter: string]: string | null;
}
