[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/providers/view-provider"](../modules/_core_src_services_providers_view_provider_.md) › [ProviderRule](_core_src_services_providers_view_provider_.providerrule.md)

# Interface: ProviderRule ‹**TSchema, TValue**›

## Type parameters

▪ **TSchema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

▪ **TValue**

## Hierarchy

* **ProviderRule**

## Index

### Properties

* [predicate](_core_src_services_providers_view_provider_.providerrule.md#predicate)
* [priority](_core_src_services_providers_view_provider_.providerrule.md#optional-priority)
* [view](_core_src_services_providers_view_provider_.providerrule.md#view)

## Properties

###  predicate

• **predicate**: *function*

*Defined in [core/src/services/providers/view-provider.ts:7](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L7)*

#### Type declaration:

▸ (`model`: [AujsfBase](../classes/_core_src_elements_aujsf_base_.aujsfbase.md)‹TSchema, TValue›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [AujsfBase](../classes/_core_src_elements_aujsf_base_.aujsfbase.md)‹TSchema, TValue› |

___

### `Optional` priority

• **priority**? : *undefined | number*

*Defined in [core/src/services/providers/view-provider.ts:6](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L6)*

___

###  view

• **view**: *string*

*Defined in [core/src/services/providers/view-provider.ts:5](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/providers/view-provider.ts#L5)*
