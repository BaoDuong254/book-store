import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    {
        plugins: {
            prettier: eslintPluginPrettier
        },
        rules: {
            'prettier/prettier': [
                'warn',
                {
                    arrowParens: 'always',
                    semi: false,
                    trailingComma: 'none',
                    tabWidth: 4,
                    endOfLine: 'auto',
                    useTabs: false,
                    singleQuote: true,
                    printWidth: 120,
                    jsxSingleQuote: true,
                    plugins: ['@prettier/plugin-pug']
                }
            ]
        },
        ignores: ['**/node_modules/', '**/dist/']
    },
    eslintConfigPrettier
]
