import { Loader, ViewEngine, autoinject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';

import { FormTemplate, FormModule } from '../models/form-template';

const HIDDEN_VIEW: FormTemplate = {
  name: 'hidden',
  entry: null!,
  url: null!,
};

@autoinject
export class FormTemplateRegistry {
  private _logger = getLogger('aujsf:form-template-registry');
  private _templates: Map<string, FormTemplate> = new Map();

  public constructor(
    private _loader: Loader,
    private _viewEngine: ViewEngine) { }

  public get ready(): boolean {
    this._logger.debug('size', this._templates.size);
    return this._templates.size > 0;
  }

  public async add(name: string, url: FormModule): Promise<void> {
    try {
      this._logger.debug('adding', name, url);
      const entry = await this._loader.loadTemplate(url);
      const resources = await this._viewEngine.loadTemplateResources(entry);

      this._templates.set(name, {
        name,
        url,
        entry,
        resources,
      });

    } catch (error) {
      this._logger.error('unable to load view from template registry', { name, url, error });
    }
  }

  public get(name?: string): FormTemplate {
    if (!name) {
      throw new Error('Form template name cannot be empty/undefined');
    }

    if (name === 'hidden') {
      return HIDDEN_VIEW;
    }

    if (this._templates.has(name)) {
      return this._templates.get(name)!;
    }

    throw new Error(`A form template with name '${name}' was not found`);
  }

  public has(name: string): boolean {
    return this._templates.has(name);
  }
}
