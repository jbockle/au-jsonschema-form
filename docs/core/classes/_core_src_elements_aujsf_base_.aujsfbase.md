[@aujsf/core](../README.md) › ["core/src/elements/aujsf-base"](../modules/_core_src_elements_aujsf_base_.md) › [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)

# Class: AujsfBase ‹**TSchema, TValue**›

## Type parameters

▪ **TSchema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

▪ **TValue**

## Hierarchy

* **AujsfBase**

  ↳ [AujsfObject](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md)

  ↳ [AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)

  ↳ [AujsfArrayItem](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md)

  ↳ [AujsfString](_core_src_elements_form_elements_aujsf_string_.aujsfstring.md)

  ↳ [AujsfNumber](_core_src_elements_form_elements_aujsf_number_.aujsfnumber.md)

  ↳ [AujsfBoolean](_core_src_elements_form_elements_aujsf_boolean_.aujsfboolean.md)

  ↳ [AujsfAllOf](_core_src_elements_combined_aujsf_all_of_.aujsfallof.md)

  ↳ [AujsfOneOf](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md)

## Index

### Constructors

* [constructor](_core_src_elements_aujsf_base_.aujsfbase.md#protected-constructor)

### Properties

* [_bctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_bctx)
* [_bindHandle](_core_src_elements_aujsf_base_.aujsfbase.md#private-_bindhandle)
* [_element](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_element)
* [_logger](_core_src_elements_aujsf_base_.aujsfbase.md#protected-abstract-_logger)
* [_obctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_obctx)
* [_templateRegistry](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_templateregistry)
* [context](_core_src_elements_aujsf_base_.aujsfbase.md#context)
* [errors](_core_src_elements_aujsf_base_.aujsfbase.md#errors)
* [parentReadonly](_core_src_elements_aujsf_base_.aujsfbase.md#optional-parentreadonly)
* [pointer](_core_src_elements_aujsf_base_.aujsfbase.md#pointer)
* [required](_core_src_elements_aujsf_base_.aujsfbase.md#optional-required)
* [schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)
* [uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)
* [value](_core_src_elements_aujsf_base_.aujsfbase.md#value)
* [viewStrategy](_core_src_elements_aujsf_base_.aujsfbase.md#viewstrategy)

### Accessors

* [description](_core_src_elements_aujsf_base_.aujsfbase.md#description)
* [errorMessages](_core_src_elements_aujsf_base_.aujsfbase.md#errormessages)
* [hasErrors](_core_src_elements_aujsf_base_.aujsfbase.md#haserrors)
* [id](_core_src_elements_aujsf_base_.aujsfbase.md#id)
* [readonly](_core_src_elements_aujsf_base_.aujsfbase.md#readonly)
* [title](_core_src_elements_aujsf_base_.aujsfbase.md#title)

### Methods

* [bind](_core_src_elements_aujsf_base_.aujsfbase.md#bind)
* [bound](_core_src_elements_aujsf_base_.aujsfbase.md#protected-bound)
* [createViewStrategy](_core_src_elements_aujsf_base_.aujsfbase.md#protected-createviewstrategy)
* [dispatchEvent](_core_src_elements_aujsf_base_.aujsfbase.md#protected-dispatchevent)
* [getTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#protected-gettemplate)
* [getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)
* [rebind](_core_src_elements_aujsf_base_.aujsfbase.md#protected-rebind)
* [resolveUISchemaDefaults](_core_src_elements_aujsf_base_.aujsfbase.md#private-resolveuischemadefaults)
* [schemaChanged](_core_src_elements_aujsf_base_.aujsfbase.md#schemachanged)
* [valueChanged](_core_src_elements_aujsf_base_.aujsfbase.md#valuechanged)

## Constructors

### `Protected` constructor

\+ **new AujsfBase**(`_element`: Element, `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_templateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)*

## Properties

### `Protected` _bctx

• **_bctx**: *any*

*Defined in [core/src/elements/aujsf-base.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L13)*

___

### `Private` _bindHandle

• **_bindHandle**: *any* = -1

*Defined in [core/src/elements/aujsf-base.ts:135](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L135)*

___

### `Protected` _element

• **_element**: *Element*

*Defined in [core/src/elements/aujsf-base.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L17)*

___

### `Protected` `Abstract` _logger

• **_logger**: *Logger*

*Defined in [core/src/elements/aujsf-base.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L12)*

___

### `Protected` _obctx

• **_obctx**: *any*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L14)*

___

### `Protected` _templateRegistry

• **_templateRegistry**: *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Defined in [core/src/elements/aujsf-base.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L18)*

___

###  context

• **context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Defined in [core/src/elements/aujsf-base.ts:19](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L19)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Defined in [core/src/elements/aujsf-base.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L41)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-base.ts:38](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L38)*

___

###  pointer

• **pointer**: *JsonPointer*

*Defined in [core/src/elements/aujsf-base.ts:32](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L32)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [core/src/elements/aujsf-base.ts:35](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L35)*

___

###  schema

• **schema**: *TSchema*

*Defined in [core/src/elements/aujsf-base.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L26)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/aujsf-base.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L29)*

___

###  value

• **value**: *TValue*

*Defined in [core/src/elements/aujsf-base.ts:23](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L23)*

___

###  viewStrategy

• **viewStrategy**: *ViewStrategy*

*Defined in [core/src/elements/aujsf-base.ts:43](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L43)*

## Accessors

###  description

• **get description**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:64](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L64)*

**Returns:** *string | undefined*

___

###  errorMessages

• **get errorMessages**(): *string[]*

*Defined in [core/src/elements/aujsf-base.ts:79](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L79)*

**Returns:** *string[]*

___

###  hasErrors

• **get hasErrors**(): *boolean*

*Defined in [core/src/elements/aujsf-base.ts:74](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L74)*

**Returns:** *boolean*

___

###  id

• **get id**(): *string*

*Defined in [core/src/elements/aujsf-base.ts:69](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L69)*

**Returns:** *string*

___

###  readonly

• **get readonly**(): *boolean*

*Defined in [core/src/elements/aujsf-base.ts:46](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L46)*

**Returns:** *boolean*

___

###  title

• **get title**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:53](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L53)*

**Returns:** *string | undefined*

## Methods

###  bind

▸ **bind**(`bctx`: any, `obctx`: any): *Promise‹void›*

*Defined in [core/src/elements/aujsf-base.ts:94](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`bctx` | any |
`obctx` | any |

**Returns:** *Promise‹void›*

___

### `Protected` bound

▸ **bound**(): *Promise‹void›*

*Defined in [core/src/elements/aujsf-base.ts:131](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L131)*

**Returns:** *Promise‹void›*

___

### `Protected` createViewStrategy

▸ **createViewStrategy**(): *ViewStrategy*

*Defined in [core/src/elements/aujsf-base.ts:117](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L117)*

**Returns:** *ViewStrategy*

___

### `Protected` dispatchEvent

▸ **dispatchEvent**(`name`: string, `detail`: any, `element`: Element): *void*

*Defined in [core/src/elements/aujsf-base.ts:144](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L144)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`detail` | any | - |
`element` | Element | this._element |

**Returns:** *void*

___

### `Protected` getTemplate

▸ **getTemplate**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:113](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L113)*

**Returns:** *string | undefined*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string | undefined*

___

### `Protected` rebind

▸ **rebind**(): *void*

*Defined in [core/src/elements/aujsf-base.ts:136](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L136)*

**Returns:** *void*

___

### `Private` resolveUISchemaDefaults

▸ **resolveUISchemaDefaults**(): *void*

*Defined in [core/src/elements/aujsf-base.ts:108](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L108)*

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(...`args`: any[]): *void*

*Defined in [core/src/elements/aujsf-base.ts:151](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `oldValue`: any): *void*

*Defined in [core/src/elements/aujsf-base.ts:89](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`oldValue` | any |

**Returns:** *void*
