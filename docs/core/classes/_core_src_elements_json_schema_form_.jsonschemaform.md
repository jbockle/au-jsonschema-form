[@aujsf/core](../README.md) › ["core/src/elements/json-schema-form"](../modules/_core_src_elements_json_schema_form_.md) › [JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)

# Class: JsonSchemaForm

## Hierarchy

* **JsonSchemaForm**

## Index

### Constructors

* [constructor](_core_src_elements_json_schema_form_.jsonschemaform.md#constructor)

### Properties

* [_element](_core_src_elements_json_schema_form_.jsonschemaform.md#private-_element)
* [_formContext](_core_src_elements_json_schema_form_.jsonschemaform.md#private-_formcontext)
* [_logger](_core_src_elements_json_schema_form_.jsonschemaform.md#protected-_logger)
* [_templateRegistry](_core_src_elements_json_schema_form_.jsonschemaform.md#_templateregistry)
* [_validateHandle](_core_src_elements_json_schema_form_.jsonschemaform.md#private-_validatehandle)
* [error](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-error)
* [options](_core_src_elements_json_schema_form_.jsonschemaform.md#options)
* [schema](_core_src_elements_json_schema_form_.jsonschemaform.md#schema)
* [state](_core_src_elements_json_schema_form_.jsonschemaform.md#state)
* [themes](_core_src_elements_json_schema_form_.jsonschemaform.md#themes)
* [uiSchema](_core_src_elements_json_schema_form_.jsonschemaform.md#uischema)
* [validationResult](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-validationresult)
* [value](_core_src_elements_json_schema_form_.jsonschemaform.md#value)

### Methods

* [bind](_core_src_elements_json_schema_form_.jsonschemaform.md#bind)
* [onsubmit](_core_src_elements_json_schema_form_.jsonschemaform.md#onsubmit)
* [optionsChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#optionschanged)
* [schemaChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#schemachanged)
* [submit](_core_src_elements_json_schema_form_.jsonschemaform.md#submit)
* [uiSchemaChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#uischemachanged)
* [validate](_core_src_elements_json_schema_form_.jsonschemaform.md#validate)
* [valueChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#valuechanged)

## Constructors

###  constructor

\+ **new JsonSchemaForm**(`_element`: Element, `_formContext`: [FormContext](_core_src_services_form_context_.formcontext.md), `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)): *[JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)*

*Defined in [core/src/elements/json-schema-form.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_formContext` | [FormContext](_core_src_services_form_context_.formcontext.md) |
`_templateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |

**Returns:** *[JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)*

## Properties

### `Private` _element

• **_element**: *Element*

*Defined in [core/src/elements/json-schema-form.ts:19](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L19)*

___

### `Private` _formContext

• **_formContext**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/elements/json-schema-form.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L20)*

___

### `Protected` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:json-schema-form')

*Defined in [core/src/elements/json-schema-form.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L16)*

___

###  _templateRegistry

• **_templateRegistry**: *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Defined in [core/src/elements/json-schema-form.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L21)*

___

### `Private` _validateHandle

• **_validateHandle**: *any* = -1

*Defined in [core/src/elements/json-schema-form.ts:107](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L107)*

___

### `Optional` error

• **error**? : *any*

*Defined in [core/src/elements/json-schema-form.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L49)*

___

###  options

• **options**: *[FormOptions](../modules/_core_src_models_form_options_.md#formoptions)*

*Defined in [core/src/elements/json-schema-form.ts:45](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L45)*

___

###  schema

• **schema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/json-schema-form.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L25)*

___

###  state

• **state**: *[FormState](../modules/_core_src_elements_json_schema_form_.md#formstate)* = "initializing"

*Defined in [core/src/elements/json-schema-form.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L47)*

___

###  themes

• **themes**: *Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[]* = []

*Defined in [core/src/elements/json-schema-form.ts:42](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L42)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/json-schema-form.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L28)*

___

### `Optional` validationResult

• **validationResult**? : *[ValidationResult](../interfaces/_core_src_models_error_schema_.validationresult.md)*

*Defined in [core/src/elements/json-schema-form.ts:34](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L34)*

___

###  value

• **value**: *any*

*Defined in [core/src/elements/json-schema-form.ts:31](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L31)*

## Methods

###  bind

▸ **bind**(): *Promise‹void›*

*Defined in [core/src/elements/json-schema-form.ts:55](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L55)*

**Returns:** *Promise‹void›*

___

###  onsubmit

▸ **onsubmit**(): *void*

*Defined in [core/src/elements/json-schema-form.ts:51](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L51)*

**Returns:** *void*

___

###  optionsChanged

▸ **optionsChanged**(`newValue`: [FormOptions](../modules/_core_src_models_form_options_.md#formoptions), `_oldValue`: [FormOptions](../modules/_core_src_models_form_options_.md#formoptions)): *void*

*Defined in [core/src/elements/json-schema-form.ts:90](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) |
`_oldValue` | [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) |

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(`newValue`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `_oldValue`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *void*

*Defined in [core/src/elements/json-schema-form.ts:94](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`_oldValue` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *void*

___

###  submit

▸ **submit**(`args`: [SubmitArguments](../interfaces/_core_src_models_submit_arguments_.submitarguments.md)): *void*

*Defined in [core/src/elements/json-schema-form.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SubmitArguments](../interfaces/_core_src_models_submit_arguments_.submitarguments.md) |

**Returns:** *void*

___

###  uiSchemaChanged

▸ **uiSchemaChanged**(`newValue`: [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md), `_oldValue`: [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)): *void*

*Defined in [core/src/elements/json-schema-form.ts:99](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md) |
`_oldValue` | [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md) |

**Returns:** *void*

___

###  validate

▸ **validate**(`wait?`: undefined | number): *void*

*Defined in [core/src/elements/json-schema-form.ts:108](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`wait?` | undefined &#124; number |

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `_oldValue`: any): *void*

*Defined in [core/src/elements/json-schema-form.ts:103](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/json-schema-form.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`_oldValue` | any |

**Returns:** *void*
