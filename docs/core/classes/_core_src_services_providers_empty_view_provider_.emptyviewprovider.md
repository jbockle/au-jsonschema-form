[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/providers/empty-view-provider"](../modules/_core_src_services_providers_empty_view_provider_.md) › [EmptyViewProvider](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md)

# Class: EmptyViewProvider ‹**TValue**›

## Type parameters

▪ **TValue**

## Hierarchy

* [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)›

  ↳ **EmptyViewProvider**

## Index

### Constructors

* [constructor](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md#constructor)

### Properties

* [default](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md#optional-default)
* [key](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md#key)

### Accessors

* [rules](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md#rules)

### Methods

* [addRules](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md#addrules)
* [getTemplate](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md#gettemplate)

## Constructors

###  constructor

\+ **new EmptyViewProvider**(): *[EmptyViewProvider](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md)*

*Overrides [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[constructor](_core_src_services_providers_view_provider_.viewprovider.md#protected-constructor)*

*Defined in [core/src/services/providers/empty-view-provider.ts:4](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/empty-view-provider.ts#L4)*

**Returns:** *[EmptyViewProvider](_core_src_services_providers_empty_view_provider_.emptyviewprovider.md)*

## Properties

### `Optional` default

• **default**? : *undefined | string* = undefined

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[default](_core_src_services_providers_view_provider_.viewprovider.md#optional-default)*

*Defined in [core/src/services/providers/view-provider.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L20)*

___

###  key

• **key**: *never[]* = []

*Defined in [core/src/services/providers/empty-view-provider.ts:9](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/empty-view-provider.ts#L9)*

## Accessors

###  rules

• **get rules**(): *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), TValue›[]*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[rules](_core_src_services_providers_view_provider_.viewprovider.md#rules)*

*Defined in [core/src/services/providers/view-provider.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L22)*

**Returns:** *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), TValue›[]*

## Methods

###  addRules

▸ **addRules**(...`_params`: any[]): *void*

*Overrides [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[addRules](_core_src_services_providers_view_provider_.viewprovider.md#addrules)*

*Defined in [core/src/services/providers/empty-view-provider.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/empty-view-provider.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`..._params` | any[] |

**Returns:** *void*

___

###  getTemplate

▸ **getTemplate**(`model`: [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), TValue›): *string*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[getTemplate](_core_src_services_providers_view_provider_.viewprovider.md#gettemplate)*

*Defined in [core/src/services/providers/view-provider.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), TValue› |

**Returns:** *string*
