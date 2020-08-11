import { customElement, bindable, computedFrom, inlineView } from 'aurelia-framework';
import { ErrorSchema } from '@aujsf/core';

@customElement('aujsf-bs-error-counter')
@inlineView(`<template class="ml-1"><span if.bind="hasChildErrors" class="badge badge-danger" title.bind="tooltip">!</span></template>`)
export class AujsfBsErrorCounter {
  @bindable
  public errors!: ErrorSchema;

  @computedFrom('errors')
  public get hasChildErrors(): boolean {
    return this.checkForErrors(this.errors ?? {});
  }

  public tooltip = 'This item contains errors';

  private checkForErrors(errors: ErrorSchema): boolean {
    if (errors._errors_?.length ?? 0 > 0) {
      return true;
    }

    for (const key in errors) {
      if (this.checkForErrors(errors[key] as ErrorSchema ?? {})) {
        return true;
      }
    }

    return false;
  }
}
