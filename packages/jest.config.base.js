module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@au-jsonschema-form/(.*)$': '<rootDir>/../$1/src',
  },
  transform: {
    '^.+\\.html?$': 'html-loader-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.spec\\.(ts|js)$',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text-summary',
    'html',
  ],
};
