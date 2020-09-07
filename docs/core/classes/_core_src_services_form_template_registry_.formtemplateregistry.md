[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/form-template-registry"](../modules/_core_src_services_form_template_registry_.md) › [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)

# Class: FormTemplateRegistry

## Hierarchy

* **FormTemplateRegistry**

## Index

### Constructors

* [constructor](_core_src_services_form_template_registry_.formtemplateregistry.md#constructor)

### Accessors

* [ready](_core_src_services_form_template_registry_.formtemplateregistry.md#ready)

### Methods

* [add](_core_src_services_form_template_registry_.formtemplateregistry.md#add)
* [clear](_core_src_services_form_template_registry_.formtemplateregistry.md#clear)
* [get](_core_src_services_form_template_registry_.formtemplateregistry.md#get)
* [has](_core_src_services_form_template_registry_.formtemplateregistry.md#has)

## Constructors

###  constructor

\+ **new FormTemplateRegistry**(`_loader`: Loader, `_viewEngine`: ViewEngine): *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Defined in [core/src/services/form-template-registry.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/form-template-registry.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`_loader` | Loader |
`_viewEngine` | ViewEngine |

**Returns:** *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

## Accessors

###  ready

• **get ready**(): *boolean*

*Defined in [core/src/services/form-template-registry.ts:21](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/form-template-registry.ts#L21)*

**Returns:** *boolean*

## Methods

###  add

▸ **add**(`name`: string, `url`: [FormModule](../modules/_core_src_models_form_template_.md#formmodule)): *Promise‹void›*

*Defined in [core/src/services/form-template-registry.ts:26](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/form-template-registry.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`url` | [FormModule](../modules/_core_src_models_form_template_.md#formmodule) |

**Returns:** *Promise‹void›*

___

###  clear

▸ **clear**(): *void*

*Defined in [core/src/services/form-template-registry.ts:64](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/form-template-registry.ts#L64)*

**Returns:** *void*

___

###  get

▸ **get**(`name?`: undefined | string): *[FormTemplate](../interfaces/_core_src_models_form_template_.formtemplate.md)*

*Defined in [core/src/services/form-template-registry.ts:44](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/form-template-registry.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined &#124; string |

**Returns:** *[FormTemplate](../interfaces/_core_src_models_form_template_.formtemplate.md)*

___

###  has

▸ **has**(`name`: string): *boolean*

*Defined in [core/src/services/form-template-registry.ts:60](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/form-template-registry.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*
