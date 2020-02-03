import { bindable, inlineView, ViewStrategy, inject, InlineViewStrategy, bindingMode } from 'aurelia-framework';

import { FormElementDefinition, ErrorSchema, ViewSlot } from '../domain';
import { FormContext } from '../infrastructure/form-context';
import { FieldViewRegistry } from '../infrastructure/view-slot-registry';
import util from '../util';
import { IsVisible } from '../converters/is-visible';
import SF_VIEW from './sf-view';

@inlineView(SF_VIEW)
@inject(FormContext, FieldViewRegistry)
export class SfViewSlot {
  public constructor(
    public context: FormContext,
    public fieldViewRegistry: FieldViewRegistry,
  ) { }

  @bindable
  public definition!: FormElementDefinition;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable
  public errors!: ErrorSchema;

  public viewStrategy?: ViewStrategy;

  public bind(): void {
    const viewSlot = this.getViewSlot();
    this.viewStrategy = new InlineViewStrategy(viewSlot.markup, viewSlot.dependencies);
  }

  public definitionChanged(): void {
    this.bind();
  }

  // eslint-disable-next-line @typescript-eslint/member-naming
  private getViewSlot(): ViewSlot {
    const viewSlot = this.fieldViewRegistry.get(this.definition.uiSchema['ui:viewSlot']);
    const args = this.getSlotArgs();
    const compiledMarkup = util.compileTemplate(viewSlot.markup, args);

    return { markup: compiledMarkup, dependencies: [...(viewSlot.dependencies ?? []), IsVisible] };
  }

  // eslint-disable-next-line @typescript-eslint/member-naming
  private getSlotArgs(): { slot: string } {
    return {
      slot: [
        `<sf-${this.definition.type}`,
        'show.bind="$this | isVisible"',
        'value.two-way="value"',
        'definition.bind="definition"',
        `errors.bind="errors"></sf-${this.definition.type}>`,
      ].join(' '),
    };
  }
}
