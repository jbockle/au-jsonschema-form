import Ajv from 'ajv';

import { SchemaFormOptions, JsonSchema } from '../../../domain';

export function buildValidator(schema: JsonSchema<any>, options: SchemaFormOptions): Ajv.ValidateFunction {
  const ajv = new Ajv({
    allErrors: true,
    multipleOfPrecision: 8,
    schemaId: 'auto',
    unknownFormats: 'ignore',
    formats: options.ajv?.customFormats,
    jsonPointers: true,
    verbose: true,
  });

  ajv.addFormat(
    'data-url',
    /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/,
  );

  ajv.addFormat(
    'color',
    /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
  );

  return ajv.compile(schema);
}
