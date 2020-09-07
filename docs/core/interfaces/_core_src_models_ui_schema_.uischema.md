[@aujsf/core](../README.md) › ["core/src/models/ui-schema"](../modules/_core_src_models_ui_schema_.md) › [UISchema](_core_src_models_ui_schema_.uischema.md)

# Interface: UISchema

an interface defining the custom options of a schema form element, nestable to your schema's model

**`extending`** you can define custom options for more control in custom views,
suggested to prefix/suffix option keys (i.e. prefix with 'ui:' like 'ui:my-custom-option') or other
unique prefix/suffix so that it will not clash with schema properties

## Hierarchy

* **UISchema**

## Indexable

* \[ **key**: *string*\]: [UISchema](_core_src_models_ui_schema_.uischema.md) | any

an interface defining the custom options of a schema form element, nestable to your schema's model

**`extending`** you can define custom options for more control in custom views,
suggested to prefix/suffix option keys (i.e. prefix with 'ui:' like 'ui:my-custom-option') or other
unique prefix/suffix so that it will not clash with schema properties

## Index

### Properties

* [ui:autocomplete](_core_src_models_ui_schema_.uischema.md#optional-ui:autocomplete)
* [ui:item-title](_core_src_models_ui_schema_.uischema.md#optional-ui:item-title)
* [ui:item-view](_core_src_models_ui_schema_.uischema.md#optional-ui:item-view)
* [ui:items](_core_src_models_ui_schema_.uischema.md#optional-ui:items)
* [ui:no-remove](_core_src_models_ui_schema_.uischema.md#optional-ui:no-remove)
* [ui:no-reorder](_core_src_models_ui_schema_.uischema.md#optional-ui:no-reorder)
* [ui:order](_core_src_models_ui_schema_.uischema.md#optional-ui:order)
* [ui:read-only](_core_src_models_ui_schema_.uischema.md#optional-ui:read-only)
* [ui:select-default](_core_src_models_ui_schema_.uischema.md#optional-ui:select-default)
* [ui:title](_core_src_models_ui_schema_.uischema.md#optional-ui:title)
* [ui:type](_core_src_models_ui_schema_.uischema.md#optional-ui:type)
* [ui:view](_core_src_models_ui_schema_.uischema.md#optional-ui:view)

## Properties

### `Optional` ui:autocomplete

• **ui:autocomplete**? : *"on" | "off"*

*Defined in [core/src/models/ui-schema.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L28)*

enable/disable browser autocomplete feature on this form, currently only valid on root UISchema

**`default`** 'off'

___

### `Optional` ui:item-title

• **ui:item-title**? : *undefined | string*

*Defined in [core/src/models/ui-schema.ts:71](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L71)*

template-like literal string to format, @see SfItemTitle converter

___

### `Optional` ui:item-view

• **ui:item-view**? : *undefined | string*

*Defined in [core/src/models/ui-schema.ts:66](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L66)*

the array item view to use, can be set on an array's ui schema or on a 'ui:items' ui schema

**`default`** 'array-item'

___

### `Optional` ui:items

• **ui:items**? : *[UISchema](_core_src_models_ui_schema_.uischema.md) | [UISchema](_core_src_models_ui_schema_.uischema.md)[]*

*Defined in [core/src/models/ui-schema.ts:60](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L60)*

use for an array's UISchema to define the array item(s) UISchema,
if an array, the the UISchema is applied to the item with the same index,
or the last index

___

### `Optional` ui:no-remove

• **ui:no-remove**? : *undefined | false | true*

*Defined in [core/src/models/ui-schema.ts:53](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L53)*

used to prevent removing an item from an array

___

### `Optional` ui:no-reorder

• **ui:no-reorder**? : *undefined | false | true*

*Defined in [core/src/models/ui-schema.ts:48](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L48)*

used to prevents an array's item from being re-ordered

___

### `Optional` ui:order

• **ui:order**? : *undefined | number*

*Defined in [core/src/models/ui-schema.ts:33](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L33)*

specify the property or item order

___

### `Optional` ui:read-only

• **ui:read-only**? : *undefined | false | true*

*Defined in [core/src/models/ui-schema.ts:76](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L76)*

override schema's readOnly

___

### `Optional` ui:select-default

• **ui:select-default**? : *[]*

*Defined in [core/src/models/ui-schema.ts:43](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L43)*

show a pre-selected default option in the select dropdown, tuple is [label,value]

___

### `Optional` ui:title

• **ui:title**? : *false | string*

*Defined in [core/src/models/ui-schema.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L16)*

override the title

**`default`** jsonschema.title

___

### `Optional` ui:type

• **ui:type**? : *[SchemaType](../modules/_core_src_models_json_schema_.md#schematype)*

*Defined in [core/src/models/ui-schema.ts:38](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L38)*

override the schema type used (may be useful in array schema types)

___

### `Optional` ui:view

• **ui:view**? : *string | false*

*Defined in [core/src/models/ui-schema.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/models/ui-schema.ts#L22)*

override the view template to be used or set to false to prevent the schema element from showing

**`default`** determined from schema.type
