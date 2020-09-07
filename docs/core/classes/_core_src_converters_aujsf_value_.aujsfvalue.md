[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/converters/aujsf-value"](../modules/_core_src_converters_aujsf_value_.md) › [AujsfValue](_core_src_converters_aujsf_value_.aujsfvalue.md)

# Class: AujsfValue

## Hierarchy

* **AujsfValue**

## Index

### Constructors

* [constructor](_core_src_converters_aujsf_value_.aujsfvalue.md#constructor)

### Methods

* [fromView](_core_src_converters_aujsf_value_.aujsfvalue.md#fromview)
* [toView](_core_src_converters_aujsf_value_.aujsfvalue.md#toview)

## Constructors

###  constructor

\+ **new AujsfValue**(): *[AujsfValue](_core_src_converters_aujsf_value_.aujsfvalue.md)*

*Defined in [core/src/converters/aujsf-value.ts:6](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/converters/aujsf-value.ts#L6)*

**Returns:** *[AujsfValue](_core_src_converters_aujsf_value_.aujsfvalue.md)*

## Methods

###  fromView

▸ **fromView**(`value`: string, `type`: [ValueType](../modules/_core_src_converters_aujsf_value_.md#valuetype)): *number | string | undefined*

*Defined in [core/src/converters/aujsf-value.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/converters/aujsf-value.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`type` | [ValueType](../modules/_core_src_converters_aujsf_value_.md#valuetype) | "string" |

**Returns:** *number | string | undefined*

___

###  toView

▸ **toView**(`value`: string, `type`: [ValueType](../modules/_core_src_converters_aujsf_value_.md#valuetype), `toLocal`: boolean): *string*

*Defined in [core/src/converters/aujsf-value.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/converters/aujsf-value.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`type` | [ValueType](../modules/_core_src_converters_aujsf_value_.md#valuetype) | "string" |
`toLocal` | boolean | false |

**Returns:** *string*
