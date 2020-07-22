# aujsf

<p align="center">
  <a href="https://www.npmjs.com/package/@aujsf/core">
    <img alt="NPM Status" src="https://img.shields.io/npm/v/@aujsf/core.svg?style=flat">
  </a>
  <a href="https://bundlephobia.com/result?p=@aujsf/core@0.0.7">
    <img alt="Bundlephobia" src="https://badgen.net/bundlephobia/minzip/@aujsf/core">
  </a>
</p>

> This project is still very much in alpha! use at your own risk!

Create forms based on [json-schema]() specification!

Theming is a first class citizen!

## Installation

1. Install core dependency: `npm install @aujsf/core`
1. Install a theme (*or create your own*): `npm install @aujsf/bootstrap-theme`
1. Register the plugin:  

    ```typescript
    // main.ts
    import 'core-js';
    import { Aurelia, PLATFORM } from 'aurelia-framework';

    import { THEME } from '@aujsf/bootstrap-theme';
    import { IPluginOptions } from '@aujsf/core';

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
                  submit.call="submit()"></schema-form>
```

```typescript
export class MyComponent {
  jsonSchema: JsonSchema<'object'> = {
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

  submit(): void {
    alert('submitted!' + JSON.stringify(this.model));
  }
}
```

## Contributing

PRs are welcome! Use git conventional commit messages.
