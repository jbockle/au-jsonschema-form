import jsonSchema from 'src/app/json-schema';
import { JsonSchema } from 'src';
describe('json-schema', () => {
  describe('commands', () => {
    describe('build-validator', () => {
      it('should create a validator function', () => {
        const validator = jsonSchema.commands.buildValidator({ type: 'string' }, {});

        expect(validator).toBeInstanceOf(Function);
      });
    });
  });

  describe('queries', () => {
    describe('findSchemaDefinition', () => {
      it('should find schema from $ref', () => {
        const schema: JsonSchema<any> = {
          definitions: {
            user: {
              type: 'object',
              properties: {
                firstName: { type: 'string' },
              },
            },
          },
          type: 'array',
          items: { $ref: '/definitions/user' },
        };
        const userSchema = jsonSchema.queries.findSchemaDefinition('/definitions/user', schema);

        expect(userSchema).toBe(schema.definitions!.user);
      });
      it('should find schema from nested $ref', () => {
        const schema: JsonSchema<any> = {
          definitions: {
            innerUser: {
              type: 'object',
              properties: {
                firstName: { type: 'string' },
              },
            },
            user: {
              $ref: '/definitions/innerUser',
            },
          },
          type: 'array',
          items: { $ref: '/definitions/user' },
        };
        const userSchema = jsonSchema.queries.findSchemaDefinition('/definitions/user', schema);

        expect(userSchema).toBe(schema.definitions!.innerUser);
      });
      it('should throw if schema is not found', () => {
        expect(() => {
          jsonSchema.queries.findSchemaDefinition('/definitions/user', {});
        }).toThrow(`Could not find a definition for '/definitions/user'`);
      });

    });
    describe('resolveSchema', () => {
      it('should resolve schema $ref', () => {
        const schema: JsonSchema<any> = {
          definitions: {
            user: {
              type: 'object',
              properties: {
                firstName: { type: 'string' },
              },
            },
          },
          type: 'array',
          items: { $ref: '/definitions/user' },
        };

        const userSchema = jsonSchema.queries.resolveSchema(schema.items as any, schema);

        expect(userSchema).toBe(schema.definitions!.user);
      });

    });
    describe('isPatternProperty', () => {
      it('should return true if schema is a pattern property', () => {
        const schema: JsonSchema<any> = {
          type: 'object',
          patternProperties: {
            '^a$': {
              type: 'string',
            },
          },
        };

        const result = jsonSchema.queries.isPatternProperty(schema.patternProperties as any);
        expect(result).toBeTruthy();
      });
      it('should return false if schema is not a pattern property', () => {
        const schema: JsonSchema<any> = {
          type: 'object',
        };

        const result = jsonSchema.queries.isPatternProperty(schema.patternProperties as any);
        expect(result).toBeFalsy();
      });
    });
    describe('supportsPatternProperties', () => {
      it('should return true if schema supports pattern properties', () => {
        const schema: JsonSchema<any> = {
          type: 'object',
          patternProperties: {
            '^a$': {
              type: 'string',
            },
          },
        };

        const result = jsonSchema.queries.supportsPatternProperties(schema);
        expect(result).toBeTruthy();
      });
      it('should return false if schema does not support pattern properties', () => {
        const schema: JsonSchema<any> = {
          type: 'object',
        };

        const result = jsonSchema.queries.supportsPatternProperties(schema);
        expect(result).toBeFalsy();
      });
    });
    describe('supportsAdditionalProperties', () => {
      it('should return true if object schema supports additional properties', () => {
        const schema: JsonSchema<'object'> = {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        };

        const result = jsonSchema.queries.supportsAdditionalProperties(schema);

        expect(result).toBeTruthy();
      });
      it('should throw if schema supports additional properties but is truthy', () => {
        const schema: JsonSchema<'object'> = {
          type: 'object',
          additionalProperties: true,
        };

        expect(() => jsonSchema.queries.supportsAdditionalProperties(schema))
          .toThrow('additionalProperties is true, unable to determine property schema');
      });
      it('should return false if object schema supports additional properties', () => {
        const schema: JsonSchema<'object'> = {
          type: 'object',
          additionalProperties: false,
        };

        const result = jsonSchema.queries.supportsAdditionalProperties(schema);

        expect(result).toBeFalsy();
      });
    });
    describe('getPropertySchema', () => {
      it('should get property schema', () => {
        const schema: JsonSchema<any> = {
          type: 'object',
          properties: {
            name: { type: 'string' },
          },
        };

        const propSchema = jsonSchema.queries.getPropertySchema('name', schema, schema);

        expect(propSchema).toBe(schema.properties!.name);
      });
      it('should get pattern property schema', () => {
        const schema: any = {
          type: 'object',
          patternProperties: {
            '^n': { type: 'string' },
          },
        };

        const propSchema = jsonSchema.queries.getPropertySchema('name', schema, schema);

        expect(propSchema).toBe(schema.patternProperties['^n']);
      });
      it('should get additional property schema', () => {
        const schema: any = {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        };

        const propSchema = jsonSchema.queries.getPropertySchema('name', schema, schema);

        expect(propSchema).toBe(schema.additionalProperties);
      });
      it('should throw if schema is not found', () => {
        const schema: any = {
          type: 'object',
        };

        expect(() => jsonSchema.queries.getPropertySchema('name', schema, schema))
          .toThrow(`unable to determine schema for property 'name'`);
      });
    });
    describe('resolveSchemaType', () => {
      it('should resolve schema type', () => {
        const schema: any = {
          type: 'string',
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('string');
      });
      it('should resolve nullable schema type', () => {
        const schema: any = {
          type: ['string', 'null'],
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('string');
      });
      it('should resolve nullable schema type', () => {
        const schema: any = {
          type: ['null', 'string'],
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('string');
      });
      it('should resolve array schema type with one type', () => {
        const schema: any = {
          type: ['string'],
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('string');
      });
      it('should resolve array schema type with one type', () => {
        const schema: JsonSchema<any> = {
          allOf: [
            { minimum: 0 },
            { maximum: 2 },
            { type: 'number' },
          ],
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('number');
      });
      it('should throw if array type is not a nullable type', () => {
        const schema: any = {
          type: ['string', 'number'],
        };

        expect(() => jsonSchema.queries.resolveSchemaType(schema, {}))
          .toThrow(`supported schema array type must include 'null'`);
      });
      it('should throw if array type has more than 2 types', () => {
        const schema: any = {
          type: ['string', 'number', 'null'],
        };

        expect(() => jsonSchema.queries.resolveSchemaType(schema, {}))
          .toThrow(`supported schema type can only be between 1-2 types, actual length 3`);
      });
      it('should resolve oneOf schema type', () => {
        const schema: any = {
          oneOf: [
            { type: 'string' },
            { type: 'number' },
          ],
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('multi-schema');
      });
      it('should resolve anyOf schema type', () => {
        const schema: any = {
          anyOf: [
            { type: 'string' },
            { type: 'number' },
          ],
        };

        const type = jsonSchema.queries.resolveSchemaType(schema, {});

        expect(type).toBe('multi-schema');
      });
      it('should throw if schema cannot be determined', () => {
        expect(() => jsonSchema.queries.resolveSchemaType({}, {}))
          .toThrow('unable to determine type of schema');
      });
    });
    describe('getItemSchema', () => {
      it('should return item schema', () => {
        const schema: JsonSchema<'array'> = {
          type: 'array',
          items: {
            type: 'string',
          },
        };

        const itemSchema = jsonSchema.queries.getItemSchema(0, schema, {});

        expect(itemSchema).toBe(schema.items);
      });
      it('should return fixed item schema', () => {
        const schema: any = {
          type: 'array',
          items: [{
            type: 'string',
          }, {
            type: 'number',
          }],
        };

        const itemSchema = jsonSchema.queries.getItemSchema(1, schema, {});

        expect(itemSchema).toBe(schema.items[1]);
      });
      it('should return additional item schema', () => {
        const schema: any = {
          type: 'array',
          additionalItems: {
            type: 'string',
          },
        };

        const itemSchema = jsonSchema.queries.getItemSchema(1, schema, {});

        expect(itemSchema).toBe(schema.additionalItems);
      });
      it('should throw if item schema is not found', () => {
        const schema: any = {
          type: 'array',
        };

        expect(() => jsonSchema.queries.getItemSchema(0, schema, {}))
          .toThrow(`unable to determine schema for index '0'`);
      });
    });
  });
});
