[@aujsf/core](../README.md) › ["core/src/elements/aujsf-slot"](../modules/_core_src_elements_aujsf_slot_.md) › [AujsfSlot](_core_src_elements_aujsf_slot_.aujsfslot.md)

# Class: AujsfSlot

## Hierarchy

* **AujsfSlot**

## Index

### Constructors

* [constructor](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-constructor)

### Properties

* [_container](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_container)
* [_context](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_context)
* [_element](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_element)
* [_logger](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_logger)
* [class](_core_src_elements_aujsf_slot_.aujsfslot.md#optional-class)
* [errors](_core_src_elements_aujsf_slot_.aujsfslot.md#errors)
* [parentReadonly](_core_src_elements_aujsf_slot_.aujsfslot.md#optional-parentreadonly)
* [pointer](_core_src_elements_aujsf_slot_.aujsfslot.md#pointer)
* [required](_core_src_elements_aujsf_slot_.aujsfslot.md#optional-required)
* [schema](_core_src_elements_aujsf_slot_.aujsfslot.md#schema)
* [type](_core_src_elements_aujsf_slot_.aujsfslot.md#type)
* [uiSchema](_core_src_elements_aujsf_slot_.aujsfslot.md#uischema)
* [value](_core_src_elements_aujsf_slot_.aujsfslot.md#value)
* [view](_core_src_elements_aujsf_slot_.aujsfslot.md#optional-view)

### Methods

* [bind](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-bind)
* [resolveSlotType](_core_src_elements_aujsf_slot_.aujsfslot.md#resolveslottype)
* [resolveUISchemaDefaults](_core_src_elements_aujsf_slot_.aujsfslot.md#private-resolveuischemadefaults)
* [schemaChanged](_core_src_elements_aujsf_slot_.aujsfslot.md#schemachanged)
* [unbind](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-unbind)

## Constructors

### `Protected` constructor

\+ **new AujsfSlot**(`_element`: Element, `_container`: Container, `_context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[AujsfSlot](_core_src_elements_aujsf_slot_.aujsfslot.md)*

*Defined in [core/src/elements/aujsf-slot.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_container` | Container |
`_context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[AujsfSlot](_core_src_elements_aujsf_slot_.aujsfslot.md)*

## Properties

### `Protected` _container

• **_container**: *Container*

*Defined in [core/src/elements/aujsf-slot.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L29)*

___

### `Protected` _context

• **_context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/elements/aujsf-slot.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L30)*

___

### `Protected` _element

• **_element**: *Element*

*Defined in [core/src/elements/aujsf-slot.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L28)*

___

### `Protected` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-slot')

*Defined in [core/src/elements/aujsf-slot.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L25)*

___

### `Optional` class

• **class**? : *undefined | string*

*Defined in [core/src/elements/aujsf-slot.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L37)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Defined in [core/src/elements/aujsf-slot.ts:55](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L55)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-slot.ts:52](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L52)*

___

###  pointer

• **pointer**: *JsonPointer*

*Defined in [core/src/elements/aujsf-slot.ts:46](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L46)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-slot.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L49)*

___

###  schema

• **schema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/aujsf-slot.ts:40](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L40)*

___

###  type

• **type**: *[SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)*

*Defined in [core/src/elements/aujsf-slot.ts:58](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L58)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/aujsf-slot.ts:43](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L43)*

___

###  value

• **value**: *any*

*Defined in [core/src/elements/aujsf-slot.ts:34](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L34)*

___

### `Optional` view

• **view**? : *View*

*Defined in [core/src/elements/aujsf-slot.ts:60](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L60)*

## Methods

### `Protected` bind

▸ **bind**(`_ctx`: any, `_octx`: any): *void*

*Defined in [core/src/elements/aujsf-slot.ts:87](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`_ctx` | any |
`_octx` | any |

**Returns:** *void*

___

###  resolveSlotType

▸ **resolveSlotType**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)*

*Defined in [core/src/elements/aujsf-slot.ts:100](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)*

___

### `Private` resolveUISchemaDefaults

▸ **resolveUISchemaDefaults**(): *void*

*Defined in [core/src/elements/aujsf-slot.ts:96](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L96)*

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(): *void*

*Defined in [core/src/elements/aujsf-slot.ts:62](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L62)*

**Returns:** *void*

___

### `Protected` unbind

▸ **unbind**(): *void*

*Defined in [core/src/elements/aujsf-slot.ts:91](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-slot.ts#L91)*

**Returns:** *void*
