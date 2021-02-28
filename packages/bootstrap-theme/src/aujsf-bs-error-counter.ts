import { customElement, bindable, computedFrom, inlineView } from 'aurelia-framework';
import { ErrorSchema } from '@aujsf/core';

@customElement('aujsf-bs-error-counter')
@inlineView(`<template class="ml-1"><span if.bind="hasDeepErrors" class="badge badge-danger" title.bind="tooltip">!</span></template>`)
export class AujsfBsErrorCounter {
  @bindable
  public errors?: ErrorSchema;

  @computedFrom('errors')
  public get hasDeepErrors(): boolean {
    return this.errors?.['es:hasErrors'] || this.errors?.['es:hasChildErrors']() || false;
  }

  public tooltip = 'This item contains errors';
}
