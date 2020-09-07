[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/providers/view-provider"](../modules/_core_src_services_providers_view_provider_.md) › [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)

# Class: ViewProvider ‹**TSchema, TValue**›

## Type parameters

▪ **TSchema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

▪ **TValue**

## Hierarchy

* **ViewProvider**

  ↳ [AllOfViewProvider](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md)

  ↳ [OneOfViewProvider](_core_src_services_providers_one_of_view_provider_.oneofviewprovider.md)

  ↳ [ArrayViewProvider](_core_src_services_providers_array_view_provider_.arrayviewprovider.md)

  ↳ [ObjectViewProvider](_core_src_services_providers_object_view_provider_.objectviewprovider.md)

  ↳ [BooleanViewProvider](_core_src_services_providers_boolean_view_provider_.booleanviewprovider.md)

  ↳ [NumberViewProvider](_core_src_services_providers_number_view_provider_.numberviewprovider.md)

  ↳ [StringViewProvider](_core_src_services_providers_string_view_provider_.stringviewprovider.md)

  ↳ [EmptyViewProvider](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md)

## Index

### Properties

* [default](_core_src_services_providers_view_provider_.viewprovider.md#optional-default)

### Accessors

* [rules](_core_src_services_providers_view_provider_.viewprovider.md#rules)

### Methods

* [addRules](_core_src_services_providers_view_provider_.viewprovider.md#addrules)
* [getTemplate](_core_src_services_providers_view_provider_.viewprovider.md#gettemplate)

## Properties

### `Optional` default

• **default**? : *undefined | string* = undefined

*Defined in [core/src/services/providers/view-provider.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L20)*

## Accessors

###  rules

• **get rules**(): *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹TSchema, TValue›[]*

*Defined in [core/src/services/providers/view-provider.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L22)*

**Returns:** *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹TSchema, TValue›[]*

## Methods

###  addRules

▸ **addRules**(...`rules`: [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹TSchema, TValue›[]): *void*

*Defined in [core/src/services/providers/view-provider.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`...rules` | [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹TSchema, TValue›[] |

**Returns:** *void*

___

###  getTemplate

▸ **getTemplate**(`model`: [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹TSchema, TValue›): *string*

*Defined in [core/src/services/providers/view-provider.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹TSchema, TValue› |

**Returns:** *string*
