import type { Config } from 'jest'
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**', '!./src/app.ts'],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
}

export default config
