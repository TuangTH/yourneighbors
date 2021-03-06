module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', 'import', 'prettier', '@typescript-eslint'],
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js', '.storybook/*', 'stories/*'],
    rules: {
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error'],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': ['off', {}],
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'class-methods-use-this': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
