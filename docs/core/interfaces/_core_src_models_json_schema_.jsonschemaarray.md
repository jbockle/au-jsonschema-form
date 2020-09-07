[@aujsf/core](../README.md) › ["core/src/models/json-schema"](../modules/_core_src_models_json_schema_.md) › [JsonSchemaArray](_core_src_models_json_schema_.jsonschemaarray.md)

# Interface: JsonSchemaArray

## Hierarchy

  ↳ [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md)

  ↳ **JsonSchemaArray**

## Indexable

* \[ **key**: *string*\]: any

## Index

### Properties

* [additionalItems](_core_src_models_json_schema_.jsonschemaarray.md#optional-additionalitems)
* [const](_core_src_models_json_schema_.jsonschemaarray.md#optional-const)
* [contains](_core_src_models_json_schema_.jsonschemaarray.md#optional-contains)
* [default](_core_src_models_json_schema_.jsonschemaarray.md#optional-default)
* [description](_core_src_models_json_schema_.jsonschemaarray.md#optional-description)
* [enum](_core_src_models_json_schema_.jsonschemaarray.md#optional-enum)
* [format](_core_src_models_json_schema_.jsonschemaarray.md#optional-format)
* [items](_core_src_models_json_schema_.jsonschemaarray.md#optional-items)
* [maxItems](_core_src_models_json_schema_.jsonschemaarray.md#optional-maxitems)
* [minItems](_core_src_models_json_schema_.jsonschemaarray.md#optional-minitems)
* [readOnly](_core_src_models_json_schema_.jsonschemaarray.md#optional-readonly)
* [title](_core_src_models_json_schema_.jsonschemaarray.md#optional-title)
* [type](_core_src_models_json_schema_.jsonschemaarray.md#type)
* [uniqueItems](_core_src_models_json_schema_.jsonschemaarray.md#optional-uniqueitems)
* [writeOnly](_core_src_models_json_schema_.jsonschemaarray.md#optional-writeonly)

## Properties

### `Optional` additionalItems

• **additionalItems**? : *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/models/json-schema.ts:58](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L58)*

___

### `Optional` const

• **const**? : *any*

*Inherited from [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[const](_core_src_models_json_schema_.jsonschemabase.md#optional-const)*

*Overrides [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[const](_core_src_models_json_schema_.jsonschemaannotations.md#optional-const)*

*Defined in [core/src/models/json-schema.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L37)*

___

### `Optional` contains

• **contains**? : *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/models/json-schema.ts:60](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L60)*

___

### `Optional` default

• **default**? : *any*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[default](_core_src_models_json_schema_.jsonschemaannotations.md#optional-default)*

*Defined in [core/src/models/json-schema.ts:31](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L31)*

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[description](_core_src_models_json_schema_.jsonschemaannotations.md#optional-description)*

*Defined in [core/src/models/json-schema.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L28)*

___

### `Optional` enum

• **enum**? : *any[][]*

*Overrides [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[enum](_core_src_models_json_schema_.jsonschemabase.md#optional-enum)*

*Defined in [core/src/models/json-schema.ts:61](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L61)*

___

### `Optional` format

• **format**? : *undefined | string*

*Inherited from [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[format](_core_src_models_json_schema_.jsonschemabase.md#optional-format)*

*Defined in [core/src/models/json-schema.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L39)*

___

### `Optional` items

• **items**? : *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)[]*

*Defined in [core/src/models/json-schema.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L57)*

___

### `Optional` maxItems

• **maxItems**? : *undefined | number*

*Defined in [core/src/models/json-schema.ts:63](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L63)*

___

### `Optional` minItems

• **minItems**? : *undefined | number*

*Defined in [core/src/models/json-schema.ts:62](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L62)*

___

### `Optional` readOnly

• **readOnly**? : *undefined | false | true*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[readOnly](_core_src_models_json_schema_.jsonschemaannotations.md#optional-readonly)*

*Defined in [core/src/models/json-schema.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L29)*

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[title](_core_src_models_json_schema_.jsonschemaannotations.md#optional-title)*

*Defined in [core/src/models/json-schema.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L27)*

___

###  type

• **type**: *"array"*

*Overrides [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[type](_core_src_models_json_schema_.jsonschemabase.md#optional-type)*

*Defined in [core/src/models/json-schema.ts:56](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L56)*

___

### `Optional` uniqueItems

• **uniqueItems**? : *undefined | false | true*

*Defined in [core/src/models/json-schema.ts:59](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L59)*

___

### `Optional` writeOnly

• **writeOnly**? : *undefined | false | true*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[writeOnly](_core_src_models_json_schema_.jsonschemaannotations.md#optional-writeonly)*

*Defined in [core/src/models/json-schema.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/json-schema.ts#L30)*
