import { InlineViewStrategy, ViewStrategy } from 'aurelia-framework';
import { SchemaType } from '../json-schema-definition';

export interface TemplateOptions {
  dependencies?: (string | Record<string, any> | Function)[];
  dependencyBaseUrl?: string;
  defaultForSchemaType?: boolean;
}

const defaultOptions: TemplateOptions = {
  defaultForSchemaType: false,
};

export class Template {
  public readonly options: TemplateOptions;
  public readonly view: ViewStrategy;
  public readonly identifier: string;

  public constructor(
    public readonly name: string,
    public readonly schemaType: SchemaType,
    public readonly template: string,
    options?: TemplateOptions
  ) {
    if (!schemaType) {
      throw new Error('a schemaType is required');
    }
    this.options = Object.assign({}, defaultOptions, options || {});
    this.identifier = `__${schemaType}_${name}__`;
    this.view = this.compile(template);
  }

  public static getIdentifier(name: string, type: SchemaType) {
    return `__${type}_${name}__`;
  }

  private compile(template: string): InlineViewStrategy {
    template = this.applyTemplateWrapper(template);
    return new InlineViewStrategy(template, this.options.dependencies, this.options.dependencyBaseUrl);
  }

  private applyTemplateWrapper(template: string): string {
    return this.hasTemplateWrapper(template) ? template : `<template>${template}</template>`;
  }

  private templateRegex = /^<template>(?:.|\r|\n)+<\/template>(?:.|\r|\n)*$/;
  private hasTemplateWrapper(template: string): boolean {
    return this.templateRegex.test(template);
  }
}
