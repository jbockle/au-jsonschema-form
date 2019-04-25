import { DestroyStrategy } from '../form-definition/base';

export interface FormOptions {
  /** the form heading, leave blank for none */
  title?: string;
  /** set to true to validate immediately, false will wait for user selection to change */
  validateOnRender?: boolean;
  /** changes behavior to model when value is cleared */
  destroyStrategy?: DestroyStrategy;
}
