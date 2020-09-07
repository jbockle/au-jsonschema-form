[@aujsf/core](../README.md) › [Globals](../globals.md) › ["core/src/utils/validator"](../modules/_core_src_utils_validator_.md) › [Validator](_core_src_utils_validator_.validator.md)

# Class: Validator

## Hierarchy

* **Validator**

## Index

### Properties

* [_logger](_core_src_utils_validator_.validator.md#private-_logger)
* [ajv](_core_src_utils_validator_.validator.md#ajv)
* [validator](_core_src_utils_validator_.validator.md#optional-validator)

### Methods

* [createErrorSchema](_core_src_utils_validator_.validator.md#createerrorschema)
* [validate](_core_src_utils_validator_.validator.md#validate)

## Properties

### `Private` _logger

• **_logger**: *Logger‹›* = getLogger('aujsf:validator')

*Defined in [core/src/utils/validator.ts:11](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/validator.ts#L11)*

___

###  ajv

• **ajv**: *Ajv.Ajv*

*Defined in [core/src/utils/validator.ts:12](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/validator.ts#L12)*

___

### `Optional` validator

• **validator**? : *Ajv.ValidateFunction*

*Defined in [core/src/utils/validator.ts:13](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/validator.ts#L13)*

## Methods

###  createErrorSchema

▸ **createErrorSchema**(`errors`: Ajv.ErrorObject[]): *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

*Defined in [core/src/utils/validator.ts:65](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/validator.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`errors` | Ajv.ErrorObject[] |

**Returns:** *[ErrorSchema](../interfaces/_core_src_models_error_schema_.errorschema.md)*

___

###  validate

▸ **validate**(`data`: any): *[ValidationResult](../interfaces/_core_src_models_error_schema_.validationresult.md)*

*Defined in [core/src/utils/validator.ts:47](https://github.com/jbockle/au-jsonschema-form/blob/edb7bd4/packages/core/src/utils/validator.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *[ValidationResult](../interfaces/_core_src_models_error_schema_.validationresult.md)*
