import { StageComponent, ComponentTester } from '@aujsf/test';
import { bootstrap } from 'aurelia-bootstrapper';
import { ATTRIBUTES, AujsfSlot } from './aujsf-slot';
import { JsonSchema } from '../models';

describe('aujsf-slot', () => {
  let component: ComponentTester<AujsfSlot>;

  beforeEach(() => {
    component = StageComponent
      .withResources<AujsfSlot>(AujsfSlot)
      .inView('<aujsf-slot schema.bind="schema" ui-schema.bind="uiSchema" root.bind="root === true"></aujsf-slot>')
      .boundTo({ schema: { type: 'string' } });
  });

  it('adds attributes', async () => {
    await component.create(bootstrap);

    ATTRIBUTES.forEach(attr => {
      expect(component.element.innerHTML).toContain(`${attr[0]}="${attr[1]}"`);
    });
  });

  it('merges inline ui schema', async () => {
    await component
      .boundTo({
        schema: {
          'x-ui-schema': { 'ui:title': 'Name' },
          type: 'string',
        },
        uiSchema: {
          'ui:setting': true,
        },
      })
      .create(bootstrap);

    expect(component.viewModel.uiSchema).toEqual({
      'ui:title': 'Name',
      'ui:setting': true,
    });
  });

  it('overrides type', async () => {
    await component
      .boundTo({
        schema: {
          type: 'number',
        },
        uiSchema: {
          'ui:type': 'string',
        },
      })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-string/);
  });

  it('when root, removes root title', async () => {
    await component
      .boundTo({
        schema: {
          type: 'number',
        },
        uiSchema: {
        },
        root: true,
      })
      .create(bootstrap);

    expect(component.viewModel.uiSchema['ui:title'])
      .toBe(false);
  });

  it('when exception occurs, creates error view', async () => {
    await component
      .boundTo({ schema: undefined })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<code/);
  });

  it('creates string view-model', async () => {
    await component
      .boundTo({ schema: { type: 'string' } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-string/);
  });

  it('creates number view-model', async () => {
    await component
      .boundTo({ schema: { type: 'integer' } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-number/);
  });

  it('when nullable, creates string view-model', async () => {
    await component
      .boundTo({ schema: { type: ['string', 'null'] } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-string/);
  });

  it('creates conditional view-model', async () => {
    await component
      .boundTo({ schema: { type: 'string', if: { const: 'foo' } } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-conditional/);
  });

  it('creates all-of view-model', async () => {
    await component
      .boundTo({ schema: { allOf: {} } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-all-of/);
  });

  it('creates any-of view-model', async () => {
    await component
      .boundTo({ schema: { anyOf: {} } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-any-of/);
  });

  it('creates one-of view-model', async () => {
    await component
      .boundTo({ schema: { oneOf: {} } })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-one-of/);
  });

  it('creates unknown view-model', async () => {
    await component
      .boundTo({ schema: {} })
      .create(bootstrap);

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-unknown/);
  });

  it('resolves ref', async () => {
    const schema: JsonSchema = {
      definitions: {
        foo: { type: 'number' },
      },
      type: 'object',
      properties: {
        foo: { $ref: '#/definitions/foo' },
      },
    };

    await component
      .boundTo({ schema: schema.properties!.foo, uiSchema: {} })
      .create(bootstrap);

    component.viewModel.context.schema = schema;
    component.viewModel.schemaChanged();

    expect(component.element.innerHTML)
      .toMatch(/^<aujsf-number/);
  });

  afterEach(() => {
    // component.viewModel.error && console.error(component.viewModel.error);
    component.dispose();
  });
});

