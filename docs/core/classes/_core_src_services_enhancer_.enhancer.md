[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/services/enhancer"](../modules/_core_src_services_enhancer_.md) › [Enhancer](_core_src_services_enhancer_.enhancer.md)

# Class: Enhancer

## Hierarchy

* **Enhancer**

## Index

### Constructors

* [constructor](_core_src_services_enhancer_.enhancer.md#constructor)

### Properties

* [hideErrors](_core_src_services_enhancer_.enhancer.md#hideerrors)

### Methods

* [enhanceSlot](_core_src_services_enhancer_.enhancer.md#enhanceslot)
* [enhanceTemplate](_core_src_services_enhancer_.enhancer.md#enhancetemplate)
* [error](_core_src_services_enhancer_.enhancer.md#error)

## Constructors

###  constructor

\+ **new Enhancer**(`_templating`: TemplatingEngine): *[Enhancer](_core_src_services_enhancer_.enhancer.md)*

*Defined in [core/src/services/enhancer.ts:5](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/enhancer.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`_templating` | TemplatingEngine |

**Returns:** *[Enhancer](_core_src_services_enhancer_.enhancer.md)*

## Properties

###  hideErrors

• **hideErrors**: *boolean* = false

*Defined in [core/src/services/enhancer.ts:10](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/enhancer.ts#L10)*

## Methods

###  enhanceSlot

▸ **enhanceSlot**(`options`: object): *View*

*Defined in [core/src/services/enhancer.ts:56](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/enhancer.ts#L56)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`appendTo` | Element |
`attributes` | [][] |
`bindingContext` | any |
`container` | Container |
`tagName` | string |

**Returns:** *View*

___

###  enhanceTemplate

▸ **enhanceTemplate**(`options`: object): *View*

*Defined in [core/src/services/enhancer.ts:33](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/enhancer.ts#L33)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`bindingContext` | any |
`container` | Container |
`element` | Element |
`overrideBindingContext?` | any |
`template` | [FormTemplate](../interfaces/_core_src_models_form_template_.formtemplate.md) |

**Returns:** *View*

___

###  error

▸ **error**(`options`: object): *View | undefined*

*Defined in [core/src/services/enhancer.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/master/packages/core/src/services/enhancer.ts#L12)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`element` | Element |
`message` | string |

**Returns:** *View | undefined*
