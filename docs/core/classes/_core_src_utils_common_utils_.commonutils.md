[@aujsf/core](../README.md) › ["core/src/utils/common-utils"](../modules/_core_src_utils_common_utils_.md) › [CommonUtils](_core_src_utils_common_utils_.commonutils.md)

# Class: CommonUtils

## Hierarchy

* **CommonUtils**

## Index

### Properties

* [merge](_core_src_utils_common_utils_.commonutils.md#static-merge)
* [mergeAll](_core_src_utils_common_utils_.commonutils.md#static-mergeall)

### Methods

* [clone](_core_src_utils_common_utils_.commonutils.md#static-clone)
* [fillTemplate](_core_src_utils_common_utils_.commonutils.md#static-filltemplate)
* [notNullOrUndefined](_core_src_utils_common_utils_.commonutils.md#static-notnullorundefined)
* [startCase](_core_src_utils_common_utils_.commonutils.md#static-startcase)

## Properties

### `Static` merge

▪ **merge**: *[merge](../modules/_core_src_utils_merge_.md#merge)* = merge

*Defined in [core/src/utils/common-utils.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/common-utils.ts#L25)*

___

### `Static` mergeAll

▪ **mergeAll**: *[mergeAll](../modules/_core_src_utils_merge_.md#mergeall)* = mergeAll

*Defined in [core/src/utils/common-utils.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/common-utils.ts#L27)*

## Methods

### `Static` clone

▸ **clone**‹**T**›(`item`: T): *T*

*Defined in [core/src/utils/common-utils.ts:4](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/common-utils.ts#L4)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *T*

___

### `Static` fillTemplate

▸ **fillTemplate**(`templateString`: string, `templateVars`: any): *string*

*Defined in [core/src/utils/common-utils.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/common-utils.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`templateString` | string |
`templateVars` | any |

**Returns:** *string*

___

### `Static` notNullOrUndefined

▸ **notNullOrUndefined**‹**T**›(`item`: T | undefined): *item is T*

*Defined in [core/src/utils/common-utils.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/common-utils.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`item` | T &#124; undefined |

**Returns:** *item is T*

___

### `Static` startCase

▸ **startCase**(`text`: string): *string*

*Defined in [core/src/utils/common-utils.ts:8](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/utils/common-utils.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string*
