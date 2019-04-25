module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["error", 2],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "semi": ["error", "always"],
    "@typescript-eslint/no-parameter-properties": "off"
  },
};
