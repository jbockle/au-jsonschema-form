
<p align="center">
  <a href="https://www.npmjs.com/package/@aujsf/core">
    <img alt="NPM Status" src="https://img.shields.io/npm/v/@aujsf/core.svg?style=flat">
  </a>
  <a href="https://bundlephobia.com/result?p=@aujsf/core">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@aujsf/core">
  </a>
</p>

<h2 align="center">Aurelia JSON Schema Forms</h2>

> This project is still very much in alpha! use at your own risk!

Create forms based on [json-schema](https://json-schema.org/) specification! Using ajv for model validation, @aujsf supports draft-04,draft-06, and draft-07.

Theming is a first class citizen!

## Installation

1. Install core dependencies: `npm install @aujsf/core ajv jsonpointerx`
1. Install a theme (*or create your own*): `npm install @aujsf/bootstrap-theme`
1. Register the plugin:  

    ```typescript
    // main.ts
    import { Aurelia, PLATFORM } from 'aurelia-framework';

    import { IPluginOptions } from '@aujsf/core';
    import { THEME } from '@aujsf/bootstrap-theme';

    export function configure(aurelia: Aurelia): void {
      aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('@aujsf/core'), (options: IPluginOptions) => options.defaultTheme = THEME);

      aurelia.use.developmentLogging('debug');

      aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
    }
    ```

## Use

```html
<json-schema-form schema.bind="jsonSchema" 
                  ui-schema.bind="uiSchema"
                  value.bind="model"
                  submit.call="submit(value, validationResult)"></json-schema-form>
```

```typescript
import { UISchema, FormOptions, JsonSchema, ValidationResult } from '@aujsf/core';
export class MyComponent {
  jsonSchema: JsonSchema = {
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      }
    },
    required: ['firstName', 'lastName']
  };

  uiSchema: UISchema = {
    'ui:title': 'User',
    lastName: {
      'ui:title': 'Sur Name'
    }
  };

  model: any = {};

  submit(value: any, validationResult: ValidationResult): void {
    if (validationResult.valid) {
      alert('valid:submitted!' + JSON.stringify(value, null, 2));
    } else {
      alert('invalid :(' + JSON.stringify(validationResult, null, 2));
    }
  }
}
```

## API

* [@aujsf/core](docs/core/README.md)
* [@aujsf/bootstrap-theme](docs/bootstrap-theme/README.md)
