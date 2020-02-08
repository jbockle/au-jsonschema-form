import uiSchemas from 'src/app/ui-schema';
import { UISchema } from 'src';

describe('ui-schema', () => {
  describe('queries', () => {
    describe('getKeyUiSchema', () => {
      it('should get ui schema from key', () => {
        const uiSchema: UISchema = {
          age: { 'ui:title': 'Age' },
        };

        const result = uiSchemas.queries.getKeyUiSchema('age', uiSchema);

        expect(result).toBe(uiSchema.age);
      });
      it('should get empty ui schema', () => {
        const uiSchema: UISchema = {};

        const result = uiSchemas.queries.getKeyUiSchema('age', uiSchema);

        expect(result).toEqual({});
      });
      it('should get ui schema from wildcard', () => {
        const uiSchema: UISchema = {
          '*': { 'ui:title': 'Age' },
        };

        const result = uiSchemas.queries.getKeyUiSchema('age', uiSchema);

        expect(result).toBe(uiSchema['*']);
      });
    });
    describe('getItemUiSchema', () => {
      it('gets standard uiSchema', () => {
        const schema: UISchema = {
          'ui:items': {
            'ui:title': '',
          },
        };
        const result = uiSchemas.queries.getItemUiSchema(10, schema);

        expect(result).toBe(schema['ui:items']);
      });
      it('gets array uiSchema', () => {
        const schema: UISchema = {
          'ui:items': [{
            'ui:title': '',
          }],
        };
        const result = uiSchemas.queries.getItemUiSchema(0, schema);

        expect(result).toBe((schema['ui:items'] as UISchema[])[0]);
      });
      it('gets array uiSchema when index is out of bounds', () => {
        const schema: UISchema = {
          'ui:items': [{
            'ui:title': '',
          }],
        };
        const result = uiSchemas.queries.getItemUiSchema(1, schema);

        expect(result).toBe((schema['ui:items'] as UISchema[])[0]);
      });
      it('gets default ui schema', () => {
        const schema: UISchema = {};
        const result = uiSchemas.queries.getItemUiSchema(1, schema);

        expect(result).toEqual({});
      });
    });
  });
});
