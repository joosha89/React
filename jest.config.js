const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './src',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^store/(.*)': '<rootDir>/src/store/$1',
    '^utility/(.*)': '<rootDir>/src/utility/$1',
    '^__mocks__/(.*)': '<rootDir>/src/__mocks__/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)'],
  verbose: true,
  coverageThreshold: {
    './src/': {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};

module.exports = createJestConfig(customJestConfig);