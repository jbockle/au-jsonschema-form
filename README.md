# au-jsonschema-form

> This project is still very much in alpha! use at your own risk!

Create forms based on [json-schema]() specification!

Theming is a first class citizen!

## Installation

1. Install core dependency: `npm install @au-jsonschema-form/core`
1. Install a theme (*or create your own*): `npm install @au-jsonschemaform/theme-vanilla`
1. Register the plugin:  

    ```javascript
    // main.ts

    export function configure(aurelia: Aurelia) {
      aurelia.use.plugin(PLATFORM.moduleName('@au-jsonschema-form/core'),(options: SchemaFormPluginOptions) => {
        options.views = theme;
      });
    }
    ```

## Use

```html
<schema-form schema.bind="jsonSchema" ui-schema.bind="uiSchema" model.bind="model"></schema-form>
```
