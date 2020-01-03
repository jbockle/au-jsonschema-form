# au-jsonschema-form

> This project is still very much in alpha! use at your own risk!

Create forms based on [json-schema]() specification!

Theming is a first class citizen!

## Installation

1. Install core dependency: `npm install @au-jsonschema-form/core`
1. Install a theme (*or create your own*): `npm install @au-jsonschemaform/theme-vanilla`
1. Register the plugin:  

    ```typescript
    // main.ts
    import {Aurelia} from 'aurelia-framework';
    import {SchemaFormPluginOptions} from '@au-jsonschema-form/core';
    import {theme} from '@au-jsonschema-form/theme-vanilla';

    export function configure(aurelia: Aurelia) {
      // ...
      aurelia.use.plugin(PLATFORM.moduleName('@au-jsonschema-form/core'),(options: SchemaFormPluginOptions) => {
        options.theme = theme; // todo: change to theme
      });
      // ...
    }
    ```

## Use

```html
<schema-form schema.bind="jsonSchema" ui-schema.bind="uiSchema" model.bind="model"></schema-form>
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
}
```

## Contributing

PRs are welcome! Use git conventional commit messages.
