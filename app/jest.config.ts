import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**',
    '!./src/app/**',
    '!./src/**/*.loading.tsx',
    '!./src/**/types.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setupAfterEnv.ts'],
  setupFiles: ['<rootDir>/tests/__mocks__/next-navigation.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/file-mock.ts`,
  },
}

export default createJestConfig(config)
