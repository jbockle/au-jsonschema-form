[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/utils/merge"](_core_src_utils_merge_.md)

# Module: "core/src/utils/merge"

## Index

### Interfaces

* [MergeOptions](../interfaces/_core_src_utils_merge_.mergeoptions.md)

### Functions

* [merge](_core_src_utils_merge_.md#merge)
* [mergeAll](_core_src_utils_merge_.md#mergeall)

### Object literals

* [DEFAULT_MERGE_OPTIONS](_core_src_utils_merge_.md#const-default_merge_options)

## Functions

###  merge

▸ **merge**‹**T**›(`target`: any, `source`: any, `options?`: Partial‹[MergeOptions](../interfaces/_core_src_utils_merge_.mergeoptions.md)›): *T*

*Defined in [core/src/utils/merge.ts:9](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/merge.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |
`source` | any |
`options?` | Partial‹[MergeOptions](../interfaces/_core_src_utils_merge_.mergeoptions.md)› |

**Returns:** *T*

___

###  mergeAll

▸ **mergeAll**‹**T**›(`target`: any, `source`: any[], `options?`: Partial‹[MergeOptions](../interfaces/_core_src_utils_merge_.mergeoptions.md)›): *T*

*Defined in [core/src/utils/merge.ts:24](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/merge.ts#L24)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |
`source` | any[] |
`options?` | Partial‹[MergeOptions](../interfaces/_core_src_utils_merge_.mergeoptions.md)› |

**Returns:** *T*

## Object literals

### `Const` DEFAULT_MERGE_OPTIONS

### ▪ **DEFAULT_MERGE_OPTIONS**: *object*

*Defined in [core/src/utils/merge.ts:5](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/merge.ts#L5)*

###  arrayStrategy

• **arrayStrategy**: *"replace"* = "replace"

*Defined in [core/src/utils/merge.ts:6](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/merge.ts#L6)*
