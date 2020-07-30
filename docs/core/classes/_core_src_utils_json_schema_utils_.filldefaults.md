[@aujsf/core](../README.md) › ["core/src/utils/json-schema-utils"](../modules/_core_src_utils_json_schema_utils_.md) › [FillDefaults](_core_src_utils_json_schema_utils_.filldefaults.md)

# Class: FillDefaults

## Hierarchy

* **FillDefaults**

## Index

### Constructors

* [constructor](_core_src_utils_json_schema_utils_.filldefaults.md#constructor)

### Properties

* [initialValue](_core_src_utils_json_schema_utils_.filldefaults.md#private-initialvalue)
* [rootSchema](_core_src_utils_json_schema_utils_.filldefaults.md#private-rootschema)
* [value](_core_src_utils_json_schema_utils_.filldefaults.md#value)

### Methods

* [fill](_core_src_utils_json_schema_utils_.filldefaults.md#private-fill)
* [fillArray](_core_src_utils_json_schema_utils_.filldefaults.md#private-fillarray)
* [fillExtraProperties](_core_src_utils_json_schema_utils_.filldefaults.md#private-fillextraproperties)
* [fillObject](_core_src_utils_json_schema_utils_.filldefaults.md#private-fillobject)
* [getArrayValue](_core_src_utils_json_schema_utils_.filldefaults.md#private-getarrayvalue)
* [getBooleanValue](_core_src_utils_json_schema_utils_.filldefaults.md#private-getbooleanvalue)
* [getDefault](_core_src_utils_json_schema_utils_.filldefaults.md#private-getdefault)
* [getNumberValue](_core_src_utils_json_schema_utils_.filldefaults.md#private-getnumbervalue)
* [getObjectValue](_core_src_utils_json_schema_utils_.filldefaults.md#private-getobjectvalue)
* [getStringValue](_core_src_utils_json_schema_utils_.filldefaults.md#private-getstringvalue)
* [set](_core_src_utils_json_schema_utils_.filldefaults.md#private-set)

## Constructors

###  constructor

\+ **new FillDefaults**(`initialValue`: any, `rootSchema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[FillDefaults](_core_src_utils_json_schema_utils_.filldefaults.md)*

*Defined in [core/src/utils/json-schema-utils.ts:78](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`initialValue` | any |
`rootSchema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[FillDefaults](_core_src_utils_json_schema_utils_.filldefaults.md)*

## Properties

### `Private` initialValue

• **initialValue**: *any*

*Defined in [core/src/utils/json-schema-utils.ts:80](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L80)*

___

### `Private` rootSchema

• **rootSchema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/utils/json-schema-utils.ts:81](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L81)*

___

###  value

• **value**: *any*

*Defined in [core/src/utils/json-schema-utils.ts:85](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L85)*

## Methods

### `Private` fill

▸ **fill**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `segments`: string[]): *void*

*Defined in [core/src/utils/json-schema-utils.ts:87](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L87)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | - |
`segments` | string[] | [] |

**Returns:** *void*

___

### `Private` fillArray

▸ **fillArray**(`pathValue`: any[], `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), `segments`: string[]): *void*

*Defined in [core/src/utils/json-schema-utils.ts:215](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L215)*

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

*Defined in [core/src/utils/json-schema-utils.ts:189](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L189)*

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

*Defined in [core/src/utils/json-schema-utils.ts:178](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L178)*

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

*Defined in [core/src/utils/json-schema-utils.ts:138](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |

**Returns:** *any[]*

___

### `Private` getBooleanValue

▸ **getBooleanValue**(`pathValue`: any, `schema`: [JsonSchemaBoolean](../interfaces/_core_src_models_json_schema_.jsonschemaboolean.md)): *boolean*

*Defined in [core/src/utils/json-schema-utils.ts:170](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaBoolean](../interfaces/_core_src_models_json_schema_.jsonschemaboolean.md) |

**Returns:** *boolean*

___

### `Private` getDefault

▸ **getDefault**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `fallback`: any): *any*

*Defined in [core/src/utils/json-schema-utils.ts:225](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`fallback` | any |

**Returns:** *any*

___

### `Private` getNumberValue

▸ **getNumberValue**(`pathValue`: any, `schema`: [JsonSchemaNumber](../interfaces/_core_src_models_json_schema_.jsonschemanumber.md)): *number | bigint | undefined*

*Defined in [core/src/utils/json-schema-utils.ts:162](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaNumber](../interfaces/_core_src_models_json_schema_.jsonschemanumber.md) |

**Returns:** *number | bigint | undefined*

___

### `Private` getObjectValue

▸ **getObjectValue**(`pathValue`: any, `schema`: [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md)): *any*

*Defined in [core/src/utils/json-schema-utils.ts:148](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md) |

**Returns:** *any*

___

### `Private` getStringValue

▸ **getStringValue**(`pathValue`: any, `schema`: [JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md)): *string | undefined*

*Defined in [core/src/utils/json-schema-utils.ts:154](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`pathValue` | any |
`schema` | [JsonSchemaString](../interfaces/_core_src_models_json_schema_.jsonschemastring.md) |

**Returns:** *string | undefined*

___

### `Private` set

▸ **set**(`pointer`: JsonPointer, `value`: any): *void*

*Defined in [core/src/utils/json-schema-utils.ts:126](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`pointer` | JsonPointer |
`value` | any |

**Returns:** *void*
