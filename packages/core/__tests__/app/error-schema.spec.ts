import ajv from 'ajv';
import errorSchema from 'src/app/error-schema';
import { ErrorSchema } from 'src/domain';

describe('error-schema', () => {
  describe('commands', () => {
    describe('to-error-schema', () => {
      it('converts to error schema', () => {
        const expected: ErrorSchema = {
          _errors_: ['object has an error'],
        };

        const errors: any[] = [{
          dataPath: '',
          message: 'object has an error',
          params: {},
        }];

        const result = errorSchema.commands.toErrorSchema(errors);

        expect(result).toEqual(expected);
      });

      it('has no errors', () => {
        const expected: ErrorSchema = {};

        const errors: any[] = [];

        const result = errorSchema.commands.toErrorSchema(errors);

        expect(result).toEqual(expected);
      });

      it('contains multiple errors', () => {
        const expected: ErrorSchema = {
          _errors_: ['object has an error', 'another one'],
        };

        const errors: any[] = [{
          dataPath: '',
          message: 'object has an error',
          params: {},
        }, {
          dataPath: '',
          message: 'another one',
          params: {},
        }];

        const result = errorSchema.commands.toErrorSchema(errors);

        expect(result).toEqual(expected);
      });

      it('contains deep errors', () => {
        const expected: ErrorSchema = {
          prop: {
            0: {
              _errors_: ['object has an error', 'another one'],
            },
          },
        };

        const errors: any[] = [{
          dataPath: 'prop[0]',
          message: 'object has an error',
          params: {},
        }, {
          dataPath: 'prop[0]',
          message: 'another one',
          params: {},
        }];

        const result = errorSchema.commands.toErrorSchema(errors);

        expect(result).toEqual(expected);
      });

      it('moves missingProperty to segment', () => {
        const expected: ErrorSchema = {
          'prop': {
            _errors_: [
              'Required',
            ],
          },
        };

        const errors: Partial<ajv.ErrorObject>[] = [{
          dataPath: '',
          params: {
            missingProperty: 'prop',
          },
        }];

        const result = errorSchema.commands.toErrorSchema(errors as any);

        expect(result).toEqual(expected);
      });
    });
  });
});
