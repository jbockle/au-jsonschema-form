import util from '../../../util';
import { UISchema } from '../../../domain';

export function getItemUiSchema(index: number, fromUiSchema: UISchema): UISchema {
  const uiSchema = fromUiSchema['ui:items'];

  if (Array.isArray(uiSchema)) {
    return index in uiSchema
      ? uiSchema[index]
      : util.last(uiSchema)!;
  }

  return uiSchema ?? {};
}
