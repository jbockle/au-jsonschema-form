import uiSchema from 'src/app/ui-schema';
import { UISchema } from 'src';

describe('ui-schema', () => {
  describe('queries', () => {
    describe('getItemUiSchema', () => {
      it('gets standard uiSchema', () => {
        const schema: UISchema = {
          'ui:items': {
            'ui:title': '',
          },
        };
        const result = uiSchema.queries.getItemUiSchema(10, schema);

        expect(result).toBe(schema['ui:items']);
      });
      it('gets array uiSchema', () => {
        const schema: UISchema = {
          'ui:items': [{
            'ui:title': '',
          }],
        };
        const result = uiSchema.queries.getItemUiSchema(0, schema);

        expect(result).toBe((schema['ui:items'] as UISchema[])[0]);
      });
      it('gets array uiSchema when index is out of bounds', () => {
        const schema: UISchema = {
          'ui:items': [{
            'ui:title': '',
          }],
        };
        const result = uiSchema.queries.getItemUiSchema(1, schema);

        expect(result).toBe((schema['ui:items'] as UISchema[])[0]);
      });
      it('gets default ui schema', () => {
        const schema: UISchema = {};
        const result = uiSchema.queries.getItemUiSchema(1, schema);

        expect(result).toEqual({});
      });
    });
  });
});
