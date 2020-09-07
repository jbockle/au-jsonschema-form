[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/elements/aujsf-base"](../modules/_core_src_elements_aujsf_base_.md) › [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)

# Class: AujsfBase ‹**TSchema, TValue**›

## Type parameters

▪ **TSchema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

▪ **TValue**

## Hierarchy

* **AujsfBase**

  ↳ [AujsfAllOf](_core_src_elements_combined_aujsf_all_of_.aujsfallof.md)

  ↳ [AujsfOneOf](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md)

  ↳ [AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)

  ↳ [AujsfObject](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md)

  ↳ [AujsfBoolean](_core_src_elements_form_elements_aujsf_boolean_.aujsfboolean.md)

  ↳ [AujsfNumber](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md)

  ↳ [AujsfString](_core_src_elements_form_elements_aujsf_string_.aujsfstring.md)

## Index

### Properties

* [context](_core_src_elements_aujsf_base_.aujsfbase.md#context)
* [errors](_core_src_elements_aujsf_base_.aujsfbase.md#errors)
* [parentReadonly](_core_src_elements_aujsf_base_.aujsfbase.md#optional-parentreadonly)
* [pointer](_core_src_elements_aujsf_base_.aujsfbase.md#pointer)
* [required](_core_src_elements_aujsf_base_.aujsfbase.md#optional-required)
* [schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)
* [uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)
* [value](_core_src_elements_aujsf_base_.aujsfbase.md#value)
* [view](_core_src_elements_aujsf_base_.aujsfbase.md#optional-view)

### Accessors

* [description](_core_src_elements_aujsf_base_.aujsfbase.md#description)
* [errorMessages](_core_src_elements_aujsf_base_.aujsfbase.md#errormessages)
* [hasErrors](_core_src_elements_aujsf_base_.aujsfbase.md#haserrors)
* [id](_core_src_elements_aujsf_base_.aujsfbase.md#id)
* [readonly](_core_src_elements_aujsf_base_.aujsfbase.md#readonly)
* [title](_core_src_elements_aujsf_base_.aujsfbase.md#title)

### Methods

* [bind](_core_src_elements_aujsf_base_.aujsfbase.md#bind)
* [detached](_core_src_elements_aujsf_base_.aujsfbase.md#detached)
* [getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)
* [schemaChanged](_core_src_elements_aujsf_base_.aujsfbase.md#schemachanged)
* [unbind](_core_src_elements_aujsf_base_.aujsfbase.md#unbind)
* [valueChanged](_core_src_elements_aujsf_base_.aujsfbase.md#valuechanged)

## Properties

###  context

• **context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/elements/aujsf-base.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L20)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Defined in [core/src/elements/aujsf-base.ts:45](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L45)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-base.ts:42](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L42)*

___

###  pointer

• **pointer**: *JsonPointer*

*Defined in [core/src/elements/aujsf-base.ts:36](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L36)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-base.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L39)*

___

###  schema

• **schema**: *TSchema*

*Defined in [core/src/elements/aujsf-base.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L30)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/aujsf-base.ts:33](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L33)*

___

###  value

• **value**: *TValue*

*Defined in [core/src/elements/aujsf-base.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L27)*

___

### `Optional` view

• **view**? : *View*

*Defined in [core/src/elements/aujsf-base.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L47)*

## Accessors

###  description

• **get description**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:68](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L68)*

**Returns:** *string | undefined*

___

###  errorMessages

• **get errorMessages**(): *string[]*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string[]*

___

###  hasErrors

• **get hasErrors**(): *boolean*

*Defined in [core/src/elements/aujsf-base.ts:78](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L78)*

**Returns:** *boolean*

___

###  id

• **get id**(): *string*

*Defined in [core/src/elements/aujsf-base.ts:73](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L73)*

**Returns:** *string*

___

###  readonly

• **get readonly**(): *boolean*

*Defined in [core/src/elements/aujsf-base.ts:50](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L50)*

**Returns:** *boolean*

___

###  title

• **get title**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L57)*

**Returns:** *string | undefined*

## Methods

###  bind

▸ **bind**(`bctx`: any, `obctx`: any): *void*

*Defined in [core/src/elements/aujsf-base.ts:87](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`bctx` | any |
`obctx` | any |

**Returns:** *void*

___

###  detached

▸ **detached**(): *void*

*Defined in [core/src/elements/aujsf-base.ts:105](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L105)*

**Returns:** *void*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:118](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L118)*

**Returns:** *string | undefined*

___

###  schemaChanged

▸ **schemaChanged**(...`args`: any[]): *void*

*Defined in [core/src/elements/aujsf-base.ts:169](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  unbind

▸ **unbind**(): *void*

*Defined in [core/src/elements/aujsf-base.ts:109](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L109)*

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `oldValue`: any): *void*

*Defined in [core/src/elements/aujsf-base.ts:164](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`oldValue` | any |

**Returns:** *void*
