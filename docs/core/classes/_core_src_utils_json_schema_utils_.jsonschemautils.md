[@aujsf/core](../README.md) › ["core/src/utils/json-schema-utils"](../modules/_core_src_utils_json_schema_utils_.md) › [JsonSchemaUtils](_core_src_utils_json_schema_utils_.jsonschemautils.md)

# Class: JsonSchemaUtils

## Hierarchy

* **JsonSchemaUtils**

## Index

### Methods

* [fillDefaults](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-filldefaults)
* [getItemJsonSchema](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-getitemjsonschema)
* [isJsonSchemaAllOf](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaallof)
* [isJsonSchemaArray](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaarray)
* [isJsonSchemaBoolean](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaboolean)
* [isJsonSchemaNumber](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemanumber)
* [isJsonSchemaObject](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaobject)
* [isJsonSchemaString](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemastring)
* [isNullable](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isnullable)
* [isSchemaType](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-private-isschematype)
* [mergeAllOf](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-mergeallof)
* [resolveSchema](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-resolveschema)
* [resolveSchemas](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-resolveschemas)

## Methods

### `Static` fillDefaults

▸ **fillDefaults**(`value`: any, `schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *void*

*Defined in [core/src/utils/json-schema-utils.ts:94](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *void*

___

### `Static` getItemJsonSchema

▸ **getItemJsonSchema**(`index`: number, `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined*

*Defined in [core/src/utils/json-schema-utils.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined*

___

### `Static` isJsonSchemaAllOf

▸ **isJsonSchemaAllOf**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaAllOf*

*Defined in [core/src/utils/json-schema-utils.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaAllOf*

___

### `Static` isJsonSchemaArray

▸ **isJsonSchemaArray**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaArray*

*Defined in [core/src/utils/json-schema-utils.ts:33](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaArray*

___

### `Static` isJsonSchemaBoolean

▸ **isJsonSchemaBoolean**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaBoolean*

*Defined in [core/src/utils/json-schema-utils.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaBoolean*

___

### `Static` isJsonSchemaNumber

▸ **isJsonSchemaNumber**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaNumber*

*Defined in [core/src/utils/json-schema-utils.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaNumber*

___

### `Static` isJsonSchemaObject

▸ **isJsonSchemaObject**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaObject*

*Defined in [core/src/utils/json-schema-utils.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaObject*

___

### `Static` isJsonSchemaString

▸ **isJsonSchemaString**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaString*

*Defined in [core/src/utils/json-schema-utils.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaString*

___

### `Static` isNullable

▸ **isNullable**(`type`: [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype)[]): *type is []*

*Defined in [core/src/utils/json-schema-utils.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype)[] |

**Returns:** *type is []*

___

### `Static` `Private` isSchemaType

▸ **isSchemaType**‹**TSchemaType**›(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `type`: [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype)): *schema is TSchemaType*

*Defined in [core/src/utils/json-schema-utils.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L41)*

**Type parameters:**

▪ **TSchemaType**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`type` | [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype) |

**Returns:** *schema is TSchemaType*

___

### `Static` mergeAllOf

▸ **mergeAllOf**(`schema`: [JsonSchemaAllOf](../interfaces/_core_src_models_json_schema_.jsonschemaallof.md), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/utils/json-schema-utils.ts:84](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchemaAllOf](../interfaces/_core_src_models_json_schema_.jsonschemaallof.md) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

___

### `Static` resolveSchema

▸ **resolveSchema**(`schemaOrSchemas`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/utils/json-schema-utils.ts:72](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaOrSchemas` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

___

### `Static` resolveSchemas

▸ **resolveSchemas**(`schemas`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[], `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[]*

*Defined in [core/src/utils/json-schema-utils.ts:68](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/utils/json-schema-utils.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`schemas` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[] |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[]*
