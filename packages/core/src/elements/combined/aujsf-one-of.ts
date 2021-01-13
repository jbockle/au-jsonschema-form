import { customElement, observable, inject, Container } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaOneOf, JsonSchema, UISchema } from '../../models';
import { Validator } from '../../utils/validator';
import utils from '../../utils';

import { FormContext, FormTemplateRegistry, Enhancer } from '../../services';
import { OneOfViewProvider } from '../../services/providers/one-of-view-provider';

interface OneOfOption {
  index: number;
  title: string;
  schema: JsonSchema;
  uiSchema: UISchema;
  validator: Validator;
}

@inject(Element, Container, FormTemplateRegistry, FormContext, OneOfViewProvider)
@customElement('aujsf-one-of')
export class AujsfOneOf extends AujsfBase<JsonSchemaOneOf, any> {
  protected _logger = getLogger('aujsf:sf-one-of');

  public constructor(
    element: Element,
    container: Container,
    templateRegistry: FormTemplateRegistry,
    context: FormContext,
    viewProvider: OneOfViewProvider,
  ) {
    super(element, container, templateRegistry, context, viewProvider);
  }

  @observable
  public selectedOption: OneOfOption | null = null;

  public options: OneOfOption[] = [];

  public async selectedOptionChanged(newValue: OneOfOption | null): Promise<void> {
    if (newValue === null) {
      return;
    }

    const result = await newValue.validator.validate(this.value);

    if (!result.valid) {
      this.value = undefined;
    }
  }

  public bound(): void {
    this.options = this.schema.oneOf.map((schema, index) => {
      const resolvedSchema = utils.jsonSchema.resolveSchema(schema, this.context.schema!);

      return {
        index,
        title: this.getOptionTitle(schema, index),
        schema: resolvedSchema,
        uiSchema: { ...this.uiSchema },
        validator: new Validator(resolvedSchema, this.context.formOptions.validatorOptions),
      };
    });

    if (this.value) {
      // if there is already a value present on bind, determine which, if any, oneOf schema is currently selected
      this.options.some(async option => {
        const result = await option.validator.validate(this.value);

        if (result.valid) {
          this.selectedOption = option;
        }

        return result.valid;
      });
    }
  }

  protected resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
  }

  protected enhance(): void {
    const template = this._templateRegistry.get(this.viewProvider.getTemplate(this));

    this.view = this._container.get(Enhancer).enhanceTemplate({
      element: this._element,
      bindingContext: this,
      container: this._container,
      template,
      attributes: this.uiSchema['ui:view-class']
        ? [['class', this.uiSchema['ui:view-class']]]
        : undefined,
    });
  }

  public getOptionTitle(schema: JsonSchema, index: number): string {
    if ('title' in schema && typeof (schema.title) === 'string') {
      return schema['title'];
    }

    return `Option ${index + 1}`;
  }

  public optionMatcher(a?: OneOfOption, b?: OneOfOption): boolean {
    if (!a || !b) {
      return false;
    }

    return a.index === b.index;
  }
}
