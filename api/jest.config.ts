import type { Config } from 'jest'
const config: Config = {
  setupFiles: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**', '!./src/app.ts', '!./src/__fixtures__/**'],
  coverageThreshold: {
    global: {
      branches: 80,
    },
  },
}

export default config
