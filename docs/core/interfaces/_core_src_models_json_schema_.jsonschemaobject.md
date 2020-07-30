[@aujsf/core](../README.md) › ["core/src/models/json-schema"](../modules/_core_src_models_json_schema_.md) › [JsonSchemaObject](_core_src_models_json_schema_.jsonschemaobject.md)

# Interface: JsonSchemaObject

## Hierarchy

  ↳ [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md)

  ↳ **JsonSchemaObject**

## Indexable

* \[ **key**: *string*\]: any

## Index

### Properties

* [additionalProperties](_core_src_models_json_schema_.jsonschemaobject.md#optional-additionalproperties)
* [const](_core_src_models_json_schema_.jsonschemaobject.md#optional-const)
* [default](_core_src_models_json_schema_.jsonschemaobject.md#optional-default)
* [dependentRequired](_core_src_models_json_schema_.jsonschemaobject.md#optional-dependentrequired)
* [description](_core_src_models_json_schema_.jsonschemaobject.md#optional-description)
* [enum](_core_src_models_json_schema_.jsonschemaobject.md#optional-enum)
* [format](_core_src_models_json_schema_.jsonschemaobject.md#optional-format)
* [maxProperties](_core_src_models_json_schema_.jsonschemaobject.md#optional-maxproperties)
* [minProperties](_core_src_models_json_schema_.jsonschemaobject.md#optional-minproperties)
* [patternProperties](_core_src_models_json_schema_.jsonschemaobject.md#optional-patternproperties)
* [properties](_core_src_models_json_schema_.jsonschemaobject.md#optional-properties)
* [readOnly](_core_src_models_json_schema_.jsonschemaobject.md#optional-readonly)
* [required](_core_src_models_json_schema_.jsonschemaobject.md#optional-required)
* [title](_core_src_models_json_schema_.jsonschemaobject.md#optional-title)
* [type](_core_src_models_json_schema_.jsonschemaobject.md#type)
* [writeOnly](_core_src_models_json_schema_.jsonschemaobject.md#optional-writeonly)

## Properties

### `Optional` additionalProperties

• **additionalProperties**? : *boolean | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/models/json-schema.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L47)*

___

### `Optional` const

• **const**? : *any*

*Inherited from [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[const](_core_src_models_json_schema_.jsonschemabase.md#optional-const)*

*Overrides [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[const](_core_src_models_json_schema_.jsonschemaannotations.md#optional-const)*

*Defined in [core/src/models/json-schema.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L37)*

___

### `Optional` default

• **default**? : *any*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[default](_core_src_models_json_schema_.jsonschemaannotations.md#optional-default)*

*Defined in [core/src/models/json-schema.ts:31](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L31)*

___

### `Optional` dependentRequired

• **dependentRequired**? : *Record‹string, string[]›*

*Defined in [core/src/models/json-schema.ts:52](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L52)*

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[description](_core_src_models_json_schema_.jsonschemaannotations.md#optional-description)*

*Defined in [core/src/models/json-schema.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L28)*

___

### `Optional` enum

• **enum**? : *Record‹string, any›[]*

*Overrides [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[enum](_core_src_models_json_schema_.jsonschemabase.md#optional-enum)*

*Defined in [core/src/models/json-schema.ts:51](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L51)*

___

### `Optional` format

• **format**? : *undefined | string*

*Inherited from [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[format](_core_src_models_json_schema_.jsonschemabase.md#optional-format)*

*Defined in [core/src/models/json-schema.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L39)*

___

### `Optional` maxProperties

• **maxProperties**? : *undefined | number*

*Defined in [core/src/models/json-schema.ts:48](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L48)*

___

### `Optional` minProperties

• **minProperties**? : *undefined | number*

*Defined in [core/src/models/json-schema.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L49)*

___

### `Optional` patternProperties

• **patternProperties**? : *undefined | object*

*Defined in [core/src/models/json-schema.ts:46](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L46)*

___

### `Optional` properties

• **properties**? : *undefined | object*

*Defined in [core/src/models/json-schema.ts:45](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L45)*

___

### `Optional` readOnly

• **readOnly**? : *undefined | false | true*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[readOnly](_core_src_models_json_schema_.jsonschemaannotations.md#optional-readonly)*

*Defined in [core/src/models/json-schema.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L29)*

___

### `Optional` required

• **required**? : *string[]*

*Defined in [core/src/models/json-schema.ts:50](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L50)*

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[title](_core_src_models_json_schema_.jsonschemaannotations.md#optional-title)*

*Defined in [core/src/models/json-schema.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L27)*

___

###  type

• **type**: *"object"*

*Overrides [JsonSchemaBase](_core_src_models_json_schema_.jsonschemabase.md).[type](_core_src_models_json_schema_.jsonschemabase.md#optional-type)*

*Defined in [core/src/models/json-schema.ts:44](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L44)*

___

### `Optional` writeOnly

• **writeOnly**? : *undefined | false | true*

*Inherited from [JsonSchemaAnnotations](_core_src_models_json_schema_.jsonschemaannotations.md).[writeOnly](_core_src_models_json_schema_.jsonschemaannotations.md#optional-writeonly)*

*Defined in [core/src/models/json-schema.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/models/json-schema.ts#L30)*
