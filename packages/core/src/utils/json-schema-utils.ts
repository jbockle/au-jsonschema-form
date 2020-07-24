import { SchemaPrimitiveType } from '../models';

export class JsonSchemaUtils {

  public static isNullable(type: SchemaPrimitiveType[]): type is ['null', SchemaPrimitiveType] {
    return type.length === 2 && type.includes('null');
  }

}
