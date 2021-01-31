import { observable, inject } from 'aurelia-framework';
import { activationStrategy, NavigationInstruction, RouteConfig, Router } from 'aurelia-router';

import { examples } from '../examples';
import { Example, ExampleCtor } from '../examples/example';
import { JsonSchema } from '@aujsf/core';

const FORM_OPTIONS_SCHEMA: JsonSchema = {
  'x-ui-schema': {
    'ui:title': 'Form Options',
  },
  type: 'object',
  properties: {
    size: {
      title: 'Control Sizing',
      type: 'string',
      default: 'default',
      enum: ['default', 'small', 'extra-small'],
    },
    readOnly: { type: 'boolean' },
  },
};

export interface ExampleFormOptions {
  size?: 'default' | 'small' | 'extra-small';
  readOnly?: boolean;
}

@inject(Router)
export class Examples {
  public constructor(
    private _router: Router,
  ) { }

  @observable
  public valueTrigger = 0;

  public examples = examples;

  @observable
  public selectedExample?: ExampleCtor;

  @observable
  public example?: Example | null;

  public optionsSchema = { ...FORM_OPTIONS_SCHEMA };

  public options: ExampleFormOptions = {};

  public activate(params: { id?: string }, _routeConfig: RouteConfig, _navigationInstruction: NavigationInstruction): void {
    this.selectedExample = this.examples.find(e => e.id === params.id);
    this.example = this.selectedExample && new this.selectedExample();
  }

  public selectedExampleChanged(example?: ExampleCtor): void {
    this.example = null;

    if (example) {
      this._router.navigateToRoute('examples', { id: example.id });
    }
    else {
      this._router.navigateToRoute('examples', {});
    }
  }

  public determineActivationStrategy(): string {
    return activationStrategy.invokeLifecycle;
  }

  public onValueUpdated(): void {
    this.valueTrigger++;
  }
}
