import { customElement, bindable, useView, PLATFORM } from 'aurelia-framework';
import { JsonSchemaStringDefinition } from '../json-schema-definition';
import { PrimitiveStringDefinition } from '../form-options';
import { AuSfBase } from './au-sf-base';
import { bindParent, findTemplate } from '../decorators';

@bindParent
@findTemplate
@useView(PLATFORM.moduleName('./compose.html'))
@customElement('au-sf-string')
export class AuSfString implements AuSfBase {
  public parent: any;

  @bindable public schema: JsonSchemaStringDefinition;
  @bindable public form: PrimitiveStringDefinition;

  public test: string = 'asdf';

  public bind() {
    this.test = 'fdsa';
  }
}
