/* eslint-disable */
const baseConfig = require('../jest.config.base');

module.exports = {
  ...baseConfig,
  setupFiles: ['<rootDir>/__tests__/pretest.ts'],
};
