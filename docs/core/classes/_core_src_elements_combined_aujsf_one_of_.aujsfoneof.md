[@aujsf/core](../README.md) › ["core/src/elements/combined/aujsf-one-of"](../modules/_core_src_elements_combined_aujsf_one_of_.md) › [AujsfOneOf](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md)

# Class: AujsfOneOf

## Hierarchy

* [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaOneOf](../interfaces/_core_src_models_json_schema_.jsonschemaoneof.md), any›

  ↳ **AujsfOneOf**

## Index

### Constructors

* [constructor](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-constructor)

### Properties

* [_bctx](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-_bctx)
* [_element](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-_element)
* [_logger](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-_logger)
* [_obctx](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-_obctx)
* [_templateRegistry](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-_templateregistry)
* [_validator](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#private-_validator)
* [context](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#context)
* [errors](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#errors)
* [options](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#optional-options)
* [parentReadonly](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#optional-parentreadonly)
* [pointer](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#pointer)
* [required](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#optional-required)
* [schema](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#schema)
* [selectedOption](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#selectedoption)
* [uiSchema](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#uischema)
* [value](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#value)
* [viewStrategy](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#viewstrategy)

### Accessors

* [description](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#description)
* [errorMessages](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#errormessages)
* [hasErrors](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#haserrors)
* [id](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#id)
* [readonly](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#readonly)
* [title](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#title)

### Methods

* [bind](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#bind)
* [bound](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#bound)
* [createViewStrategy](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-createviewstrategy)
* [dispatchEvent](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-dispatchevent)
* [getOptionTitle](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#getoptiontitle)
* [getTemplate](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-gettemplate)
* [getTitleTemplate](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#gettitletemplate)
* [optionMatcher](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#optionmatcher)
* [rebind](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#protected-rebind)
* [schemaChanged](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#schemachanged)
* [selectedOptionChanged](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#selectedoptionchanged)
* [valueChanged](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md#valuechanged)

## Constructors

### `Protected` constructor

\+ **new AujsfOneOf**(`_element`: Element, `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[AujsfOneOf](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[constructor](_core_src_elements_aujsf_base_.aujsfbase.md#protected-constructor)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_templateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[AujsfOneOf](_core_src_elements_combined_aujsf_one_of_.aujsfoneof.md)*

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

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-one-of')

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_logger](_core_src_elements_aujsf_base_.aujsfbase.md#protected-abstract-_logger)*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L20)*

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

### `Private` _validator

• **_validator**: *[Validator](_core_src_utils_validator_.validator.md)‹›* = new Validator()

*Defined in [core/src/elements/combined/aujsf-one-of.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L18)*

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

### `Optional` options

• **options**? : *[OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md)[]*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:25](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L25)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[parentReadonly](_core_src_elements_aujsf_base_.aujsfbase.md#optional-parentreadonly)*

*Defined in [core/src/elements/aujsf-base.ts:38](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L38)*

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

• **schema**: *[JsonSchemaOneOf](../interfaces/_core_src_models_json_schema_.jsonschemaoneof.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)*

*Defined in [core/src/elements/aujsf-base.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L26)*

___

###  selectedOption

• **selectedOption**: *[OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md) | null* = null

*Defined in [core/src/elements/combined/aujsf-one-of.ts:23](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L23)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)*

*Defined in [core/src/elements/aujsf-base.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L29)*

___

###  value

• **value**: *any*

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

###  bound

▸ **bound**(): *Promise‹void›*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[bound](_core_src_elements_aujsf_base_.aujsfbase.md#protected-bound)*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:38](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L38)*

**Returns:** *Promise‹void›*

___

### `Protected` createViewStrategy

▸ **createViewStrategy**(): *ViewStrategy*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[createViewStrategy](_core_src_elements_aujsf_base_.aujsfbase.md#protected-createviewstrategy)*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:63](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L63)*

**Returns:** *ViewStrategy*

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

###  getOptionTitle

▸ **getOptionTitle**(`schema`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema), `index`: number): *string*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:71](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |
`index` | number |

**Returns:** *string*

___

### `Protected` getTemplate

▸ **getTemplate**(): *string*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#protected-gettemplate)*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:59](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L59)*

**Returns:** *string*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string | undefined*

___

###  optionMatcher

▸ **optionMatcher**(`a?`: [OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md), `b?`: [OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md)): *boolean*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:79](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`a?` | [OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md) |
`b?` | [OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md) |

**Returns:** *boolean*

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

###  selectedOptionChanged

▸ **selectedOptionChanged**(`newValue`: [OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md) | null): *void*

*Defined in [core/src/elements/combined/aujsf-one-of.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/combined/aujsf-one-of.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | [OneOfOption](../interfaces/_core_src_elements_combined_aujsf_one_of_.oneofoption.md) &#124; null |

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
