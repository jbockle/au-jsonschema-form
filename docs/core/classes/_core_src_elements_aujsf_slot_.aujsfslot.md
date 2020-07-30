[@aujsf/core](../README.md) › ["core/src/elements/aujsf-slot"](../modules/_core_src_elements_aujsf_slot_.md) › [AujsfSlot](_core_src_elements_aujsf_slot_.aujsfslot.md)

# Class: AujsfSlot

## Hierarchy

* **AujsfSlot**

## Index

### Constructors

* [constructor](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-constructor)

### Properties

* [_element](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_element)
* [_formContext](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_formcontext)
* [_formTemplateRegistry](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_formtemplateregistry)
* [_logger](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-_logger)
* [errors](_core_src_elements_aujsf_slot_.aujsfslot.md#errors)
* [parentReadonly](_core_src_elements_aujsf_slot_.aujsfslot.md#optional-parentreadonly)
* [pointer](_core_src_elements_aujsf_slot_.aujsfslot.md#pointer)
* [required](_core_src_elements_aujsf_slot_.aujsfslot.md#optional-required)
* [schema](_core_src_elements_aujsf_slot_.aujsfslot.md#schema)
* [type](_core_src_elements_aujsf_slot_.aujsfslot.md#type)
* [uiSchema](_core_src_elements_aujsf_slot_.aujsfslot.md#uischema)
* [value](_core_src_elements_aujsf_slot_.aujsfslot.md#value)
* [viewStrategy](_core_src_elements_aujsf_slot_.aujsfslot.md#viewstrategy)

### Methods

* [bind](_core_src_elements_aujsf_slot_.aujsfslot.md#protected-bind)
* [createViewStrategy](_core_src_elements_aujsf_slot_.aujsfslot.md#private-createviewstrategy)
* [resolveSlotType](_core_src_elements_aujsf_slot_.aujsfslot.md#resolveslottype)
* [resolveUISchemaDefaults](_core_src_elements_aujsf_slot_.aujsfslot.md#private-resolveuischemadefaults)
* [schemaChanged](_core_src_elements_aujsf_slot_.aujsfslot.md#schemachanged)

## Constructors

### `Protected` constructor

\+ **new AujsfSlot**(`_element`: Element, `_formTemplateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `_formContext`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[AujsfSlot](_core_src_elements_aujsf_slot_.aujsfslot.md)*

*Defined in [core/src/elements/aujsf-slot.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_formTemplateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`_formContext` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[AujsfSlot](_core_src_elements_aujsf_slot_.aujsfslot.md)*

## Properties

### `Protected` _element

• **_element**: *Element*

*Defined in [core/src/elements/aujsf-slot.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L28)*

___

### `Protected` _formContext

• **_formContext**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/elements/aujsf-slot.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L30)*

___

### `Protected` _formTemplateRegistry

• **_formTemplateRegistry**: *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Defined in [core/src/elements/aujsf-slot.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L29)*

___

### `Protected` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-slot')

*Defined in [core/src/elements/aujsf-slot.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L25)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Defined in [core/src/elements/aujsf-slot.ts:52](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L52)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-slot.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L49)*

___

###  pointer

• **pointer**: *JsonPointer*

*Defined in [core/src/elements/aujsf-slot.ts:43](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L43)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-slot.ts:46](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L46)*

___

###  schema

• **schema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/aujsf-slot.ts:37](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L37)*

___

###  type

• **type**: *[SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)*

*Defined in [core/src/elements/aujsf-slot.ts:55](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L55)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/aujsf-slot.ts:40](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L40)*

___

###  value

• **value**: *any*

*Defined in [core/src/elements/aujsf-slot.ts:34](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L34)*

___

###  viewStrategy

• **viewStrategy**: *InlineViewStrategy*

*Defined in [core/src/elements/aujsf-slot.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L57)*

## Methods

### `Protected` bind

▸ **bind**(`_ctx`: any, `_octx`: any): *void*

*Defined in [core/src/elements/aujsf-slot.ts:81](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`_ctx` | any |
`_octx` | any |

**Returns:** *void*

___

### `Private` createViewStrategy

▸ **createViewStrategy**(`type`: [SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)): *ViewStrategy*

*Defined in [core/src/elements/aujsf-slot.ts:85](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype) |

**Returns:** *ViewStrategy*

___

###  resolveSlotType

▸ **resolveSlotType**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)*

*Defined in [core/src/elements/aujsf-slot.ts:93](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[SlotType](../modules/_core_src_elements_aujsf_slot_.md#slottype)*

___

### `Private` resolveUISchemaDefaults

▸ **resolveUISchemaDefaults**(): *void*

*Defined in [core/src/elements/aujsf-slot.ts:89](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L89)*

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(): *void*

*Defined in [core/src/elements/aujsf-slot.ts:59](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-slot.ts#L59)*

**Returns:** *void*
