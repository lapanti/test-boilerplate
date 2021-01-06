import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    modulePaths: [],
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    resetMocks: true,
}

export default config
