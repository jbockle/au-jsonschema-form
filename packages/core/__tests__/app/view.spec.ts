import views from 'src/app/view';
import { FormElementView, FormElementViews, FormElementViewModel, FormElementDefinition, FormElementViewSet } from 'src';
import { InlineViewStrategy } from 'aurelia-templating';
import { FormContext } from 'src/infrastructure/form-context';
import { FormElementViewRegistry } from 'src/infrastructure/form-element-view-registry';

jest.mock('aurelia-templating');

describe('view', () => {
  describe('commands', () => {
    describe('createInlineViewStrategy', () => {
      it('should create view strategy from view', () => {
        const view: FormElementView = {
          markup: '<template>hello world</template>',
        };

        const result = views.commands.createInlineViewStrategy(view);

        expect(result).toBeInstanceOf(InlineViewStrategy);
      });
      it('should create view strategy from view with dependencies', () => {
        const view: FormElementView = {
          markup: '<template>hello world</template>',
          dependencies: ['foo/bar.html'],
        };

        jest.mock('aurelia-templating');

        views.commands.createInlineViewStrategy(view);

        expect(InlineViewStrategy).toHaveBeenCalledWith(view.markup, view.dependencies);
      });
      it('should create view strategy from view with dependencies', () => {
        const view: FormElementView = {
          markup: '<template>hello world</template>',
          dependencies: ['foo/bar.html'],
        };
        const additionalDependencies = ['bar/foo.html'];

        jest.mock('aurelia-templating');

        views.commands.createInlineViewStrategy(view, additionalDependencies);

        expect(InlineViewStrategy).toHaveBeenCalledWith(view.markup, ['foo/bar.html', 'bar/foo.html']);
      });
    });
  });
  describe('queries', () => {
    let context: FormContext;
    let viewRegistry: FormElementViewRegistry;
    let formViews: Partial<FormElementViews>;
    beforeEach(() => {
      context = new FormContext();
      context.views = { SfString: { markup: '<template>sfstring template</template>' } };
      formViews = { SfArray: { markup: '<template>sfarray template</template>' } };
      viewRegistry = new FormElementViewRegistry(formViews as any);
    });
    describe('getElementView', () => {
      it('should get view from context', () => {
        const result = views.queries.getElementView('SfString', context, viewRegistry);

        expect(result).toBe(context.views!.SfString);
      });
      it('should get view from registry', () => {
        const result = views.queries.getElementView('SfArray', context, viewRegistry);

        expect(result).toBe(formViews.SfArray);
      });
    });
    describe('getViewName', () => {
      let definition: Partial<FormElementDefinition>;
      let viewModel: Partial<FormElementViewModel>;

      it('gets default viewset name', () => {
        definition = { schema: { type: 'string' }, uiSchema: {} };
        viewModel = {
          definition: definition as any,
          getViewSet(): FormElementViewSet {
            return { default: 'SfString' };
          },
        };

        const result = views.queries.getViewName(viewModel as any);

        expect(result).toBe('SfString');
      });
      it('gets enum viewset name', () => {
        definition = { schema: { type: 'string', enum: ['foo', 'bar'] }, uiSchema: {} };
        viewModel = {
          definition: definition as any,
          getViewSet(): FormElementViewSet {
            return { default: 'SfString', enum: 'SfSelect' };
          },
        };

        const result = views.queries.getViewName(viewModel as any);

        expect(result).toBe('SfSelect');
      });
      it('gets format viewset name', () => {
        definition = { schema: { type: 'string', format: 'date' }, uiSchema: {} };
        viewModel = {
          definition: definition as any,
          getViewSet(): FormElementViewSet {
            return {
              default: 'SfString',
              enum: 'SfSelect',
              format: {
                date: 'SfDatePicker',
              },
            };
          },
        };

        const result = views.queries.getViewName(viewModel as any);

        expect(result).toBe('SfDatePicker');
      });
      it('gets default override view name', () => {
        definition = {
          schema: { type: 'string' },
          uiSchema: {
            'ui:view': 'CustomSfString',
          },
        };
        viewModel = {
          definition: definition as any,
          getViewSet(): FormElementViewSet {
            return { default: 'SfString' };
          },
        };

        const result = views.queries.getViewName(viewModel as any);

        expect(result).toBe('CustomSfString');
      });
    });
  });
  describe('getElementView', () => {
    let context: FormContext;
    let viewRegistry: FormElementViewRegistry;
    let formViews: FormElementViews;
    beforeEach(() => {
      context = new FormContext();
      context.views = { SfString: { markup: '<template>sfstring context</template>' } };
      formViews = {
        SfArray: { markup: '<template>sfarray template</template>' },
        SfString: { markup: '<template>sfstring registry</template>' },
      } as any;
      viewRegistry = new FormElementViewRegistry(formViews);
    });
    it('gets element view from view service', () => {
      const view = views.queries.getElementView('SfArray', context, viewRegistry);

      expect(view).toEqual({ markup: '<template>sfarray template</template>' });
    });
    it('gets override view from context', () => {
      const view = views.queries.getElementView('SfString', context, viewRegistry);

      expect(view).toEqual({ markup: '<template>sfstring context</template>' });
    });
  });
  describe('getViewMeta', () => {
    let definition: Partial<FormElementDefinition>;
    let viewModel: Partial<FormElementViewModel>;
    let context: FormContext;
    let viewRegistry: FormElementViewRegistry;
    let formViews: FormElementViews;
    beforeEach(() => {
      definition = { schema: { type: 'string' }, uiSchema: {} };
      context = new FormContext();
      context.views = { SfString: { markup: '<template>sfstring context</template>' } };
      formViews = {
        SfArray: { markup: '<template>sfarray template</template>' },
        SfString: { markup: '<template>sfstring registry</template>' },
      } as any;
      viewRegistry = new FormElementViewRegistry(formViews);
      viewModel = {
        context, viewService: viewRegistry, definition: definition as any,
        getViewSet(): FormElementViewSet {
          return { default: 'SfString' };
        },
      };
    });
    it('gets default viewset name', () => {
      const result = views.queries.getViewMeta(viewModel as any);

      expect(result.view).toEqual({ markup: '<template>sfstring context</template>' });
      expect(result.viewStrategy).toBeInstanceOf(InlineViewStrategy);
    });
    it('gets unknown viewset name', () => {
      viewModel.getViewSet = (): FormElementViewSet => {
        return { default: 'SfNumber' };
      };
      const result = views.queries.getViewMeta(viewModel as any);

      expect(result.view).toEqual({ markup: `<template><code>unknown view 'SfNumber'</code></template>` });
      expect(result.viewStrategy).toBeInstanceOf(InlineViewStrategy);
    });
  });
});

