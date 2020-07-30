[@aujsf/core](../README.md) › ["core/src/elements/fieldsets/aujsf-array-item"](../modules/_core_src_elements_fieldsets_aujsf_array_item_.md) › [AujsfArrayItem](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md)

# Class: AujsfArrayItem ‹**TValue**›

## Type parameters

▪ **TValue**

## Hierarchy

* [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)›

  ↳ **AujsfArrayItem**

## Index

### Constructors

* [constructor](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-constructor)

### Properties

* [_bctx](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-_bctx)
* [_element](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-_element)
* [_logger](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-_logger)
* [_obctx](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-_obctx)
* [_templateRegistry](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-_templateregistry)
* [context](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#context)
* [errors](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#errors)
* [even](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#even)
* [first](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#first)
* [index](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#index)
* [itemTitle](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#itemtitle)
* [last](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#last)
* [parentReadonly](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#optional-parentreadonly)
* [parentUiSchema](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#parentuischema)
* [pointer](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#pointer)
* [required](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#optional-required)
* [schema](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#schema)
* [uiSchema](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#uischema)
* [value](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#value)
* [viewStrategy](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#viewstrategy)

### Accessors

* [description](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#description)
* [errorMessages](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#errormessages)
* [hasErrors](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#haserrors)
* [id](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#id)
* [readonly](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#readonly)
* [title](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#title)

### Methods

* [bind](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#bind)
* [bound](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-bound)
* [createViewStrategy](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-createviewstrategy)
* [delete](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#delete)
* [dispatchEvent](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-dispatchevent)
* [getItemTemplate](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#getitemtemplate)
* [getTemplate](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-gettemplate)
* [getTitleTemplate](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#gettitletemplate)
* [movedown](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#movedown)
* [moveup](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#moveup)
* [rebind](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#protected-rebind)
* [schemaChanged](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#schemachanged)
* [valueChanged](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md#valuechanged)

## Constructors

### `Protected` constructor

\+ **new AujsfArrayItem**(`_element`: Element, `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[AujsfArrayItem](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[constructor](_core_src_elements_aujsf_base_.aujsfbase.md#protected-constructor)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_templateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[AujsfArrayItem](_core_src_elements_fieldsets_aujsf_array_item_.aujsfarrayitem.md)*

## Properties

### `Protected` _bctx

• **_bctx**: *any*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_bctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_bctx)*

*Defined in [core/src/elements/aujsf-base.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L13)*

___

### `Protected` _element

• **_element**: *Element*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_element](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_element)*

*Defined in [core/src/elements/aujsf-base.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L17)*

___

### `Protected` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-array-item')

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_logger](_core_src_elements_aujsf_base_.aujsfbase.md#protected-abstract-_logger)*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:9](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L9)*

___

### `Protected` _obctx

• **_obctx**: *any*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_obctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_obctx)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L14)*

___

### `Protected` _templateRegistry

• **_templateRegistry**: *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_templateRegistry](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_templateregistry)*

*Defined in [core/src/elements/aujsf-base.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L18)*

___

###  context

• **context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[context](_core_src_elements_aujsf_base_.aujsfbase.md#context)*

*Defined in [core/src/elements/aujsf-base.ts:19](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L19)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errors](_core_src_elements_aujsf_base_.aujsfbase.md#errors)*

*Defined in [core/src/elements/aujsf-base.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L41)*

___

###  even

• **even**: *boolean*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L18)*

___

###  first

• **first**: *boolean*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L21)*

___

###  index

• **index**: *number*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L12)*

___

###  itemTitle

• **itemTitle**: *string*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L15)*

___

###  last

• **last**: *boolean*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:24](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L24)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[parentReadonly](_core_src_elements_aujsf_base_.aujsfbase.md#optional-parentreadonly)*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L30)*

___

###  parentUiSchema

• **parentUiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L27)*

___

###  pointer

• **pointer**: *JsonPointer*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[pointer](_core_src_elements_aujsf_base_.aujsfbase.md#pointer)*

*Defined in [core/src/elements/aujsf-base.ts:32](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L32)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[required](_core_src_elements_aujsf_base_.aujsfbase.md#optional-required)*

*Defined in [core/src/elements/aujsf-base.ts:35](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L35)*

___

###  schema

• **schema**: *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)*

*Defined in [core/src/elements/aujsf-base.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L26)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)*

*Defined in [core/src/elements/aujsf-base.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L29)*

___

###  value

• **value**: *TValue*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[value](_core_src_elements_aujsf_base_.aujsfbase.md#value)*

*Defined in [core/src/elements/aujsf-base.ts:23](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L23)*

___

###  viewStrategy

• **viewStrategy**: *ViewStrategy*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[viewStrategy](_core_src_elements_aujsf_base_.aujsfbase.md#viewstrategy)*

*Defined in [core/src/elements/aujsf-base.ts:43](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L43)*

## Accessors

###  description

• **get description**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[description](_core_src_elements_aujsf_base_.aujsfbase.md#description)*

*Defined in [core/src/elements/aujsf-base.ts:64](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L64)*

**Returns:** *string | undefined*

___

###  errorMessages

• **get errorMessages**(): *string[]*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errorMessages](_core_src_elements_aujsf_base_.aujsfbase.md#errormessages)*

*Defined in [core/src/elements/aujsf-base.ts:79](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L79)*

**Returns:** *string[]*

___

###  hasErrors

• **get hasErrors**(): *boolean*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[hasErrors](_core_src_elements_aujsf_base_.aujsfbase.md#haserrors)*

*Defined in [core/src/elements/aujsf-base.ts:74](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L74)*

**Returns:** *boolean*

___

###  id

• **get id**(): *string*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[id](_core_src_elements_aujsf_base_.aujsfbase.md#id)*

*Defined in [core/src/elements/aujsf-base.ts:69](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L69)*

**Returns:** *string*

___

###  readonly

• **get readonly**(): *boolean*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[readonly](_core_src_elements_aujsf_base_.aujsfbase.md#readonly)*

*Defined in [core/src/elements/aujsf-base.ts:46](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L46)*

**Returns:** *boolean*

___

###  title

• **get title**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[title](_core_src_elements_aujsf_base_.aujsfbase.md#title)*

*Defined in [core/src/elements/aujsf-base.ts:53](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L53)*

**Returns:** *string | undefined*

## Methods

###  bind

▸ **bind**(`bctx`: any, `obctx`: any): *Promise‹void›*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[bind](_core_src_elements_aujsf_base_.aujsfbase.md#bind)*

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

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[bound](_core_src_elements_aujsf_base_.aujsfbase.md#protected-bound)*

*Defined in [core/src/elements/aujsf-base.ts:131](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L131)*

**Returns:** *Promise‹void›*

___

### `Protected` createViewStrategy

▸ **createViewStrategy**(): *ViewStrategy*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[createViewStrategy](_core_src_elements_aujsf_base_.aujsfbase.md#protected-createviewstrategy)*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:36](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L36)*

**Returns:** *ViewStrategy*

___

###  delete

▸ **delete**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:50](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L50)*

**Returns:** *void*

___

### `Protected` dispatchEvent

▸ **dispatchEvent**(`name`: string, `detail`: any, `element`: Element): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[dispatchEvent](_core_src_elements_aujsf_base_.aujsfbase.md#protected-dispatchevent)*

*Defined in [core/src/elements/aujsf-base.ts:144](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L144)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`detail` | any | - |
`element` | Element | this._element |

**Returns:** *void*

___

###  getItemTemplate

▸ **getItemTemplate**(): *string*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:44](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L44)*

**Returns:** *string*

___

### `Protected` getTemplate

▸ **getTemplate**(): *string*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#protected-gettemplate)*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:32](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L32)*

**Returns:** *string*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string | undefined*

___

###  movedown

▸ **movedown**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:58](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L58)*

**Returns:** *void*

___

###  moveup

▸ **moveup**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array-item.ts:54](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array-item.ts#L54)*

**Returns:** *void*

___

### `Protected` rebind

▸ **rebind**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[rebind](_core_src_elements_aujsf_base_.aujsfbase.md#protected-rebind)*

*Defined in [core/src/elements/aujsf-base.ts:136](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L136)*

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(...`args`: any[]): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schemaChanged](_core_src_elements_aujsf_base_.aujsfbase.md#schemachanged)*

*Defined in [core/src/elements/aujsf-base.ts:151](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `oldValue`: any): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[valueChanged](_core_src_elements_aujsf_base_.aujsfbase.md#valuechanged)*

*Defined in [core/src/elements/aujsf-base.ts:89](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`oldValue` | any |

**Returns:** *void*
