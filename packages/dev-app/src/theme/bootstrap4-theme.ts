import { JsonSchema, UISchema, FormElementViewRegistry } from '@au-jsonschema-form/core';
import { bootstrap4Views } from '@au-jsonschema-form/theme-bootstrap4';
import { bindable, useShadowDOM, observable, inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'bootstrap';

@useShadowDOM({ mode: 'closed' })
@inject(HttpClient, FormElementViewRegistry)
export class Bootstrap4Theme {
  public constructor(
    private _client: HttpClient,
    private _viewRegistry: FormElementViewRegistry,
  ) { }

  @bindable
  public schema!: JsonSchema<any>;

  @bindable
  public uiSchema!: UISchema;

  @bindable
  public model: any;

  public style!: string;

  public themeMap = {
    cerulean: 'cerulean/bootstrap.css',
    cosmo: 'cosmo/bootstrap.css',
    cyborg: 'cyborg/bootstrap.css',
    darkly: 'darkly/bootstrap.css',
    flatly: 'flatly/bootstrap.css',
    journal: 'journal/bootstrap.css',
    litera: 'litera/bootstrap.css',
    lumen: 'lumen/bootstrap.css',
    lux: 'lux/bootstrap.css',
    materia: 'materia/bootstrap.css',
    minty: 'minty/bootstrap.css',
    pulse: 'pulse/bootstrap.css',
    sandstone: 'sandstone/bootstrap.css',
    simplex: 'simplex/bootstrap.css',
    sketchy: 'sketchy/bootstrap.css',
    slate: 'slate/bootstrap.css',
    solar: 'solar/bootstrap.css',
    spacelab: 'spacelab/bootstrap.css',
    superhero: 'superhero/bootstrap.css',
    united: 'united/bootstrap.css',
    yeti: 'yeti/bootstrap.css',
  }

  public bind(): void {
    this._viewRegistry.set(bootstrap4Views);
  }

  public themes = Object.keys(this.themeMap);

  @observable
  public theme: string = this.themes[0];

  public async themeChanged(): Promise<void> {
    const response = await this._client.get(`/${this.theme}/bootstrap.css`);

    this.style = await response.text();
  }
}
