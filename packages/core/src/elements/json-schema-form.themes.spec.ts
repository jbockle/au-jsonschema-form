import { ComponentTester, StageComponent } from '@aujsf/test';
import { bootstrap } from 'aurelia-bootstrapper';
import { configure } from '../';
import { JsonSchemaForm } from './json-schema-form';

describe('json-schema-form themes', () => {
  let component: ComponentTester<JsonSchemaForm>;

  beforeEach(() => {
    component = StageComponent
      .withResources<JsonSchemaForm>()
      .inView(`<json-schema-form themes.bind="themes"></json-schema-form>`)
      .addPlugin(configure);
  });

  afterEach(() => {
    // component.viewModel.error && console.error(component.viewModel.error);
    component.dispose();
  });

  it('when themes are invalid, throws', async () => {
    await component
      .boundTo({ themes: [] })
      .create(bootstrap);

    expect(component.viewModel.themesChanged([{}]))
      .rejects
      .toThrow('One or more required theme views are missing');
  });

  it('when themes are valid, does not throw', async () => {
    await component
      .boundTo({ themes: [] })
      .create(bootstrap);

    spyOn(component.viewModel.registry, 'has')
      .and.returnValue(true);

    let error: any;
    try {
      await component.viewModel.themesChanged([{}]);
    }
    catch (actualError) {
      error = actualError;
    }

    expect(error).toBeUndefined();
  });
});
