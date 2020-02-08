import { UISchema } from 'src/domain';

export function getKeyUiSchema(key: string, uiSchema: UISchema): UISchema {
  return key in uiSchema ? uiSchema[key] as UISchema : (
    '*' in uiSchema ? uiSchema['*'] as UISchema : {});
}
