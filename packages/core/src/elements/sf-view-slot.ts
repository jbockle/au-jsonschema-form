import { bindable, useView, PLATFORM, ViewStrategy, inject, InlineViewStrategy, bindingMode } from 'aurelia-framework';

import { FormElementDefinition, ErrorSchema, ViewSlot } from '../domain';
import { FormContext } from '../infrastructure/form-context';
import { FieldViewRegistry } from '../infrastructure/view-slot-registry';
import util from '../util';

@useView(PLATFORM.moduleName('@au-jsonschema-form/core/elements/sf-view.html'))
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

    return { markup: compiledMarkup, dependencies: viewSlot.dependencies };
  }

  // eslint-disable-next-line @typescript-eslint/member-naming
  private getSlotArgs(): { slot: string } {
    return {
      slot: [
        `<sf-${this.definition.type}`,
        'value.bind="value"',
        'definition.bind="definition"',
        `errors.bind="errors"></sf-${this.definition.type}>`,
      ].join(' '),
    };
  }
}
