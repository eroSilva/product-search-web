import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      branches: 80,
    },
  },
}

export default createJestConfig(config)
