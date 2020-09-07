[@aujsf/core](../README.md) › ["core/src/elements/fieldsets/aujsf-object"](../modules/_core_src_elements_fieldsets_aujsf_object_.md) › [AujsfObject](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md)

# Class: AujsfObject ‹**TValue**›

## Type parameters

▪ **TValue**

## Hierarchy

* [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md)‹[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md)›

  ↳ **AujsfObject**

## Index

### Constructors

* [constructor](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-constructor)

### Properties

* [_bctx](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-_bctx)
* [_container](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-_container)
* [_element](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-_element)
* [_logger](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-_logger)
* [_obctx](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-_obctx)
* [_templateRegistry](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-_templateregistry)
* [context](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#context)
* [definitions](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#definitions)
* [engine](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-optional-engine)
* [errors](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#errors)
* [newPropertyKey](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#optional-newpropertykey)
* [parentReadonly](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#optional-parentreadonly)
* [pointer](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#pointer)
* [required](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#optional-required)
* [schema](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#schema)
* [signaler](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-optional-signaler)
* [uiSchema](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#uischema)
* [value](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#value)
* [view](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#optional-view)
* [viewProvider](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-viewprovider)

### Accessors

* [description](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#description)
* [errorMessages](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#errormessages)
* [hasErrors](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#haserrors)
* [id](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#id)
* [readonly](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#readonly)
* [supportsAdditional](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#supportsadditional)
* [title](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#title)

### Methods

* [add](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#add)
* [bind](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#bind)
* [bound](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#bound)
* [detached](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#detached)
* [dispatchEvent](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-dispatchevent)
* [enhance](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-enhance)
* [getKeys](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#getkeys)
* [getPropertyDefinition](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#getpropertydefinition)
* [getPropertySchema](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#getpropertyschema)
* [getPropertyUiSchema](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#getpropertyuischema)
* [getTitleTemplate](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#gettitletemplate)
* [onKeyDown](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#onkeydown)
* [rebind](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-rebind)
* [resolveUISchemaDefaults](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#protected-resolveuischemadefaults)
* [schemaChanged](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#schemachanged)
* [unbind](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#unbind)
* [valueChanged](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md#valuechanged)

## Constructors

### `Protected` constructor

\+ **new AujsfObject**(`_element`: Element, `_container`: Container, `_templateRegistry`: [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md), `context`: [FormContext](_core_src_services_form_context_.formcontext.md), `viewProvider`: [ViewProvider](_core_src_services_providers_view_provider_.viewprovider.md)‹[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)›, `signaler?`: BindingSignaler, `engine?`: BindingEngine): *[AujsfObject](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md)*

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

**Returns:** *[AujsfObject](_core_src_elements_fieldsets_aujsf_object_.aujsfobject.md)*

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

• **_logger**: *Logger‹›* = getLogger('aujsf:sf-object')

*Overrides [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_logger](_core_src_elements_aujsf_base_.aujsfbase.md#protected-abstract-_logger)*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L14)*

___

### `Protected` _obctx

• **_obctx**: *any*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[_obctx](_core_src_elements_aujsf_base_.aujsfbase.md#protected-_obctx)*

*Defined in [core/src/elements/aujsf-base.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L14)*

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

• **definitions**: *[ObjectKeyDefinition](../interfaces/_core_src_models_key_definition_.objectkeydefinition.md)[]* = []

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:24](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L24)*

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

### `Optional` newPropertyKey

• **newPropertyKey**? : *undefined | string*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L17)*

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

• **schema**: *[JsonSchemaObject](../interfaces/_core_src_models_json_schema_.jsonschemaobject.md)*

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

• **value**: *TValue*

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

###  supportsAdditional

• **get supportsAdditional**(): *boolean*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:20](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L20)*

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

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:39](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L39)*

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

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L26)*

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

###  getKeys

▸ **getKeys**(): *string[]*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:55](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L55)*

**Returns:** *string[]*

___

###  getPropertyDefinition

▸ **getPropertyDefinition**(`key`: string): *[ObjectKeyDefinition](../interfaces/_core_src_models_key_definition_.objectkeydefinition.md)*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:62](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[ObjectKeyDefinition](../interfaces/_core_src_models_key_definition_.objectkeydefinition.md)*

___

###  getPropertySchema

▸ **getPropertySchema**(`property`: string): *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:74](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | string |

**Returns:** *[JsonSchema](../modules/_core_src_models_json_schema_.md#jsonschema)*

___

###  getPropertyUiSchema

▸ **getPropertyUiSchema**(`property`: string): *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:99](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`property` | string |

**Returns:** *[UISchema](../interfaces/_core_src_models_ui_schema_.uischema.md)*

___

###  getTitleTemplate

▸ **getTitleTemplate**(): *string | undefined*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[getTitleTemplate](_core_src_elements_aujsf_base_.aujsfbase.md#gettitletemplate)*

*Defined in [core/src/elements/aujsf-base.ts:118](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L118)*

**Returns:** *string | undefined*

___

###  onKeyDown

▸ **onKeyDown**(`event`: KeyboardEvent): *boolean*

*Defined in [core/src/elements/fieldsets/aujsf-object.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/fieldsets/aujsf-object.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | KeyboardEvent |

**Returns:** *boolean*

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

###  unbind

▸ **unbind**(): *void*

*Inherited from [AujsfBase](_core_src_elements_aujsf_base_.aujsfbase.md).[unbind](_core_src_elements_aujsf_base_.aujsfbase.md#unbind)*

*Defined in [core/src/elements/aujsf-base.ts:109](https://github.com/jbockle/au-jsonschema-form/blob/ffdfbe8/packages/core/src/elements/aujsf-base.ts#L109)*

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
