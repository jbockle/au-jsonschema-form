[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/form-context"](../modules/_core_src_services_form_context_.md) › [FormContext](_core_src_services_form_context_.formcontext.md)

# Class: FormContext

## Hierarchy

* **FormContext**

## Index

### Constructors

* [constructor](_core_src_services_form_context_.formcontext.md#constructor)

### Properties

* [_logger](_core_src_services_form_context_.formcontext.md#private-_logger)
* [_options](_core_src_services_form_context_.formcontext.md#private-optional-_options)
* [_schema](_core_src_services_form_context_.formcontext.md#private-optional-_schema)
* [enhancer](_core_src_services_form_context_.formcontext.md#enhancer)
* [pluginOptions](_core_src_services_form_context_.formcontext.md#pluginoptions)
* [uiSchema](_core_src_services_form_context_.formcontext.md#uischema)
* [validator](_core_src_services_form_context_.formcontext.md#validator)
* [value](_core_src_services_form_context_.formcontext.md#value)

### Accessors

* [options](_core_src_services_form_context_.formcontext.md#options)
* [schema](_core_src_services_form_context_.formcontext.md#schema)

## Constructors

###  constructor

\+ **new FormContext**(`validator`: [Validator](_core_src_utils_validator_.validator.md), `pluginOptions`: [PluginOptions](_core_src_plugin_options_.pluginoptions.md), `enhancer`: [Enhancer](_core_src_services_enhancer_.enhancer.md)): *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/services/form-context.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`validator` | [Validator](_core_src_utils_validator_.validator.md) |
`pluginOptions` | [PluginOptions](_core_src_plugin_options_.pluginoptions.md) |
`enhancer` | [Enhancer](_core_src_services_enhancer_.enhancer.md) |

**Returns:** *[FormContext](_core_src_services_form_context_.formcontext.md)*

## Properties

### `Private` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:form-context')

*Defined in [core/src/services/form-context.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L11)*

___

### `Private` `Optional` _options

• **_options**? : *[FormOptions](../modules/_core_src_models_form_options_.md#formoptions)*

*Defined in [core/src/services/form-context.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L13)*

___

### `Private` `Optional` _schema

• **_schema**? : *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/services/form-context.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L12)*

___

###  enhancer

• **enhancer**: *[Enhancer](_core_src_services_enhancer_.enhancer.md)*

*Defined in [core/src/services/form-context.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L18)*

___

###  pluginOptions

• **pluginOptions**: *[PluginOptions](_core_src_plugin_options_.pluginoptions.md)*

*Defined in [core/src/services/form-context.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L17)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/services/form-context.ts:23](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L23)*

___

###  validator

• **validator**: *[Validator](_core_src_utils_validator_.validator.md)*

*Defined in [core/src/services/form-context.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L16)*

___

###  value

• **value**: *any*

*Defined in [core/src/services/form-context.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L25)*

## Accessors

###  options

• **get options**(): *[FormOptions](../modules/_core_src_models_form_options_.md#formoptions) | undefined*

*Defined in [core/src/services/form-context.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L28)*

**Returns:** *[FormOptions](../modules/_core_src_models_form_options_.md#formoptions) | undefined*

• **set options**(`options`: [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) | undefined): *void*

*Defined in [core/src/services/form-context.ts:32](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) &#124; undefined |

**Returns:** *void*

___

###  schema

• **get schema**(): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined*

*Defined in [core/src/services/form-context.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L41)*

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined*

• **set schema**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined): *void*

*Defined in [core/src/services/form-context.ts:45](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/form-context.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) &#124; undefined |

**Returns:** *void*
