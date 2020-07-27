import { customElement, ViewStrategy, InlineViewStrategy, observable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { SfBase } from '../sf-base';
import { JsonSchemaOneOf, JsonSchema, UISchema } from '../../models';
import { Validator } from '../../utils/validator';

interface OneOfOption {
  index: number;
  title: string;
  schema: JsonSchema;
  uiSchema: UISchema;
}

@customElement('sf-one-of')
export class SfOneOf extends SfBase<JsonSchemaOneOf, any> {
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
      schema,
      uiSchema: { ...this.uiSchema },
    }));
  }

  protected getTemplate(): string {
    return undefined!;
  }

  protected createViewStrategy(): ViewStrategy {
    const template = this._templateRegistry.get('one-of');

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

  public optionMatcher(a: OneOfOption, b: OneOfOption): boolean {
    return a.index === b.index;
  }
}
