[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/providers/all-of-view-provider"](../modules/_core_src_services_providers_all_of_view_provider_.md) › [AllOfViewProvider](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md)

# Class: AllOfViewProvider

## Hierarchy

* [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string›

  ↳ **AllOfViewProvider**

## Index

### Constructors

* [constructor](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md#constructor)

### Properties

* [default](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md#optional-default)

### Accessors

* [rules](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md#rules)

### Methods

* [addRules](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md#addrules)
* [getTemplate](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md#gettemplate)

## Constructors

###  constructor

\+ **new AllOfViewProvider**(): *[AllOfViewProvider](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md)*

*Overrides [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[constructor](_core_src_services_providers_view_provider_.viewprovider.md#protected-constructor)*

*Defined in [core/src/services/providers/all-of-view-provider.ts:4](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/all-of-view-provider.ts#L4)*

**Returns:** *[AllOfViewProvider](_core_src_services_providers_all_of_view_provider_.allofviewprovider.md)*

## Properties

### `Optional` default

• **default**? : *undefined | string* = undefined

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[default](_core_src_services_providers_view_provider_.viewprovider.md#optional-default)*

*Defined in [core/src/services/providers/view-provider.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L20)*

## Accessors

###  rules

• **get rules**(): *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string›[]*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[rules](_core_src_services_providers_view_provider_.viewprovider.md#rules)*

*Defined in [core/src/services/providers/view-provider.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L22)*

**Returns:** *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string›[]*

## Methods

###  addRules

▸ **addRules**(...`rules`: [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string›[]): *void*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[addRules](_core_src_services_providers_view_provider_.viewprovider.md#addrules)*

*Defined in [core/src/services/providers/view-provider.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`...rules` | [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string›[] |

**Returns:** *void*

___

###  getTemplate

▸ **getTemplate**(`model`: [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string›): *string*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[getTemplate](_core_src_services_providers_view_provider_.viewprovider.md#gettemplate)*

*Defined in [core/src/services/providers/view-provider.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/services/providers/view-provider.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md), string› |

**Returns:** *string*
