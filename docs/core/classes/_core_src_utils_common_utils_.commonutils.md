[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/utils/common-utils"](../modules/_core_src_utils_common_utils_.md) › [CommonUtils](_core_src_utils_common_utils_.commonutils.md)

# Class: CommonUtils

## Hierarchy

* **CommonUtils**

## Index

### Properties

* [merge](_core_src_utils_common_utils_.commonutils.md#static-merge)
* [mergeAll](_core_src_utils_common_utils_.commonutils.md#static-mergeall)

### Methods

* [clone](_core_src_utils_common_utils_.commonutils.md#static-clone)
* [escapeSelector](_core_src_utils_common_utils_.commonutils.md#static-escapeselector)
* [fillTemplate](_core_src_utils_common_utils_.commonutils.md#static-filltemplate)
* [notNullOrUndefined](_core_src_utils_common_utils_.commonutils.md#static-notnullorundefined)
* [startCase](_core_src_utils_common_utils_.commonutils.md#static-startcase)

## Properties

### `Static` merge

▪ **merge**: *[merge](../modules/_core_src_utils_merge_.md#merge)* = merge

*Defined in [core/src/utils/common-utils.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L26)*

___

### `Static` mergeAll

▪ **mergeAll**: *[mergeAll](../modules/_core_src_utils_merge_.md#mergeall)* = mergeAll

*Defined in [core/src/utils/common-utils.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L28)*

## Methods

### `Static` clone

▸ **clone**‹**T**›(`item`: T): *T*

*Defined in [core/src/utils/common-utils.ts:5](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L5)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *T*

___

### `Static` escapeSelector

▸ **escapeSelector**(`selector`: string): *string*

*Defined in [core/src/utils/common-utils.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`selector` | string |

**Returns:** *string*

___

### `Static` fillTemplate

▸ **fillTemplate**(`templateString`: string, `templateVars`: any): *string*

*Defined in [core/src/utils/common-utils.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`templateString` | string |
`templateVars` | any |

**Returns:** *string*

___

### `Static` notNullOrUndefined

▸ **notNullOrUndefined**‹**T**›(`item`: T | undefined): *item is T*

*Defined in [core/src/utils/common-utils.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L22)*

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

*Defined in [core/src/utils/common-utils.ts:9](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/utils/common-utils.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *string*
