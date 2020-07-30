[@aujsf/core](../README.md) › ["core/src/services/form-template-registry"](../modules/_core_src_services_form_template_registry_.md) › [FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)

# Class: FormTemplateRegistry

## Hierarchy

* **FormTemplateRegistry**

## Index

### Constructors

* [constructor](_core_src_services_form_template_registry_.formtemplateregistry.md#constructor)

### Properties

* [_loader](_core_src_services_form_template_registry_.formtemplateregistry.md#private-_loader)
* [_logger](_core_src_services_form_template_registry_.formtemplateregistry.md#private-_logger)
* [_templates](_core_src_services_form_template_registry_.formtemplateregistry.md#private-_templates)

### Accessors

* [ready](_core_src_services_form_template_registry_.formtemplateregistry.md#ready)

### Methods

* [add](_core_src_services_form_template_registry_.formtemplateregistry.md#add)
* [get](_core_src_services_form_template_registry_.formtemplateregistry.md#get)
* [has](_core_src_services_form_template_registry_.formtemplateregistry.md#has)

## Constructors

###  constructor

\+ **new FormTemplateRegistry**(`_loader`: Loader): *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

*Defined in [core/src/services/form-template-registry.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`_loader` | Loader |

**Returns:** *[FormTemplateRegistry](_core_src_services_form_template_registry_.formtemplateregistry.md)*

## Properties

### `Private` _loader

• **_loader**: *Loader*

*Defined in [core/src/services/form-template-registry.ts:17](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L17)*

___

### `Private` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:form-template-registry')

*Defined in [core/src/services/form-template-registry.ts:14](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L14)*

___

### `Private` _templates

• **_templates**: *Map‹string, [FormTemplate](../interfaces/_core_src_models_form_template_.formtemplate.md)›* = new Map()

*Defined in [core/src/services/form-template-registry.ts:15](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L15)*

## Accessors

###  ready

• **get ready**(): *boolean*

*Defined in [core/src/services/form-template-registry.ts:19](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L19)*

**Returns:** *boolean*

## Methods

###  add

▸ **add**(`name`: string, `url`: [FormModule](../modules/_core_src_models_form_template_.md#formmodule)): *Promise‹void›*

*Defined in [core/src/services/form-template-registry.ts:24](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`url` | [FormModule](../modules/_core_src_models_form_template_.md#formmodule) |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`name?`: undefined | string): *[FormTemplate](../interfaces/_core_src_models_form_template_.formtemplate.md)*

*Defined in [core/src/services/form-template-registry.ts:35](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined &#124; string |

**Returns:** *[FormTemplate](../interfaces/_core_src_models_form_template_.formtemplate.md)*

___

###  has

▸ **has**(`name`: string): *boolean*

*Defined in [core/src/services/form-template-registry.ts:51](https://github.com/jbockle/au-jsonschema-form/blob/05b11cf/packages/core/src/services/form-template-registry.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*
