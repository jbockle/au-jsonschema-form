[@aujsf/core](../README.md) › ["core/src/utils/form-utils"](../modules/_core_src_utils_form_utils_.md) › [FormUtils](_core_src_utils_form_utils_.formutils.md)

# Class: FormUtils

## Hierarchy

* **FormUtils**

## Index

### Methods

* [getItemUiSchema](_core_src_utils_form_utils_.formutils.md#static-getitemuischema)
* [themeIsValid](_core_src_utils_form_utils_.formutils.md#static-themeisvalid)
* [useThemes](_core_src_utils_form_utils_.formutils.md#static-usethemes)

### Object literals

* [nulltheme](_core_src_utils_form_utils_.formutils.md#static-private-readonly-nulltheme)

## Methods

### `Static` getItemUiSchema

▸ **getItemUiSchema**(`index`: number, `uiSchema`: [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)): *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/utils/form-utils.ts:40](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`uiSchema` | [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md) |

**Returns:** *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

___

### `Static` themeIsValid

▸ **themeIsValid**(`formTemplateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)): *void*

*Defined in [core/src/utils/form-utils.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`formTemplateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |

**Returns:** *void*

___

### `Static` useThemes

▸ **useThemes**(`formTemplateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), ...`themes`: Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[]): *Promise‹void›*

*Defined in [core/src/utils/form-utils.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`formTemplateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`...themes` | Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[] |

**Returns:** *Promise‹void›*

## Object literals

### `Static` `Private` `Readonly` nulltheme

### ▪ **nulltheme**: *object*

*Defined in [core/src/utils/form-utils.ts:7](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L7)*

###  all-of

• **all-of**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L14)*

###  array

• **array**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L16)*

###  array-item

• **array-item**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:9](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L9)*

###  array-tabs

• **array-tabs**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:8](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L8)*

###  checkbox

• **checkbox**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L17)*

###  number-input

• **number-input**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:10](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L10)*

###  object

• **object**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L18)*

###  one-of

• **one-of**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L15)*

###  string-input

• **string-input**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L11)*

###  string-radio

• **string-radio**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L12)*

###  string-select

• **string-select**: *never* = null!

*Defined in [core/src/utils/form-utils.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/form-utils.ts#L13)*
