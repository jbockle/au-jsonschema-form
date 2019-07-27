import { bindable } from 'aurelia-framework';
import { JsonSchemaStringDefinition } from '../json-schema-definition';
import { PrimitiveStringDefinition } from '../form-definition';
import { SchemaElement, ValidationResponse } from './schema-element';
import { primitiveElement } from '../decorators/primitive-element';

@primitiveElement('au-sf-string')
export class AuSfString implements SchemaElement<string> {
  @bindable public model: string;
  @bindable public schema: JsonSchemaStringDefinition;
  @bindable public form: PrimitiveStringDefinition;
  @bindable public setModel: (value: string) => void;

  public bind() {
    if (this.schema.const) {
      this.model = this.schema.const;
    }
  }

  public validate() {
    const response: ValidationResponse = { valid: true, reasons: [] };
    if (this.schema.const && this.model !== this.schema.const) {
      response.valid = false;
      response.reasons.push(``)
    }
  }

  public proposeTemplate() {
    if (this.form.enumMap) {
      return 'radio_enum_map';
    }
    else if (this.schema.enum && this.schema.enum.length <= 5) {
      return 'radio_enum';
    }
    else if (this.schema.enum) {
      return 'select_enum';
    }
    // else if (['date-time', 'date', 'time'].indexOf(this.schema.format)) {
    //   return this.schema.format;
    // }
  }
}
