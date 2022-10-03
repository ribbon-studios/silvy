import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: './tsconfig.test.json'
        }]
    },

    collectCoverageFrom: [
        '<rootDir>/src/**/*'
    ],

    coveragePathIgnorePatterns: [
        '__tests__'
    ],

    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],

    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        ...pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' })
    }
};

export default jestConfig;
