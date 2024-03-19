// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        // 'no-undef': 'error',
        // eslint-env node
        // 'linebreak-style': 'off',
        // '@typescript-eslint/quotes': ['error', 'single'],
        'linebreak-style': ['error', 'windows'],
        'quotes': 'off',
        // 'quotes': ['off', ' single'],
        '@typescript-eslint/quotes': ['error', 'single'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { ignoreComments: true, code: 105 }],
        'no-param-reassign': 'off',
        // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // 'jsx-a11y/no-static-element-interactions': 'off',
        // 'jsx-a11y/click-events-have-key-events': 'off',
        // 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        // 'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        // 'no-unused-vars': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error']
        // 'no-unused-vars': [
        //     'error',
        //     {
        //         'varsIgnorePattern': '^[A-Z]'
        //     }
        // ],
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        },
    ],
    root: true
};
