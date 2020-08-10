import { AujsfBase } from '../../elements/aujsf-base';
import { JsonSchema } from '../../models/json-schema';

export interface ProviderRule<TSchema extends JsonSchema, TValue = any> {
  view: string;
  priority?: number;
  predicate: (model: AujsfBase<TSchema, TValue>) => boolean;
}

export abstract class ViewProvider<TSchema extends JsonSchema, TValue = any> {
  private _rules: {
    [view: string]: ProviderRule<TSchema, TValue>
  } = {};

  protected constructor(defaultView: string | undefined, ...rules: ProviderRule<TSchema, TValue>[]) {
    this.default = defaultView;
    rules.length && this.addRules(...rules);
  }

  public default?: string = undefined;

  public get rules(): ProviderRule<TSchema, TValue>[] {
    return Object.keys(this._rules)
      .map(view => this._rules[view])
      .sort((a, b) => {
        a.priority = a.priority ?? 10;
        b.priority = b.priority ?? 10;

        if (a.priority === b.priority) {
          return 0;
        }

        return a.priority > b.priority ? 1 : -1;
      });
  }

  public getTemplate(model: AujsfBase<TSchema, TValue>): string {
    return this.rules.find(rule => rule.predicate(model))?.view ?? this.default!;
  }

  public addRules(...rules: ProviderRule<TSchema, TValue>[]): void {
    rules.forEach(rule => this._rules[rule.view] = rule);
  }
}
