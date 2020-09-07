[@aujsf/core](../README.md) › ["core/src/services/providers/object-view-provider"](../modules/_core_src_services_providers_object_view_provider_.md) › [ObjectViewProvider](_core_src_services_providers_object_view_provider_.objectviewprovider.md)

# Class: ObjectViewProvider

## Hierarchy

* [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any››

  ↳ **ObjectViewProvider**

## Index

### Constructors

* [constructor](_core_src_services_providers_object_view_provider_.objectviewprovider.md#constructor)

### Properties

* [default](_core_src_services_providers_object_view_provider_.objectviewprovider.md#optional-default)

### Accessors

* [rules](_core_src_services_providers_object_view_provider_.objectviewprovider.md#rules)

### Methods

* [addRules](_core_src_services_providers_object_view_provider_.objectviewprovider.md#addrules)
* [getTemplate](_core_src_services_providers_object_view_provider_.objectviewprovider.md#gettemplate)

## Constructors

###  constructor

\+ **new ObjectViewProvider**(): *[ObjectViewProvider](_core_src_services_providers_object_view_provider_.objectviewprovider.md)*

*Overrides [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[constructor](_core_src_services_providers_view_provider_.viewprovider.md#protected-constructor)*

*Defined in [core/src/services/providers/object-view-provider.ts:4](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/services/providers/object-view-provider.ts#L4)*

**Returns:** *[ObjectViewProvider](_core_src_services_providers_object_view_provider_.objectviewprovider.md)*

## Properties

### `Optional` default

• **default**? : *undefined | string* = undefined

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[default](_core_src_services_providers_view_provider_.viewprovider.md#optional-default)*

*Defined in [core/src/services/providers/view-provider.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/services/providers/view-provider.ts#L20)*

## Accessors

###  rules

• **get rules**(): *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any››[]*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[rules](_core_src_services_providers_view_provider_.viewprovider.md#rules)*

*Defined in [core/src/services/providers/view-provider.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/services/providers/view-provider.ts#L22)*

**Returns:** *[ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any››[]*

## Methods

###  addRules

▸ **addRules**(...`rules`: [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any››[]): *void*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[addRules](_core_src_services_providers_view_provider_.viewprovider.md#addrules)*

*Defined in [core/src/services/providers/view-provider.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/services/providers/view-provider.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`...rules` | [ProviderRule](../interfaces/_core_src_services_providers_view_provider_.providerrule.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any››[] |

**Returns:** *void*

___

###  getTemplate

▸ **getTemplate**(`model`: [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any››): *string*

*Inherited from [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md).[getTemplate](_core_src_services_providers_view_provider_.viewprovider.md#gettemplate)*

*Defined in [core/src/services/providers/view-provider.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/services/providers/view-provider.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), Record‹string, any›› |

**Returns:** *string*
