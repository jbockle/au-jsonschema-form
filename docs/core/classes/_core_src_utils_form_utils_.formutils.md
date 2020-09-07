[@aujsf/core](../README.md) › ["core/src/utils/form-utils"](../modules/_core_src_utils_form_utils_.md) › [FormUtils](_core_src_utils_form_utils_.formutils.md)

# Class: FormUtils

## Hierarchy

* **FormUtils**

## Index

### Methods

* [getItemUiSchema](_core_src_utils_form_utils_.formutils.md#static-getitemuischema)
* [themeIsValid](_core_src_utils_form_utils_.formutils.md#static-themeisvalid)
* [useThemes](_core_src_utils_form_utils_.formutils.md#static-usethemes)

## Methods

### `Static` getItemUiSchema

▸ **getItemUiSchema**(`index`: number, `uiSchema`: [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)): *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/utils/form-utils.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/form-utils.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`uiSchema` | [UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md) |

**Returns:** *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

___

### `Static` themeIsValid

▸ **themeIsValid**(`formTemplateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)): *void*

*Defined in [core/src/utils/form-utils.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/form-utils.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`formTemplateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |

**Returns:** *void*

___

### `Static` useThemes

▸ **useThemes**(`formTemplateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), ...`themes`: Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[]): *Promise‹void›*

*Defined in [core/src/utils/form-utils.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/form-utils.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`formTemplateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`...themes` | Partial‹[FormTheme](../interfaces/_core_src_models_form_template_.formtheme.md)›[] |

**Returns:** *Promise‹void›*
