/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^@src/(.+)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './.coverage',
  testEnvironment: 'node',
};

module.exports = config;
