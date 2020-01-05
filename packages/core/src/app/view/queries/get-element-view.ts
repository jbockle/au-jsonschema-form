import { FormContext } from '../../../infrastructure/form-context';
import { FormElementViewRegistry } from '../../../infrastructure/form-element-view-registry';
import { FormElementView } from '../../../domain/form-element-view';

export function getElementView(
  name: string,
  context: FormContext,
  viewService: FormElementViewRegistry,
): FormElementView | undefined {
  return context.views![name] ?? viewService.get(name);
}
