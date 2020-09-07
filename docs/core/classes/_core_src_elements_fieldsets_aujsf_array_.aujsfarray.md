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
* [_container](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_container)
* [_element](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_element)
* [_logger](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_logger)
* [_obctx](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_obctx)
* [_observer](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-optional-_observer)
* [_templateRegistry](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-_templateregistry)
* [context](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#context)
* [definitions](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#definitions)
* [engine](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-optional-engine)
* [errors](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#errors)
* [parentReadonly](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#optional-parentreadonly)
* [pointer](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#pointer)
* [required](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#optional-required)
* [schema](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#schema)
* [signaler](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-optional-signaler)
* [uiSchema](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#uischema)
* [value](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#value)
* [view](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#optional-view)
* [viewProvider](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-viewprovider)

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
* [delete](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#delete)
* [detached](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#detached)
* [dispatchEvent](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-dispatchevent)
* [enhance](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-enhance)
* [getItemJsonSchema](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#private-getitemjsonschema)
* [getTitleTemplate](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#gettitletemplate)
* [moveDown](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#movedown)
* [moveUp](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#moveup)
* [rebind](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-rebind)
* [resolveUISchemaDefaults](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#protected-resolveuischemadefaults)
* [schemaChanged](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#schemachanged)
* [signal](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#private-signal)
* [unbind](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#unbind)
* [updateDefinitions](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#private-updatedefinitions)
* [valueChanged](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md#valuechanged)

## Constructors

### `Protected` constructor

\+ **new AujsfArray**(`_element`: Element, `_container`: Container, `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md), `viewProvider`: [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)›, `signaler?`: BindingSignaler, `engine?`: BindingEngine): *[AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[constructor](_core_src_elements_aujsf_base_.aujsfbase.md#protected-constructor)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`_element` | Element |
`_container` | Container |
`_templateRegistry` | [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md) |
`context` | [FormContext](_core_src_services_form_context_.formcontext.md) |
`viewProvider` | [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)› |
`signaler?` | BindingSignaler |
`engine?` | BindingEngine |

**Returns:** *[AujsfArray](_core_src_elements_fieldsets_aujsf_array_.aujsfarray.md)*

## Properties

### `Protected` _bctx

• **_bctx**: *any*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_bctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_bctx)*

*Defined in [core/src/elements/aujsf-base.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L13)*

___

### `Protected` _container

• **_container**: *Container*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_container](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_container)*

*Defined in [core/src/elements/aujsf-base.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L18)*

___

### `Protected` _element

• **_element**: *Element*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_element](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_element)*

*Defined in [core/src/elements/aujsf-base.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L17)*

___

### `Protected` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-array')

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_logger](_core_src_elements_aujsf_base_.aujsfbase.md#protected-abstract-_logger)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L15)*

___

### `Protected` _obctx

• **_obctx**: *any*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_obctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_obctx)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L14)*

___

### `Protected` `Optional` _observer

• **_observer**? : *Disposable*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:16](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L16)*

___

### `Protected` _templateRegistry

• **_templateRegistry**: *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_templateRegistry](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_templateregistry)*

*Defined in [core/src/elements/aujsf-base.ts:19](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L19)*

___

###  context

• **context**: *[FormContext](_core_src_services_form_context_.formcontext.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[context](_core_src_elements_aujsf_base_.aujsfbase.md#context)*

*Defined in [core/src/elements/aujsf-base.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L20)*

___

###  definitions

• **definitions**: *[ArrayKeyDefinition](../interfaces/_core_src_models_key_definition_.arraykeydefinition.md)[]* = []

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:56](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L56)*

___

### `Protected` `Optional` engine

• **engine**? : *BindingEngine*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[engine](_core_src_elements_aujsf_base_.aujsfbase.md#protected-optional-engine)*

*Defined in [core/src/elements/aujsf-base.ts:23](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L23)*

___

###  errors

• **errors**: *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errors](_core_src_elements_aujsf_base_.aujsfbase.md#errors)*

*Defined in [core/src/elements/aujsf-base.ts:45](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L45)*

___

### `Optional` parentReadonly

• **parentReadonly**? : *undefined | false | true*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[parentReadonly](_core_src_elements_aujsf_base_.aujsfbase.md#optional-parentreadonly)*

*Defined in [core/src/elements/aujsf-base.ts:42](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L42)*

___

###  pointer

• **pointer**: *JsonPointer*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[pointer](_core_src_elements_aujsf_base_.aujsfbase.md#pointer)*

*Defined in [core/src/elements/aujsf-base.ts:36](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L36)*

___

### `Optional` required

• **required**? : *undefined | false | true*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[required](_core_src_elements_aujsf_base_.aujsfbase.md#optional-required)*

*Defined in [core/src/elements/aujsf-base.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L39)*

___

###  schema

• **schema**: *[JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schema](_core_src_elements_aujsf_base_.aujsfbase.md#schema)*

*Defined in [core/src/elements/aujsf-base.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L30)*

___

### `Protected` `Optional` signaler

• **signaler**? : *BindingSignaler*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[signaler](_core_src_elements_aujsf_base_.aujsfbase.md#protected-optional-signaler)*

*Defined in [core/src/elements/aujsf-base.ts:22](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L22)*

___

###  uiSchema

• **uiSchema**: *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[uiSchema](_core_src_elements_aujsf_base_.aujsfbase.md#uischema)*

*Defined in [core/src/elements/aujsf-base.ts:33](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L33)*

___

###  value

• **value**: *any[]*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[value](_core_src_elements_aujsf_base_.aujsfbase.md#value)*

*Defined in [core/src/elements/aujsf-base.ts:27](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L27)*

___

### `Optional` view

• **view**? : *View*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[view](_core_src_elements_aujsf_base_.aujsfbase.md#optional-view)*

*Defined in [core/src/elements/aujsf-base.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L47)*

___

### `Protected` viewProvider

• **viewProvider**: *[ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)›*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[viewProvider](_core_src_elements_aujsf_base_.aujsfbase.md#protected-viewprovider)*

*Defined in [core/src/elements/aujsf-base.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L21)*

## Accessors

###  description

• **get description**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[description](_core_src_elements_aujsf_base_.aujsfbase.md#description)*

*Defined in [core/src/elements/aujsf-base.ts:68](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L68)*

**Returns:** *string | undefined*

___

###  errorMessages

• **get errorMessages**(): *string[]*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[errorMessages](_core_src_elements_aujsf_base_.aujsfbase.md#errormessages)*

*Defined in [core/src/elements/aujsf-base.ts:83](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L83)*

**Returns:** *string[]*

___

###  hasErrors

• **get hasErrors**(): *boolean*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[hasErrors](_core_src_elements_aujsf_base_.aujsfbase.md#haserrors)*

*Defined in [core/src/elements/aujsf-base.ts:78](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L78)*

**Returns:** *boolean*

___

###  id

• **get id**(): *string*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[id](_core_src_elements_aujsf_base_.aujsfbase.md#id)*

*Defined in [core/src/elements/aujsf-base.ts:73](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L73)*

**Returns:** *string*

___

###  readonly

• **get readonly**(): *boolean*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[readonly](_core_src_elements_aujsf_base_.aujsfbase.md#readonly)*

*Defined in [core/src/elements/aujsf-base.ts:50](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L50)*

**Returns:** *boolean*

___

###  title

• **get title**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[title](_core_src_elements_aujsf_base_.aujsfbase.md#title)*

*Defined in [core/src/elements/aujsf-base.ts:57](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L57)*

**Returns:** *string | undefined*

## Methods

###  add

▸ **add**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:30](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L30)*

**Returns:** *void*

___

###  bind

▸ **bind**(`bctx`: any, `obctx`: any): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[bind](_core_src_elements_aujsf_base_.aujsfbase.md#bind)*

*Defined in [core/src/elements/aujsf-base.ts:87](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`bctx` | any |
`obctx` | any |

**Returns:** *void*

___

###  bound

▸ **bound**(): *void*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[bound](_core_src_elements_aujsf_base_.aujsfbase.md#protected-bound)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:18](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L18)*

**Returns:** *void*

___

###  delete

▸ **delete**(`index`: number): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:35](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

###  detached

▸ **detached**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[detached](_core_src_elements_aujsf_base_.aujsfbase.md#detached)*

*Defined in [core/src/elements/aujsf-base.ts:105](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L105)*

**Returns:** *void*

___

### `Protected` dispatchEvent

▸ **dispatchEvent**(`name`: string, `detail`: any, `element`: Element): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[dispatchEvent](_core_src_elements_aujsf_base_.aujsfbase.md#protected-dispatchevent)*

*Defined in [core/src/elements/aujsf-base.ts:157](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L157)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`detail` | any | - |
`element` | Element | this._element |

**Returns:** *void*

___

### `Protected` enhance

▸ **enhance**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[enhance](_core_src_elements_aujsf_base_.aujsfbase.md#protected-enhance)*

*Defined in [core/src/elements/aujsf-base.ts:124](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L124)*

**Returns:** *void*

___

### `Private` getItemJsonSchema

▸ **getItemJsonSchema**(`index`: number, `schema`: [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md), `root`: [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:85](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`schema` | [JsonSchemaArray](../interfaces/_core_src_models_json_schema_.jsonschemaarray.md) |
`root` | [JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema) |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)*

*Defined in [core/src/elements/aujsf-base.ts:118](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L118)*

**Returns:** *string | undefined*

___

###  moveDown

▸ **moveDown**(`index`: number): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:49](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

###  moveUp

▸ **moveUp**(`index`: number): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:42](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *void*

___

### `Protected` rebind

▸ **rebind**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[rebind](_core_src_elements_aujsf_base_.aujsfbase.md#protected-rebind)*

*Defined in [core/src/elements/aujsf-base.ts:149](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L149)*

**Returns:** *void*

___

### `Protected` resolveUISchemaDefaults

▸ **resolveUISchemaDefaults**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[resolveUISchemaDefaults](_core_src_elements_aujsf_base_.aujsfbase.md#protected-resolveuischemadefaults)*

*Defined in [core/src/elements/aujsf-base.ts:113](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L113)*

**Returns:** *void*

___

###  schemaChanged

▸ **schemaChanged**(...`args`: any[]): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[schemaChanged](_core_src_elements_aujsf_base_.aujsfbase.md#schemachanged)*

*Defined in [core/src/elements/aujsf-base.ts:169](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

### `Private` signal

▸ **signal**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:95](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L95)*

**Returns:** *void*

___

###  unbind

▸ **unbind**(): *void*

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[unbind](_core_src_elements_aujsf_base_.aujsfbase.md#unbind)*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L26)*

**Returns:** *void*

___

### `Private` updateDefinitions

▸ **updateDefinitions**(): *void*

*Defined in [core/src/elements/fieldsets/aujsf-array.ts:58](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-array.ts#L58)*

**Returns:** *void*

___

###  valueChanged

▸ **valueChanged**(`newValue`: any, `oldValue`: any): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[valueChanged](_core_src_elements_aujsf_base_.aujsfbase.md#valuechanged)*

*Defined in [core/src/elements/aujsf-base.ts:164](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | any |
`oldValue` | any |

**Returns:** *void*
