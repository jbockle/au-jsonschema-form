import { JsonSchema } from '@aujsf/core';
import { Example } from './example';

export class OrderExample extends Example {
  public static id = '06-order';

  public static displayName = 'Order';

  public schema: JsonSchema = {
    type: 'object',
    properties: {
      three: { type: 'string' },
      two: { type: 'string' },
      four: { type: 'string', description: 'this is automatically last because the default order = length of properties' },
      one: { type: 'string' },
    },
  }

  public uiSchema = {
    one: { 'ui:order': 0 },
    two: { 'ui:order': 1 },
    three: { 'ui:order': 2 },
  }
}
