[@aujsf/core](../README.md) › ["core/src/elements/aujsf-slot"](_core_src_elements_aujsf_slot_.md)

# Module: "core/src/elements/aujsf-slot"

## Index

### Classes

* [AujsfSlot](../classes/_core_src_elements_aujsf_slot_.aujsfslot.md)

### Type aliases

* [SlotType](_core_src_elements_aujsf_slot_.md#slottype)

### Variables

* [ATTRIBUTES](_core_src_elements_aujsf_slot_.md#const-attributes)

## Type aliases

###  SlotType

Ƭ **SlotType**: *[SchemaType](_core_src_models_json_schema_.md#schematype) | "all-of" | "any-of" | "one-of" | "hidden" | "unknown"*

*Defined in [core/src/elements/aujsf-slot.ts:10](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L10)*

## Variables

### `Const` ATTRIBUTES

• **ATTRIBUTES**: *string* = [
  ['schema.bind', 'schema'],
  ['ui-schema.bind', 'uiSchema'],
  ['value.bind', 'value'],
  ['pointer.bind', 'pointer'],
  ['errors.bind', 'errors'],
  ['required.bind', 'required'],
  ['parent-readonly.bind', 'parentReadonly'],
].map(attr => `${attr[0]}="${attr[1]}"`).join(' ')

*Defined in [core/src/elements/aujsf-slot.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L12)*
