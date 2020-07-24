import Ajv from 'ajv';

interface AjvOptions {
  options: Ajv.Options;
  transform: (ajv: Ajv.Ajv) => void;
}

interface InternalFormOptions {
  ajv: Partial<AjvOptions>;
}

export type FormOptions = Partial<InternalFormOptions>;
