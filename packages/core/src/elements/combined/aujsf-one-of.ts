import { customElement, ViewStrategy, InlineViewStrategy, observable, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchemaOneOf, JsonSchema, UISchema } from '../../models';
import { Validator } from '../../utils/validator';
import utils from '../../utils';

interface OneOfOption {
  index: number;
  title: string;
  schema: JsonSchema;
  uiSchema: UISchema;
}

import { FormContext, FormTemplateRegistry } from '../../services';
import { OneOfViewProvider } from '../../services/providers/one-of-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, OneOfViewProvider)
@customElement('aujsf-one-of')
export class AujsfOneOf extends AujsfBase<JsonSchemaOneOf, any> {
  private _validator = new Validator();

  protected _logger = getLogger('aujsf:sf-one-of');

  @observable
  public selectedOption: OneOfOption | null = null;

  public options?: OneOfOption[];

  public selectedOptionChanged(newValue: OneOfOption | null): void {
    if (newValue === null) {
      return;
    }

    this._validator.setSchema(newValue.schema, {});
    if (!this._validator.validate(this.value).valid) {
      this.value = undefined;
    }
  }

  public async bound(): Promise<void> {
    this.options = this.schema.oneOf.map((schema, index) => ({
      index,
      title: this.getOptionTitle(schema, index),
      schema: utils.jsonSchema.resolveSchema(schema, this.context.schema),
      uiSchema: { ...this.uiSchema },
    }));

    if (this.value) {
      this.options.some(option => {
        this._validator.setSchema(option.schema, {});
        if (this._validator.validate(this.value).valid) {
          this.selectedOption = option;
          return true;
        }

        return false;
      });
    }
  }

  protected resolveUISchemaDefaults(): void {
    this.uiSchema = this.uiSchema ?? {};
  }

  protected createViewStrategy(): ViewStrategy {
    const template = this._templateRegistry.get(this.viewProvider.getTemplate(this));

    return new InlineViewStrategy(
      template.entry.template.outerHTML,
      template.entry.dependencies.map(d => d.src));
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
