[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/elements/json-schema-form"](../modules/_core_src_elements_json_schema_form_.md) › [JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)

# Class: JsonSchemaForm

## Hierarchy

* **JsonSchemaForm**

## Index

### Constructors

* [constructor](_core_src_elements_json_schema_form_.jsonschemaform.md#constructor)

### Properties

* [error](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-error)
* [options](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-options)
* [schema](_core_src_elements_json_schema_form_.jsonschemaform.md#schema)
* [state](_core_src_elements_json_schema_form_.jsonschemaform.md#state)
* [themes](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-themes)
* [uiSchema](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-uischema)
* [validationResult](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-validationresult)
* [value](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-value)

### Methods

* [submit](_core_src_elements_json_schema_form_.jsonschemaform.md#submit)
* [validate](_core_src_elements_json_schema_form_.jsonschemaform.md#validate)

## Constructors

###  constructor

\+ **new JsonSchemaForm**(`_element`: Element, `_taskQueue`: TaskQueue, `_registry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)*

*Defined in [core/src/elements/json-schema-form.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_taskQueue` | TaskQueue |
`_registry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)*

## Properties

### `Optional` error

• **error**? : *any*

*Defined in [core/src/elements/json-schema-form.ts:106](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L106)*

___

### `Optional` options

• **options**? : *[FormOptions](../modules/_core_src_models_form_options_.md#formoptions)*

*Defined in [core/src/elements/json-schema-form.ts:101](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L101)*

form options

___

###  schema

• **schema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/json-schema-form.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L30)*

the json schema to build the form from and validate the model against

**`bindable`** input

___

###  state

• **state**: *[FormState](../modules/_core_src_elements_json_schema_form_.md#formstate)* = "initializing"

*Defined in [core/src/elements/json-schema-form.ts:104](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L104)*

___

### `Optional` themes

• **themes**? : *Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[]* = []

*Defined in [core/src/elements/json-schema-form.ts:95](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L95)*

list of form modules to include

**`remarks`** if the module name appears more than once, it overrides previous module

**`example`** 
```ts
// set default theme in plugin
aurelia.use.plugin(PLATFORM.moduleName(`@aujsf/core`), options => {
  options.defaultTheme = {
    'string-input': `@aujsf/bootstrap-theme/string-input.html`,
    'checkbox': `@aujsf/bootstrap-theme/checkbox.html`
  };
});
```

then in view
```html
  <json-schema-form themes.bind="[{'string-input': 'path/to/string-input.html','array-tabs': 'path/to/array-tabs.html'},{'array-tabs': 'path/to/foo-array-tabs.html'}]"...></json-schema-form>
```

results in the following combined theme
```ts
{
  'string-input': 'path/to/string-input.html',
  'checkbox': `@aujsf/bootstrap-theme/checkbox.html`,
  'array-tabs': 'path/to/foo-array-tabs.html'
}
```

**`bindable`** input

___

### `Optional` uiSchema

• **uiSchema**? : *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/json-schema-form.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L37)*

the ui-schema to override model values

**`bindable`** input

___

### `Optional` validationResult

• **validationResult**? : *[ValidationResult](../interfaces/_core_src_models_error_schema_.validationresult.md)*

*Defined in [core/src/elements/json-schema-form.ts:51](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L51)*

the validation result from AJV

**`bindable`** output

___

### `Optional` value

• **value**? : *any*

*Defined in [core/src/elements/json-schema-form.ts:44](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L44)*

the form's value, this is pre-populated against the schema

**`bindable`** input/output

## Methods

###  submit

▸ **submit**(`args`: [SubmitArguments](../interfaces/_core_src_models_submit_arguments_.submitarguments.md)): *void*

*Defined in [core/src/elements/json-schema-form.ts:59](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L59)*

action to call when submit is triggered

**`bindable`** callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [SubmitArguments](../interfaces/_core_src_models_submit_arguments_.submitarguments.md) | the arguments to pass to the submit call |

**Returns:** *void*

___

###  validate

▸ **validate**(): *void*

*Defined in [core/src/elements/json-schema-form.ts:108](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/json-schema-form.ts#L108)*

**Returns:** *void*
