import { Template } from './template';
import { SchemaType } from '../json-schema-definition';

export class TemplateCache {
  private _cache: Map<string, Template> = new Map<string, Template>();

  private get _templates() {
    return Array.from(this._cache.values());
  }

  public add(template: Template, override: boolean = false): void {
    if (!override && this._cache.has(template.identifier)) {
      throw new Error(`A template with name '${template.name}' already exists in template cache`);
    }
    this._cache.set(template.identifier, template);
  }

  public find(type: SchemaType, name: string, proposedName: string): Template {
    if (!!name) {
      return this.findByIdentifier(Template.getIdentifier(name, type));
    }
    if (!!proposedName) {
      const template = this.findByProposed(Template.getIdentifier(proposedName, type));
      if (template) {
        return template;
      }
    }
    return this.findDefault(type);
  }

  public findByProposed(identifier: string) {
    try {
      return this.findByIdentifier(identifier);
    }
    catch {
      return undefined;
    }
  }

  public findByIdentifier(identifier: string): Template {
    if (this._cache.has(identifier)) {
      return this._cache.get(identifier);
    }
    throw new Error(`A schema element template was not found matching '${identifier}'`);
  }

  public findDefault(type: SchemaType): Template {
    const template = this._templates.find((t) => t.options.defaultForSchemaType);
    if (!template) {
      throw new Error(`A default schema element template was not found for type '${type}'`);
    }
    return template;
  }

  public register(templates: Template[], override: boolean = true): void {
    for (const template of templates) {
      this.add(template, override);
    }
  }

  public contains(name: string): boolean {
    return this._cache.has(name);
  }

  public clear(): void {
    this._cache.clear();
  }
}
