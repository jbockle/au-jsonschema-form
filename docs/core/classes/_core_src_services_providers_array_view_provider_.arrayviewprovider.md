[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/providers/array-view-provider"](../modules/_core_src_services_providers_array_view_provider_.md) › [ArrayViewProvider](_core_src_services_providers_array_view_provider_.arrayviewprovider.md)

# Class: ArrayViewProvider

## Hierarchy

* [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›

  ↳ **ArrayViewProvider**

## Index

### Constructors

* [constructor](_core_src_services_providers_array_view_provider_.arrayviewprovider.md#constructor)

### Properties

* [default](_core_src_services_providers_array_view_provider_.arrayviewprovider.md#optional-default)

### Accessors

* [rules](_core_src_services_providers_array_view_provider_.arrayviewprovider.md#rules)

### Methods

* [addRules](_core_src_services_providers_array_view_provider_.arrayviewprovider.md#addrules)
* [getTemplate](_core_src_services_providers_array_view_provider_.arrayviewprovider.md#gettemplate)

## Constructors

###  constructor

\+ **new ArrayViewProvider**(): *[ArrayViewProvider](_core_src_services_providers_array_view_provider_.arrayviewprovider.md)*

*Overrides void*

*Defined in [core/src/services/providers/array-view-provider.ts:5](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/array-view-provider.ts#L5)*

**Returns:** *[ArrayViewProvider](_core_src_services_providers_array_view_provider_.arrayviewprovider.md)*

## Properties

### `Optional` default

• **default**? : *undefined | string* = undefined

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[default](_core_src_services_providers_view_provider_.viewprovider.md#optional-default)*

*Defined in [core/src/services/providers/view-provider.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L20)*

## Accessors

###  rules

• **get rules**(): *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›[]*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[rules](_core_src_services_providers_view_provider_.viewprovider.md#rules)*

*Defined in [core/src/services/providers/view-provider.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L22)*

**Returns:** *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›[]*

## Methods

###  addRules

▸ **addRules**(...`rules`: [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›[]): *void*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[addRules](_core_src_services_providers_view_provider_.viewprovider.md#addrules)*

*Defined in [core/src/services/providers/view-provider.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`...rules` | [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›[] |

**Returns:** *void*

___

###  getTemplate

▸ **getTemplate**(`model`: [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›): *string*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[getTemplate](_core_src_services_providers_view_provider_.viewprovider.md#gettemplate)*

*Defined in [core/src/services/providers/view-provider.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]› |

**Returns:** *string*
