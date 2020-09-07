[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/elements/form-elements/aujsf-number"](../modules/_core_src_elements_form_elements_aujsf_number_.md) › [AujsfNumber](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md)

# Class: AujsfNumber

## Hierarchy

* [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaNumber](../interfaces/_core_src_models_json_schema_.jsonschemanumber.md), number›

  ↳ **AujsfNumber**

## Index

### Properties

* [context](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#context)
* [errors](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#errors)
* [parentReadonly](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#optional-parentreadonly)
* [pointer](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#pointer)
* [required](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#optional-required)
* [schema](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#schema)
* [uiSchema](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#uischema)
* [value](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#value)
* [view](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#optional-view)

### Accessors

* [description](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#description)
* [errorMessages](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#errormessages)
* [hasErrors](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#haserrors)
* [id](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#id)
* [maximum](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#maximum)
* [minimum](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#minimum)
* [readonly](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#readonly)
* [title](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#title)

### Methods

* [bind](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#bind)
* [bound](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#bound)
* [detached](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#detached)
* [getTitleTemplate](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#gettitletemplate)
* [schemaChanged](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#schemachanged)
* [unbind](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#unbind)
* [valueChanged](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md#valuechanged)

## Properties

###  context

• **context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[context](_core_src_elements_aujsf_base_.aujsfbase.md#context)*

*Defined in [core/src/elements/aujsf-base.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L20)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errors](_core_src_elements_aujsf_base_.aujsfbase.md#errors)*

*Defined in [core/src/elements/aujsf-base.ts:45](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L45)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[parentReadonly](_core_src_elements_aujsf_base_.aujsfbase.md#optional-parentreadonly)*

*Defined in [core/src/elements/aujsf-base.ts:42](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L42)*

___

###  pointer

• **pointer**: *JsonPointer*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[pointer](_core_src_elements_aujsf_base_.aujsfbase.md#pointer)*

*Defined in [core/src/elements/aujsf-base.ts:36](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L36)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[required](_core_src_elements_aujsf_base_.aujsfbase.md#optional-required)*

*Defined in [core/src/elements/aujsf-base.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L39)*

___

###  schema

• **schema**: *[JsonSchemaNumber](../interfaces/_core_src_models_json_schema_.jsonschemanumber.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)*

*Defined in [core/src/elements/aujsf-base.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L30)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)*

*Defined in [core/src/elements/aujsf-base.ts:33](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L33)*

___

###  value

• **value**: *number*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[value](_core_src_elements_aujsf_base_.aujsfbase.md#value)*

*Defined in [core/src/elements/aujsf-base.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L27)*

___

### `Optional` view

• **view**? : *View*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[view](_core_src_elements_aujsf_base_.aujsfbase.md#optional-view)*

*Defined in [core/src/elements/aujsf-base.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L47)*

## Accessors

###  description

• **get description**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[description](_core_src_elements_aujsf_base_.aujsfbase.md#description)*

*Defined in [core/src/elements/aujsf-base.ts:68](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L68)*

**Returns:** *string | undefined*

___

###  errorMessages

• **get errorMessages**(): *string[]*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errorMessages](_core_src_elements_aujsf_base_.aujsfbase.md#errormessages)*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string[]*

___

###  hasErrors

• **get hasErrors**(): *boolean*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[hasErrors](_core_src_elements_aujsf_base_.aujsfbase.md#haserrors)*

*Defined in [core/src/elements/aujsf-base.ts:78](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L78)*

**Returns:** *boolean*

___

###  id

• **get id**(): *string*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[id](_core_src_elements_aujsf_base_.aujsfbase.md#id)*

*Defined in [core/src/elements/aujsf-base.ts:73](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L73)*

**Returns:** *string*

___

###  maximum

• **get maximum**(): *number*

*Defined in [core/src/elements/form-elements/aujsf-number.ts:28](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/form-elements/aujsf-number.ts#L28)*

**Returns:** *number*

___

###  minimum

• **get minimum**(): *number*

*Defined in [core/src/elements/form-elements/aujsf-number.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/form-elements/aujsf-number.ts#L15)*

**Returns:** *number*

___

###  readonly

• **get readonly**(): *boolean*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[readonly](_core_src_elements_aujsf_base_.aujsfbase.md#readonly)*

*Defined in [core/src/elements/aujsf-base.ts:50](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L50)*

**Returns:** *boolean*

___

###  title

• **get title**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[title](_core_src_elements_aujsf_base_.aujsfbase.md#title)*

*Defined in [core/src/elements/aujsf-base.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L57)*

**Returns:** *string | undefined*

## Methods

###  bind

▸ **bind**(`bctx`: any, `obctx`: any): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[bind](_core_src_elements_aujsf_base_.aujsfbase.md#bind)*

*Defined in [core/src/elements/aujsf-base.ts:87](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`bctx` | any |
`obctx` | any |

**Returns:** *void*

___

###  bound

▸ **bound**(): *void*

*Overrides void*

*Defined in [core/src/elements/form-elements/aujsf-number.ts:40](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/form-elements/aujsf-number.ts#L40)*

**Returns:** *void*

___

###  detached

▸ **detached**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[detached](_core_src_elements_aujsf_base_.aujsfbase.md#detached)*

*Defined in [core/src/elements/aujsf-base.ts:105](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L105)*

**Returns:** *void*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)*

*Defined in [core/src/elements/aujsf-base.ts:118](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L118)*

**Returns:** *string | undefined*

___

###  schemaChanged

▸ **schemaChanged**(...`args`: any[]): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schemaChanged](_core_src_elements_aujsf_base_.aujsfbase.md#schemachanged)*

*Defined in [core/src/elements/aujsf-base.ts:169](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  unbind

▸ **unbind**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[unbind](_core_src_elements_aujsf_base_.aujsfbase.md#unbind)*

*Defined in [core/src/elements/aujsf-base.ts:109](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L109)*

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `oldValue`: any): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[valueChanged](_core_src_elements_aujsf_base_.aujsfbase.md#valuechanged)*

*Defined in [core/src/elements/aujsf-base.ts:164](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/elements/aujsf-base.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`oldValue` | any |

**Returns:** *void*
