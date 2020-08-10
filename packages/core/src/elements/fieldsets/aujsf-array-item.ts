import { customElement, bindable, ViewStrategy, InlineViewStrategy, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { AujsfBase } from '../aujsf-base';
import { JsonSchema, UISchema } from '../../models';

import { FormContext, FormTemplateRegistry } from '../../services';
import { EmptyViewProvider } from '../../services/providers/empty-view-provider';

@inject(Element, FormTemplateRegistry, FormContext, EmptyViewProvider)
@customElement('aujsf-array-item')
export class AujsfArrayItem extends AujsfBase<JsonSchema> {
  protected _logger = getLogger('aujsf:sf-array-item');

  @bindable
  public index!: number;

  @bindable
  public itemTitle!: string;

  @bindable
  public even!: boolean;

  @bindable
  public first!: boolean;

  @bindable
  public last!: boolean;

  @bindable
  public parentUiSchema!: UISchema;

  @bindable
  public parentReadonly?: boolean;

  protected createViewStrategy(): ViewStrategy {
    const template = this._templateRegistry.get(this.getItemTemplate());

    return new InlineViewStrategy(
      template.entry.template.outerHTML,
      template.entry.dependencies.map(d => d.src));
  }

  public getItemTemplate(): string {
    return this.uiSchema['ui:item-view']
      ?? this.parentUiSchema['ui:item-view']
      ?? 'array-item';
  }

  public delete(): void {
    this.dispatchEvent('delete-array-item', this.index);
  }

  public moveup(): void {
    this.dispatchEvent('move-array-item-up', this.index);
  }

  public movedown(): void {
    this.dispatchEvent('move-array-item-down', this.index);
  }
}

