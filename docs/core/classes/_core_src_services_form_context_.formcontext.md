[@aujsf/core](../README.md) › ["core/src/services/form-context"](../modules/_core_src_services_form_context_.md) › [FormContext](_core_src_services_form_context_.formcontext.md)

# Class: FormContext

## Hierarchy

* **FormContext**

## Index

### Constructors

* [constructor](_core_src_services_form_context_.formcontext.md#constructor)

### Properties

* [_logger](_core_src_services_form_context_.formcontext.md#private-_logger)
* [options](_core_src_services_form_context_.formcontext.md#options)
* [uiSchema](_core_src_services_form_context_.formcontext.md#uischema)
* [validator](_core_src_services_form_context_.formcontext.md#validator)
* [value](_core_src_services_form_context_.formcontext.md#value)

### Accessors

* [schema](_core_src_services_form_context_.formcontext.md#schema)

### Methods

* [setSchema](_core_src_services_form_context_.formcontext.md#setschema)

### Object literals

* [_schema](_core_src_services_form_context_.formcontext.md#private-_schema)

## Constructors

###  constructor

\+ **new FormContext**(`validator`: [Validator](_core_src_utils_validator_.validator.md), `options`: [PluginOptions](_core_src_plugin_options_.pluginoptions.md)): *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/services/form-context.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`validator` | [Validator](_core_src_utils_validator_.validator.md) |
`options` | [PluginOptions](_core_src_plugin_options_.pluginoptions.md) |

**Returns:** *[FormContext](_core_src_services_form_context_.formcontext.md)*

## Properties

### `Private` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:form-context')

*Defined in [core/src/services/form-context.ts:10](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L10)*

___

###  options

• **options**: *[PluginOptions](_core_src_plugin_options_.pluginoptions.md)*

*Defined in [core/src/services/form-context.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L15)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/services/form-context.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L28)*

___

###  validator

• **validator**: *[Validator](_core_src_utils_validator_.validator.md)*

*Defined in [core/src/services/form-context.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L14)*

___

###  value

• **value**: *any*

*Defined in [core/src/services/form-context.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L30)*

## Accessors

###  schema

• **get schema**(): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/services/form-context.ts:24](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L24)*

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

## Methods

###  setSchema

▸ **setSchema**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `options`: [FormOptions](../modules/_core_src_models_form_options_.md#formoptions)): *void*

*Defined in [core/src/services/form-context.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`options` | [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) |

**Returns:** *void*

## Object literals

### `Private` _schema

### ▪ **_schema**: *object*

*Defined in [core/src/services/form-context.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L11)*

###  type

• **type**: *"null"* = "null"

*Defined in [core/src/services/form-context.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-context.ts#L11)*
