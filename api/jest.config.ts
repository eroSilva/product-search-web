import type { Config } from 'jest'
const config: Config = {
  setupFiles: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**', '!./src/app.ts', '!./src/__fixtures__/**'],
  moduleNameMapper: {
    // '@/(.*)': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default config
