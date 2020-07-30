[@aujsf/core](../README.md) › ["core/src/elements/fieldsets/aujsf-array"](../modules/_core_src_elements_fieldsets_aujsf_array_.md) › [AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)

# Class: AujsfArray

## Hierarchy

* [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), any[]›

  ↳ **AujsfArray**

## Index

### Constructors

* [constructor](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-constructor)

### Properties

* [_bctx](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_bctx)
* [_element](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_element)
* [_logger](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_logger)
* [_obctx](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_obctx)
* [_templateRegistry](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_templateregistry)
* [context](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#context)
* [definitions](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#definitions)
* [errors](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#errors)
* [parentReadonly](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#optional-parentreadonly)
* [pointer](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#pointer)
* [required](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#optional-required)
* [schema](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#schema)
* [uiSchema](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#uischema)
* [value](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#value)
* [viewStrategy](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#viewstrategy)

### Accessors

* [description](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#description)
* [errorMessages](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#errormessages)
* [hasErrors](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#haserrors)
* [id](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#id)
* [readonly](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#readonly)
* [title](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#title)

### Methods

* [add](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#add)
* [bind](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#bind)
* [bound](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#bound)
* [createViewStrategy](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-createviewstrategy)
* [delete](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#delete)
* [dispatchEvent](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-dispatchevent)
* [getItemJsonSchema](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#private-getitemjsonschema)
* [getTemplate](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-gettemplate)
* [getTitleTemplate](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#gettitletemplate)
* [moveDown](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#movedown)
* [moveUp](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#moveup)
* [rebind](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-rebind)
* [schemaChanged](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#schemachanged)
* [updateDefinitions](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#private-updatedefinitions)
* [valueChanged](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#valuechanged)

## Constructors

### `Protected` constructor

\+ **new AujsfArray**(`_element`: Element, `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md)): *[AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[constructor](_core_src_elements_aujsf_base_.aujsfbase.md#protected-constructor)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_templateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |

**Returns:** *[AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)*

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

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-array')

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_logger](_core_src_elements_aujsf_base_.aujsfbase.md#protected-abstract-_logger)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L11)*

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

###  definitions

• **definitions**: *[ArrayKeyDefinition](../interfaces/_core_src_models_key_definition_.arraykeydefinition.md)[]* = []

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:107](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L107)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errors](_core_src_elements_aujsf_base_.aujsfbase.md#errors)*

*Defined in [core/src/elements/aujsf-base.ts:41](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L41)*

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

• **schema**: *[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)*

*Defined in [core/src/elements/aujsf-base.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L26)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)*

*Defined in [core/src/elements/aujsf-base.ts:29](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L29)*

___

###  value

• **value**: *any[]*

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

###  add

▸ **add**(`event`: MouseEvent & object | undefined): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | MouseEvent & object &#124; undefined | undefined |

**Returns:** *void*

___

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

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L20)*

**Returns:** *Promise‹void›*

___

### `Protected` createViewStrategy

▸ **createViewStrategy**(): *ViewStrategy*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[createViewStrategy](_core_src_elements_aujsf_base_.aujsfbase.md#protected-createviewstrategy)*

*Defined in [core/src/elements/aujsf-base.ts:117](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L117)*

**Returns:** *ViewStrategy*

___

###  delete

▸ **delete**(`index`: number, `event`: MouseEvent & object | undefined): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | number | - |
`event` | MouseEvent & object &#124; undefined | undefined |

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

### `Private` getItemJsonSchema

▸ **getItemJsonSchema**(`index`: number, `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:133](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

___

### `Protected` getTemplate

▸ **getTemplate**(): *string*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#protected-gettemplate)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:35](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L35)*

**Returns:** *string*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string | undefined*

___

###  moveDown

▸ **moveDown**(`index`: number): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:92](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

###  moveUp

▸ **moveUp**(`index`: number): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:77](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

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

### `Private` updateDefinitions

▸ **updateDefinitions**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:109](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/elements/fieldsets/aujsf-array.ts#L109)*

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
