import { bindable, ViewStrategy, inject, bindingMode, inlineView, customElement, InlineViewStrategy } from 'aurelia-framework';

import { FormComponentDefinition, ErrorSchema, ComponentSlotView, ComponentState } from '../domain';
import { FormContext } from '../infrastructure/form-context';
import util from '../util';
import { IsVisible } from '../converters/is-visible';
import { ViewFinderService } from '../infrastructure/view-finder-service';
import { AppLogger } from '../infrastructure/app-logger';
import COMPOSE_VIEW from './sf-compose-view';
import { ProcessType } from '../converters/process-type';

@inject(FormContext, ViewFinderService)
@inlineView(COMPOSE_VIEW)
@customElement('sf-slot')
export class SfSlot {
  public constructor(
    public context: FormContext,
    public viewFinder: ViewFinderService,
  ) { }

  @bindable
  public definition!: FormComponentDefinition;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable
  public errors: ErrorSchema = {};

  public viewStrategy?: ViewStrategy;
  public componentViewStrategy?: ViewStrategy;

  public state: ComponentState = 'ready';

  private logger = AppLogger.makeLogger(SfSlot.name);

  public bind(): void {
    this.logger.debug('bound');

    const componentView = this.viewFinder.getFormComponentView(this.definition);
    this.componentViewStrategy = new InlineViewStrategy(componentView.markup, [
      ...(componentView.dependencies ?? []),
      ProcessType,
    ]);

    const slotView = this.getSlotView();
    this.viewStrategy = new InlineViewStrategy(slotView.markup, slotView.dependencies);
  }

  public definitionChanged(): void {
    this.bind();
  }

  public getSlotView(): ComponentSlotView {
    const slotView = this.viewFinder.getSlotView(this.definition);
    const slot = this.getSlot();
    const markup = util.compileTemplateString(slotView.markup, slot);

    return {
      markup,
      dependencies: [...(slotView.dependencies ?? []), IsVisible],
    };
  }

  private getSlot(): { slot: string } {
    return {
      slot: [
        `<sf-${this.definition.type}`,
        'show.bind="$this | isVisible"',
        'value.two-way="value"',
        'view-strategy.bind="componentViewStrategy"',
        'definition.bind="definition"',
        `errors.bind="errors"></sf-${this.definition.type}>`,
      ].join(' '),
    };
  }
}
