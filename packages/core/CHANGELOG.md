# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.7.5](https://github.com/jbockle/au-jsonschema-form/compare/v0.7.4...v0.7.5) (2021-11-11)


### Features

* **enum:** custom enum labels ([f18ef73](https://github.com/jbockle/au-jsonschema-form/commit/f18ef735eea8fd42f41cdf3f1f47c28b0dc6956d))





## [0.7.4](https://github.com/jbockle/au-jsonschema-form/compare/v0.7.3...v0.7.4) (2021-11-11)


### Bug Fixes

* only init definitions when bound ([ad8051f](https://github.com/jbockle/au-jsonschema-form/commit/ad8051f26a281b638a76e6781fb474fdbf4c01db))
* **conditional:** ui:view-class applied twice ([a77b1cb](https://github.com/jbockle/au-jsonschema-form/commit/a77b1cb813c5681129a0d205374433882ff55268))





## [0.7.3](https://github.com/jbockle/au-jsonschema-form/compare/v0.7.2...v0.7.3) (2021-08-12)


### Features

* **contexts:** inject additional context ([5e48014](https://github.com/jbockle/au-jsonschema-form/commit/5e48014e12d8a47758d6d00249dd4682ed119686))





## [0.7.2](https://github.com/jbockle/au-jsonschema-form/compare/v0.7.1...v0.7.2) (2021-07-13)


### Bug Fixes

* conditional vanish when swapped with else ([051cce6](https://github.com/jbockle/au-jsonschema-form/commit/051cce6cd4622489063bc0dbc584892642329c66))





## [0.7.1](https://github.com/jbockle/au-jsonschema-form/compare/v0.7.0...v0.7.1) (2021-05-18)


### Bug Fixes

* slots reset view when schema changes ([1215a0e](https://github.com/jbockle/au-jsonschema-form/commit/1215a0e5952cb4ec0ff318243ea3a8776b099e52))





# [0.7.0](https://github.com/jbockle/au-jsonschema-form/compare/v0.6.4...v0.7.0) (2021-05-17)


### Bug Fixes

* number range only when range less than 100 ([6381a8a](https://github.com/jbockle/au-jsonschema-form/commit/6381a8a3f1ee95964c6db538296676c9ce468ff3))
* reset uiSchema context on schema change ([3d7cd68](https://github.com/jbockle/au-jsonschema-form/commit/3d7cd688bd78bd21984eab0a04088a28c0260448))


### Features

* add UISchemaFor<T> ([9f048a4](https://github.com/jbockle/au-jsonschema-form/commit/9f048a4fbff3fc4fc3d5717ceb40ed15120ffe0d))
* react to uiSchema changes ([7d4f471](https://github.com/jbockle/au-jsonschema-form/commit/7d4f471204aa0f98985fa766ada1dfa6b98c0caa))





## [0.6.4](https://github.com/jbockle/au-jsonschema-form/compare/v0.6.3...v0.6.4) (2021-03-24)


### Bug Fixes

* null reflect as object in js ([b9c22bc](https://github.com/jbockle/au-jsonschema-form/commit/b9c22bc7f7840f2a97586599b0baa9ba359ac11c))





## [0.6.3](https://github.com/jbockle/au-jsonschema-form/compare/v0.6.2...v0.6.3) (2021-03-23)


### Bug Fixes

* merge defaults overriding value ([063d716](https://github.com/jbockle/au-jsonschema-form/commit/063d7163c2993283d128a9ff9234b520ecf5a147))





## [0.6.2](https://github.com/jbockle/au-jsonschema-form/compare/v0.6.1...v0.6.2) (2021-03-16)


### Bug Fixes

* **error-schema:** is never null/undefined ([c8b816d](https://github.com/jbockle/au-jsonschema-form/commit/c8b816d15db19fdd827a1a7b8d3843ec70756fd8))





## [0.6.1](https://github.com/jbockle/au-jsonschema-form/compare/v0.6.0...v0.6.1) (2021-03-05)


### Bug Fixes

* **defaults:** booleans are overridden to false ([4c73765](https://github.com/jbockle/au-jsonschema-form/commit/4c73765b471b130fef48c68648b6184bd554d46f))





# [0.6.0](https://github.com/jbockle/au-jsonschema-form/compare/v0.5.0...v0.6.0) (2021-03-01)


### Bug Fixes

* **defaults:** reassign value on merge defaults ([e6ebb61](https://github.com/jbockle/au-jsonschema-form/commit/e6ebb61ea020377521999e6aaa41ba042ffaf3e9))
* **error-schema:** prevent name conflicts with es: prefix ([2afb31a](https://github.com/jbockle/au-jsonschema-form/commit/2afb31a35416980f276133e8fedabbebe8bdca32))
* **one-of:** correctly resolve current option ([5087996](https://github.com/jbockle/au-jsonschema-form/commit/5087996f7e23d1fe3f923af4d2b7d19242291da4))
* **submit:** unwrap results in TypeError ([3367c1c](https://github.com/jbockle/au-jsonschema-form/commit/3367c1c285a3359ba02a2469f5df29e3ab5519e8))


### Features

* **error-message:** global custom error messages ([dd7cea3](https://github.com/jbockle/au-jsonschema-form/commit/dd7cea3e36ee8b6f23a012717f738f112852f555))
* **errors:** support overriding error message ([e5d14a5](https://github.com/jbockle/au-jsonschema-form/commit/e5d14a53bbddc1acf12317698f7ce79ad0b2718c))
* **schema-form-events:** emit event on  value change ([f6e0cf5](https://github.com/jbockle/au-jsonschema-form/commit/f6e0cf5e23ca629bc5d8c895cbf8538d55b458d8))





# [0.5.0](https://github.com/jbockle/au-jsonschema-form/compare/v0.4.2...v0.5.0) (2021-02-26)


### Features

* fill defaults on conditional validity change ([7092e82](https://github.com/jbockle/au-jsonschema-form/commit/7092e82c7fc62dd077e7f34d64665787cae9329f))
* **oneOf:** support defaults ([ca1ea42](https://github.com/jbockle/au-jsonschema-form/commit/ca1ea4232cba6f90e6d7cf82b270bc5599962c85))





## [0.4.2](https://github.com/jbockle/au-jsonschema-form/compare/v0.4.1...v0.4.2) (2021-02-25)


### Features

* **schema-defaults:** better defaults handling ([110d76b](https://github.com/jbockle/au-jsonschema-form/commit/110d76b84967ba99f4867e23b3ed7b4dd394915c))






## [0.4.1](https://github.com/jbockle/au-jsonschema-form/compare/v0.4.0...v0.4.1) (2021-02-10)


### Bug Fixes

* **fill-defaults:** fix integer default not set ([9cd3864](https://github.com/jbockle/au-jsonschema-form/commit/9cd3864b57d074f4b9705875a8cf8f2d48770e69))






# [0.4.0](https://github.com/jbockle/au-jsonschema-form/compare/v0.3.2...v0.4.0) (2021-01-31)


### Features

* **readonly:** toggle whole form to be readonly ([567aa55](https://github.com/jbockle/au-jsonschema-form/commit/567aa557507b241b7e1ac430e4cd400ba51934f7))
* add support for ajv customization ([3509cc9](https://github.com/jbockle/au-jsonschema-form/commit/3509cc9c1efb8ff73f875e103f6e3d30af2127a2))
* themable form ([5d2e362](https://github.com/jbockle/au-jsonschema-form/commit/5d2e36266af813767d62503bb6a727a91466fbc4))





## [0.3.2](https://github.com/jbockle/au-jsonschema-form/compare/v0.3.1...v0.3.2) (2020-11-03)


### Bug Fixes

* conditional should debounce if validation ([ece9727](https://github.com/jbockle/au-jsonschema-form/commit/ece97277ad5a68a62144bbe27d78cdaa694ffcfc))
* only get value keys if schema supports it ([20ae2cf](https://github.com/jbockle/au-jsonschema-form/commit/20ae2cf8200b6b830a67ba2cb892c54347087159))





## [0.3.1](https://github.com/jbockle/au-jsonschema-form/compare/v0.3.0...v0.3.1) (2020-11-02)


### Reverts

* plugin option should be public ([56fbe99](https://github.com/jbockle/au-jsonschema-form/commit/56fbe99ef411d9f4c4fa1ed578d4f93a03099dba))






## [0.2.5](https://github.com/jbockle/au-jsonschema-form/compare/v0.2.4...v0.2.5) (2020-09-25)


### Features

* **view-class:** add custom css class to view ([d0a2c3a](https://github.com/jbockle/au-jsonschema-form/commit/d0a2c3ad269df8c660948fb0d481a7e9289b9a35))





## [0.2.4](https://github.com/jbockle/au-jsonschema-form/compare/v0.2.3...v0.2.4) (2020-09-23)


### Bug Fixes

* remove conditional refocus behavior ([7f202e3](https://github.com/jbockle/au-jsonschema-form/commit/7f202e36332c3d07acf49023e48fbd6e822a8135))





## [0.2.3](https://github.com/jbockle/au-jsonschema-form/compare/v0.2.2...v0.2.3) (2020-09-23)


### Bug Fixes

* cloning a null value should check if null ([7f78dab](https://github.com/jbockle/au-jsonschema-form/commit/7f78dab761ed6a7499600b54e3a229d0a22185e3))
* integer schema type is number slot type ([13e202f](https://github.com/jbockle/au-jsonschema-form/commit/13e202f7357f1de8e9e181df48d7378ba259f4ec))





## [0.2.2](https://github.com/jbockle/au-jsonschema-form/compare/v0.2.1...v0.2.2) (2020-09-15)


### Bug Fixes

* show aujsf-slot error message ([2973962](https://github.com/jbockle/au-jsonschema-form/commit/29739624850aa6f8eb14b49faa70443bf002ab4c))





## [0.2.1](https://github.com/jbockle/au-jsonschema-form/compare/v0.2.0...v0.2.1) (2020-09-13)


### Bug Fixes

* handle root x-ui-schema ([7656ab1](https://github.com/jbockle/au-jsonschema-form/commit/7656ab1ea4393722ab6a32486180dd89df1b4c8c))
* keyCode is deprecated ([0824d05](https://github.com/jbockle/au-jsonschema-form/commit/0824d05a3faba3ee0bd23aa23feb82a3c989b5bb))
* **metadata:** add missing customElement decos ([88f92e8](https://github.com/jbockle/au-jsonschema-form/commit/88f92e8c53b8d438a2f728f488ecc8d581af7319))





# [0.2.0](https://github.com/jbockle/au-jsonschema-form/compare/v0.1.1...v0.2.0) (2020-09-12)


### Bug Fixes

* **enhance:** cleanup enhanced view ([d44e782](https://github.com/jbockle/au-jsonschema-form/commit/d44e78245d68711b0b44c32efffc2a9c28f3d73e))
* **placeholder:** placeholder shows undefined ([7f585b2](https://github.com/jbockle/au-jsonschema-form/commit/7f585b2e22ed3c23f9111b7175d972ea6aead558))
* **validator:** duplicate error message added ([f8ddf71](https://github.com/jbockle/au-jsonschema-form/commit/f8ddf710087baff6adbfed0932e7f4ae3a790f43))


### Features

* **conditional:** add if/then/else conditionals ([08e3b9b](https://github.com/jbockle/au-jsonschema-form/commit/08e3b9bd04d9d39e95d64815c05004f21c346dc5))
* **placeholder:** add support for placeholders ([72b40d0](https://github.com/jbockle/au-jsonschema-form/commit/72b40d008e41b4f8c36aad14188461d701ce9c78))
* **ui-schema:** inline ui schema in json schemaadd 'x-ui-schema' extension property to json schema ([5261de0](https://github.com/jbockle/au-jsonschema-form/commit/5261de07b0f3700b4c257f43c89b04595d362ec0))





## [0.1.1](https://github.com/jbockle/au-jsonschema-form/compare/v0.1.0...v0.1.1) (2020-09-07)


### Bug Fixes

* **bindable:** add change handlers to root bindable properties ([30bb446](https://github.com/jbockle/au-jsonschema-form/commit/30bb44677795ecad6058d07615dde81bcff25a3a))





# [0.1.0](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.20...v0.1.0) (2020-09-07)

**Note:** Version bump only for package @aujsf/core





## [0.0.20](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.19...v0.0.20) (2020-08-27)

**Note:** Version bump only for package @aujsf/core





## [0.0.19](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.18...v0.0.19) (2020-08-27)


### Bug Fixes

* **allOf:** fix resolve nested allOf ([dcfde6e](https://github.com/jbockle/au-jsonschema-form/commit/dcfde6e833ae8847b38985e1f498208488b39501))
* **number:** fix 0 is undefined ([b8fa74f](https://github.com/jbockle/au-jsonschema-form/commit/b8fa74fcb6484ecc159b23f2900c30ec25cd2168))


### Features

* **array:** add array string enum checkboxes view ([7ea976c](https://github.com/jbockle/au-jsonschema-form/commit/7ea976c1fd380bfd574d5605ecbf301665a74776))
* **array:** add collection observer ([7ac76fd](https://github.com/jbockle/au-jsonschema-form/commit/7ac76fd478ad60990aea3e55b997f51774216d2a))
* **formats:** add views for date/time formats ([9e33c42](https://github.com/jbockle/au-jsonschema-form/commit/9e33c42ecd50d9bf00ea73acdee07c83a29a174d))
* **number:** add number range view ([0666f69](https://github.com/jbockle/au-jsonschema-form/commit/0666f69e3802541e51b332f390b9ea7017911072))
* **object:** support additional/pattern property ([3877671](https://github.com/jbockle/au-jsonschema-form/commit/38776714929ff67fbc9434800cfcc8199ea9b286))





## [0.0.18](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.17...v0.0.18) (2020-08-10)


### Bug Fixes

* **value-idempotent:** input value is idempotent ([7f9aa99](https://github.com/jbockle/au-jsonschema-form/commit/7f9aa99713ed49943dc6f74a414771d3cc45e9ee))


### Features

* **view-provider:** introduce extensible view providers ([3dd47b2](https://github.com/jbockle/au-jsonschema-form/commit/3dd47b213b3412fe75db670d3ac8aeeb5a16a9c4))





## [0.0.17](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.16...v0.0.17) (2020-07-30)

**Note:** Version bump only for package @aujsf/core





## [0.0.16](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.15...v0.0.16) (2020-07-30)


### Bug Fixes

* **array-repeater:** remove value converter ([418cc43](https://github.com/jbockle/au-jsonschema-form/commit/418cc431dac8608adb9d649732f88ff6af903fca))






## [0.0.15](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.14...v0.0.15) (2020-07-27)

**Note:** Version bump only for package @aujsf/core





## [0.0.14](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.13...v0.0.14) (2020-07-27)


### Features

* **readonly-override:** add ui schema option to override readonly ([4212e4d](https://github.com/jbockle/au-jsonschema-form/commit/4212e4d87c06c1d9edee6c5d50ceceb053e2b640))





## [0.0.13](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.12...v0.0.13) (2020-07-27)


### Bug Fixes

* **combined schema:** resolve schema refs ([13c706a](https://github.com/jbockle/au-jsonschema-form/commit/13c706ab61eeb0ef5c90605c98f7ec535638a209))





## [0.0.12](https://github.com/jbockle/au-jsonschema-form/compare/v0.0.11...v0.0.12) (2020-07-27)


### Features

* **no-view:** hide schema form elements ([0534e14](https://github.com/jbockle/au-jsonschema-form/commit/0534e14607ae7e228ef00a227be0c38189cff102))
