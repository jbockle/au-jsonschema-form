[@aujsf/core](../README.md) › ["core/src/utils/json-schema-utils"](../modules/_core_src_utils_json_schema_utils_.md) › [JsonSchemaUtils](_core_src_utils_json_schema_utils_.jsonschemautils.md)

# Class: JsonSchemaUtils

## Hierarchy

* **JsonSchemaUtils**

## Index

### Methods

* [fillDefaults](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-filldefaults)
* [getItemJsonSchema](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-getitemjsonschema)
* [isJsonSchemaArray](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaarray)
* [isJsonSchemaBoolean](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaboolean)
* [isJsonSchemaNumber](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemanumber)
* [isJsonSchemaObject](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemaobject)
* [isJsonSchemaString](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isjsonschemastring)
* [isNullable](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-isnullable)
* [isSchemaType](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-private-isschematype)
* [resolveSchema](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-resolveschema)
* [resolveSchemas](_core_src_utils_json_schema_utils_.jsonschemautils.md#static-resolveschemas)

## Methods

### `Static` fillDefaults

▸ **fillDefaults**(`value`: any, `schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *any*

*Defined in [core/src/utils/json-schema-utils.ts:75](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *any*

___

### `Static` getItemJsonSchema

▸ **getItemJsonSchema**(`index`: number, `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined*

*Defined in [core/src/utils/json-schema-utils.ts:44](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | undefined*

___

### `Static` isJsonSchemaArray

▸ **isJsonSchemaArray**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaArray*

*Defined in [core/src/utils/json-schema-utils.ts:32](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaArray*

___

### `Static` isJsonSchemaBoolean

▸ **isJsonSchemaBoolean**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaBoolean*

*Defined in [core/src/utils/json-schema-utils.ts:24](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaBoolean*

___

### `Static` isJsonSchemaNumber

▸ **isJsonSchemaNumber**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaNumber*

*Defined in [core/src/utils/json-schema-utils.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaNumber*

___

### `Static` isJsonSchemaObject

▸ **isJsonSchemaObject**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaObject*

*Defined in [core/src/utils/json-schema-utils.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaObject*

___

### `Static` isJsonSchemaString

▸ **isJsonSchemaString**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *schema is JsonSchemaString*

*Defined in [core/src/utils/json-schema-utils.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *schema is JsonSchemaString*

___

### `Static` isNullable

▸ **isNullable**(`type`: [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype)[]): *type is ["null", JsonSchemaType]*

*Defined in [core/src/utils/json-schema-utils.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype)[] |

**Returns:** *type is ["null", JsonSchemaType]*

___

### `Static` `Private` isSchemaType

▸ **isSchemaType**‹**TSchemaType**›(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `type`: [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype)): *schema is TSchemaType*

*Defined in [core/src/utils/json-schema-utils.ts:36](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L36)*

**Type parameters:**

▪ **TSchemaType**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`type` | [JsonSchemaType](../modules/_core_src_models_json_schema_.md#jsonschematype) |

**Returns:** *schema is TSchemaType*

___

### `Static` resolveSchema

▸ **resolveSchema**(`schemaOrSchemas`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/utils/json-schema-utils.ts:67](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaOrSchemas` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

___

### `Static` resolveSchemas

▸ **resolveSchemas**(`schemas`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[], `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[]*

*Defined in [core/src/utils/json-schema-utils.ts:63](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/json-schema-utils.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`schemas` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[] |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[]*
