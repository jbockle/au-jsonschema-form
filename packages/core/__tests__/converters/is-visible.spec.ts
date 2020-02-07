import { IsVisible } from 'src/converters/is-visible';
import { FormElementViewModel } from 'src';

describe('isVisible', () => {
  let sut: IsVisible;
  beforeEach(() => {
    sut = new IsVisible();
  });
  it('should be visible', () => {
    const definition = {
      uiSchema: {
        'ui:hidden': false,
      },
    } as any;
    const viewModel: Partial<FormElementViewModel> = {
      definition,
    };

    const result = sut.toView(viewModel as any);

    expect(result).toBe(true);
  });
  it('should be hidden', () => {
    const definition = {
      uiSchema: {
        'ui:hidden': true,
      },
    } as any;
    const viewModel: Partial<FormElementViewModel> = {
      definition,
    };

    const result = sut.toView(viewModel as any);

    expect(result).toBe(false);
  });
  it('should evaluate visible', () => {
    const definition = {
      uiSchema: {
        'ui:hidden': (_vm: FormElementViewModel): boolean => {
          return false;
        },
      },
    } as any;
    const viewModel: Partial<FormElementViewModel> = {
      definition,
    };

    const result = sut.toView(viewModel as any);

    expect(result).toBe(true);
  });
  it('should evaluate hidden', () => {
    const definition = {
      uiSchema: {
        'ui:hidden': (_vm: FormElementViewModel): boolean => {
          return true;
        },
      },
    } as any;
    const viewModel: Partial<FormElementViewModel> = {
      definition,
    };

    const result = sut.toView(viewModel as any);

    expect(result).toBe(false);
  });
});
