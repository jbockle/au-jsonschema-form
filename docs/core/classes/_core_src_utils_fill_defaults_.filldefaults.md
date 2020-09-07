[@aujsf/core](../README.md) › ["core/src/utils/fill-defaults"](../modules/_core_src_utils_fill_defaults_.md) › [FillDefaults](_core_src_utils_fill_defaults_.filldefaults.md)

# Class: FillDefaults

## Hierarchy

* **FillDefaults**

## Index

### Constructors

* [constructor](_core_src_utils_fill_defaults_.filldefaults.md#constructor)

### Properties

* [rootSchema](_core_src_utils_fill_defaults_.filldefaults.md#private-rootschema)
* [value](_core_src_utils_fill_defaults_.filldefaults.md#value)

### Methods

* [fill](_core_src_utils_fill_defaults_.filldefaults.md#private-fill)
* [fillArray](_core_src_utils_fill_defaults_.filldefaults.md#private-fillarray)
* [fillExtraProperties](_core_src_utils_fill_defaults_.filldefaults.md#private-fillextraproperties)
* [fillObject](_core_src_utils_fill_defaults_.filldefaults.md#private-fillobject)
* [getArrayValue](_core_src_utils_fill_defaults_.filldefaults.md#private-getarrayvalue)
* [getBooleanValue](_core_src_utils_fill_defaults_.filldefaults.md#private-getbooleanvalue)
* [getDefault](_core_src_utils_fill_defaults_.filldefaults.md#private-getdefault)
* [getNumberValue](_core_src_utils_fill_defaults_.filldefaults.md#private-getnumbervalue)
* [getObjectValue](_core_src_utils_fill_defaults_.filldefaults.md#private-getobjectvalue)
* [getStringValue](_core_src_utils_fill_defaults_.filldefaults.md#private-getstringvalue)
* [set](_core_src_utils_fill_defaults_.filldefaults.md#private-set)

## Constructors

###  constructor

\+ **new FillDefaults**(`value`: any, `rootSchema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[FillDefaults](_core_src_utils_fill_defaults_.filldefaults.md)*

*Defined in [core/src/utils/fill-defaults.ts:9](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`rootSchema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[FillDefaults](_core_src_utils_fill_defaults_.filldefaults.md)*

## Properties

### `Private` rootSchema

• **rootSchema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/utils/fill-defaults.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L12)*

___

###  value

• **value**: *any*

*Defined in [core/src/utils/fill-defaults.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L11)*

## Methods

### `Private` fill

▸ **fill**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `segments`: string[]): *void*

*Defined in [core/src/utils/fill-defaults.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | - |
`segments` | string[] | [] |

**Returns:** *void*

___

### `Private` fillArray

▸ **fillArray**(`pathValue`: any[], `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), `segments`: string[]): *void*

*Defined in [core/src/utils/fill-defaults.ts:156](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any[] |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |
`segments` | string[] |

**Returns:** *void*

___

### `Private` fillExtraProperties

▸ **fillExtraProperties**(`pathValue`: any, `schema`: [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), `segments`: string[]): *void*

*Defined in [core/src/utils/fill-defaults.ts:130](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md) |
`segments` | string[] |

**Returns:** *void*

___

### `Private` fillObject

▸ **fillObject**(`pathValue`: any, `schema`: [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md), `segments`: string[]): *void*

*Defined in [core/src/utils/fill-defaults.ts:118](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md) |
`segments` | string[] |

**Returns:** *void*

___

### `Private` getArrayValue

▸ **getArrayValue**(`pathValue`: any, `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md)): *any[]*

*Defined in [core/src/utils/fill-defaults.ts:73](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |

**Returns:** *any[]*

___

### `Private` getBooleanValue

▸ **getBooleanValue**(`pathValue`: any, `schema`: [JsonSchemaBoolean](../interfaces/_core_src_models_json_schema_.jsonschemaboolean.md)): *boolean*

*Defined in [core/src/utils/fill-defaults.ts:109](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaBoolean](../interfaces/_core_src_models_json_schema_.jsonschemaboolean.md) |

**Returns:** *boolean*

___

### `Private` getDefault

▸ **getDefault**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `fallback`: any): *any*

*Defined in [core/src/utils/fill-defaults.ts:167](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`fallback` | any |

**Returns:** *any*

___

### `Private` getNumberValue

▸ **getNumberValue**(`pathValue`: any, `schema`: [JsonSchemaNumber](../interfaces/_core_src_models_json_schema_.jsonschemanumber.md)): *number | bigint | undefined*

*Defined in [core/src/utils/fill-defaults.ts:100](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaNumber](../interfaces/_core_src_models_json_schema_.jsonschemanumber.md) |

**Returns:** *number | bigint | undefined*

___

### `Private` getObjectValue

▸ **getObjectValue**(`pathValue`: any, `schema`: [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md)): *any*

*Defined in [core/src/utils/fill-defaults.ts:84](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md) |

**Returns:** *any*

___

### `Private` getStringValue

▸ **getStringValue**(`pathValue`: any, `schema`: [JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md)): *string | undefined*

*Defined in [core/src/utils/fill-defaults.ts:91](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md) |

**Returns:** *string | undefined*

___

### `Private` set

▸ **set**(`pointer`: JsonPointer, `value`: any): *void*

*Defined in [core/src/utils/fill-defaults.ts:60](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/fill-defaults.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`pointer` | JsonPointer |
`value` | any |

**Returns:** *void*
