module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/tests/pretest.ts'],
  moduleNameMapper: {
    '^@aujsf/(.*)$': '<rootDir>/../$1/src',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.html?$': 'html-loader-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.spec\\.(ts|js)$',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text-summary',
    'html',
  ],
};
