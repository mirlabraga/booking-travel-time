import type {Config} from '@jest/types';
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist/'],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    coverageDirectory: '<rootDir>/coverage/',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/**/*.d.ts',
        '!<rootDir>/src/index.ts',
        '!<rootDir>/src/types.ts',
        '!<rootDir>/src/utils.ts',
    ],
}