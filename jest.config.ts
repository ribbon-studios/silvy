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
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
    }
};

export default jestConfig;
