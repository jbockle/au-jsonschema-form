[@aujsf/core](../README.md) › ["core/src/elements/json-schema-form"](../modules/_core_src_elements_json_schema_form_.md) › [JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)

# Class: JsonSchemaForm

## Hierarchy

* **JsonSchemaForm**

## Index

### Constructors

* [constructor](_core_src_elements_json_schema_form_.jsonschemaform.md#constructor)

### Properties

* [_element](_core_src_elements_json_schema_form_.jsonschemaform.md#private-_element)
* [_logger](_core_src_elements_json_schema_form_.jsonschemaform.md#protected-_logger)
* [_registry](_core_src_elements_json_schema_form_.jsonschemaform.md#private-_registry)
* [_taskQueue](_core_src_elements_json_schema_form_.jsonschemaform.md#private-_taskqueue)
* [context](_core_src_elements_json_schema_form_.jsonschemaform.md#private-context)
* [error](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-error)
* [options](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-options)
* [schema](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-schema)
* [state](_core_src_elements_json_schema_form_.jsonschemaform.md#state)
* [themes](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-themes)
* [uiSchema](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-uischema)
* [validationResult](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-validationresult)
* [value](_core_src_elements_json_schema_form_.jsonschemaform.md#optional-value)

### Methods

* [bind](_core_src_elements_json_schema_form_.jsonschemaform.md#bind)
* [compile](_core_src_elements_json_schema_form_.jsonschemaform.md#private-compile)
* [onsubmit](_core_src_elements_json_schema_form_.jsonschemaform.md#onsubmit)
* [optionsChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#optionschanged)
* [schemaChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#schemachanged)
* [submit](_core_src_elements_json_schema_form_.jsonschemaform.md#submit)
* [themesChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#themeschanged)
* [uiSchemaChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#uischemachanged)
* [validate](_core_src_elements_json_schema_form_.jsonschemaform.md#validate)
* [valueChanged](_core_src_elements_json_schema_form_.jsonschemaform.md#valuechanged)

## Constructors

###  constructor

\+ **new JsonSchemaForm**(`_element`: Element, `_taskQueue`: TaskQueue, `_registry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)*

*Defined in [core/src/elements/json-schema-form.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_taskQueue` | TaskQueue |
`_registry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[JsonSchemaForm](_core_src_elements_json_schema_form_.jsonschemaform.md)*

## Properties

### `Private` _element

• **_element**: *Element*

*Defined in [core/src/elements/json-schema-form.ts:19](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L19)*

___

### `Protected` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:json-schema-form')

*Defined in [core/src/elements/json-schema-form.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L16)*

___

### `Private` _registry

• **_registry**: *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Defined in [core/src/elements/json-schema-form.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L21)*

___

### `Private` _taskQueue

• **_taskQueue**: *TaskQueue*

*Defined in [core/src/elements/json-schema-form.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L20)*

___

### `Private` context

• **context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/elements/json-schema-form.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L22)*

___

### `Optional` error

• **error**? : *any*

*Defined in [core/src/elements/json-schema-form.ts:51](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L51)*

___

### `Optional` options

• **options**? : *[FormOptions](../modules/_core_src_models_form_options_.md#formoptions)*

*Defined in [core/src/elements/json-schema-form.ts:46](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L46)*

___

### `Optional` schema

• **schema**? : *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/json-schema-form.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L26)*

___

###  state

• **state**: *[FormState](../modules/_core_src_elements_json_schema_form_.md#formstate)* = "initializing"

*Defined in [core/src/elements/json-schema-form.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L49)*

___

### `Optional` themes

• **themes**? : *Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[]* = []

*Defined in [core/src/elements/json-schema-form.ts:43](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L43)*

___

### `Optional` uiSchema

• **uiSchema**? : *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/json-schema-form.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L29)*

___

### `Optional` validationResult

• **validationResult**? : *[ValidationResult](../interfaces/_core_src_models_error_schema_.validationresult.md)*

*Defined in [core/src/elements/json-schema-form.ts:35](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L35)*

___

### `Optional` value

• **value**? : *any*

*Defined in [core/src/elements/json-schema-form.ts:32](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L32)*

## Methods

###  bind

▸ **bind**(): *void*

*Defined in [core/src/elements/json-schema-form.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L57)*

**Returns:** *void*

___

### `Private` compile

▸ **compile**(): *Promise‹void›*

*Defined in [core/src/elements/json-schema-form.ts:61](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L61)*

**Returns:** *Promise‹void›*

___

###  onsubmit

▸ **onsubmit**(): *void*

*Defined in [core/src/elements/json-schema-form.ts:53](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L53)*

**Returns:** *void*

___

###  optionsChanged

▸ **optionsChanged**(`newValue?`: [FormOptions](../modules/_core_src_models_form_options_.md#formoptions), `oldValue?`: [FormOptions](../modules/_core_src_models_form_options_.md#formoptions)): *void*

*Defined in [core/src/elements/json-schema-form.ts:96](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue?` | [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) |
`oldValue?` | [FormOptions](../modules/_core_src_models_form_options_.md#formoptions) |

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(`newValue?`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `oldValue?`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *void*

*Defined in [core/src/elements/json-schema-form.ts:101](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue?` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`oldValue?` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *void*

___

###  submit

▸ **submit**(`args`: [SubmitArguments](../interfaces/_core_src_models_submit_arguments_.submitarguments.md)): *void*

*Defined in [core/src/elements/json-schema-form.ts:38](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SubmitArguments](../interfaces/_core_src_models_submit_arguments_.submitarguments.md) |

**Returns:** *void*

___

###  themesChanged

▸ **themesChanged**(`newValue?`: Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[], `oldValue?`: Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[]): *Promise‹void›*

*Defined in [core/src/elements/json-schema-form.ts:118](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue?` | Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[] |
`oldValue?` | Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[] |

**Returns:** *Promise‹void›*

___

###  uiSchemaChanged

▸ **uiSchemaChanged**(`newValue?`: [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md), `oldValue?`: [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)): *void*

*Defined in [core/src/elements/json-schema-form.ts:113](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue?` | [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md) |
`oldValue?` | [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md) |

**Returns:** *void*

___

###  validate

▸ **validate**(): *void*

*Defined in [core/src/elements/json-schema-form.ts:138](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L138)*

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `oldValue?`: any): *void*

*Defined in [core/src/elements/json-schema-form.ts:129](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/json-schema-form.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`oldValue?` | any |

**Returns:** *void*
