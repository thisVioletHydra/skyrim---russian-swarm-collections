/* eslint-env node */
// eslint-disable-next-line unicorn/prefer-module
require('@rushstack/eslint-patch/modern-module-resolution');

const isProduction = process.env.NODE_ENV === 'production';

const arrayType = ['.js', '.mjs', '.jsx', '.ts', '.d.ts', '.tsx'];
const alias = {
  '@': './src',
  '@api': './src/api',
  '@assets': './src/assets',
  '@components': './src/components',
  '@pages': './src/pages',
  '@routers': './src/routers',
  '@store': './src/store',
  '@stores': './src/stores',
  '@utils': './src/utils',
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',

    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',

    'plugin:sonarjs/recommended',
    '@vue/eslint-config-typescript/recommended',

    'plugin:sonarjs/recommended',

    '@vue/eslint-config-prettier',
  ],

  plugins: [
    'vue',
    'unicorn',
    'import',
    'package-json',
    'promise',
    'optimize-regex',

    'sonarjs',

    'prettier',
    //
  ],

  root: true,
  rules: {
    'no-undef': 0,
    'no-import-assign': 2,
    'vue/script-setup-uses-vars': 1,
    'vue/no-unused-vars': 1,

    'vue/component-tags-order': [2, { order: ['template', 'script', 'style'] }],

    'max-len': [
      2,
      140,
      2,
      {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    'linebreak-style': [0, isProduction ? 'unix' : 'windows'],
    'no-console': isProduction ? 1 : 0,
    'no-debugger': isProduction ? 1 : 0,

    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/prefer-namespace-keyword': 2,

    'vue/multi-word-component-names': [
      0,
      {
        ignores: [],
      },
    ],

    // line
    'vue/no-template-key': 2,
    'vue/no-v-for-template-key': 0,
    'vue/no-v-for-template-key-on-child': 0,
    'vue/require-v-for-key': 2,
    'vue/valid-v-for': 2,
    'space-before-function-paren': [0, 'always'],

    semi: [2, 'always'],
    indent: [0, 2],
    'comma-dangle': [2, 'only-multiline'],
    'css-lcurlyexpected': 0,

    'import/first': 2,
    'import/no-named-as-default': 1,

    'import/newline-after-import': [2, { count: 1 }],
    'import/no-unresolved': [2, { amd: true, commonjs: true }],
    'import/prefer-default-export': 0,
    'import/default': 2,
    'import/export': 2,

    'import/extensions': [2, { ignorePackages: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/no-default-export': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    'max-classes-per-file': 0,

    'no-unreachable': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,

    'promise/always-return': 2,
    'promise/avoid-new': 1,
    'promise/catch-or-return': 2,
    'promise/no-callback-in-promise': 1,
    'promise/no-native': 0,
    'promise/no-nesting': 1,
    'promise/no-new-statics': 2,
    'promise/no-promise-in-callback': 1,
    'promise/no-return-in-finally': 1,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/valid-params': 1,

    'unicorn/better-regex': 2,
    'unicorn/catch-error-name': 2,
    'unicorn/consistent-destructuring': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/custom-error-definition': 0,
    'unicorn/empty-brace-spaces': 2,
    'unicorn/error-message': 2,
    'unicorn/escape-case': 2,
    'unicorn/expiring-todo-comments': 2,
    'unicorn/explicit-length-check': 2,
    'unicorn/filename-case': 0,
    'unicorn/import-index': 0,
    'unicorn/import-style': 1,
    'unicorn/new-for-builtins': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-callback-reference': 2,
    'unicorn/no-array-for-each': 2,
    'unicorn/no-array-method-this-argument': 2,
    'unicorn/no-array-push-push': 2,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-await-expression-member': 2,
    'unicorn/no-console-spaces': 2,
    'unicorn/no-document-cookie': 2,
    'unicorn/no-empty-file': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-invalid-remove-event-listener': 2,
    'unicorn/no-keyword-prefix': 0,
    'unicorn/no-lonely-if': 2,
    'no-nested-ternary': 0,
    'unicorn/no-nested-ternary': 2,
    'unicorn/no-new-array': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-null': 2,
    'unicorn/no-object-as-default-parameter': 2,
    'unicorn/no-process-exit': 2,
    'unicorn/no-static-only-class': 2,
    'unicorn/no-thenable': 2,
    'unicorn/no-this-assignment': 2,
    'unicorn/no-unreadable-array-destructuring': 2,
    'unicorn/no-unsafe-regex': 0,
    'unicorn/no-unused-properties': 0,
    'unicorn/no-useless-fallback-in-spread': 2,
    'unicorn/no-useless-length-check': 2,
    'unicorn/no-useless-promise-resolve-reject': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/no-useless-undefined': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/numeric-separators-style': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-array-flat': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-at': 0,
    'unicorn/prefer-code-point': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-dom-node-dataset': 2,
    'unicorn/prefer-dom-node-remove': 2,
    'unicorn/prefer-dom-node-text-content': 2,
    'unicorn/prefer-export-from': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-json-parse-buffer': 2,
    'unicorn/prefer-keyboard-event-key': 2,
    'unicorn/prefer-math-trunc': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/prefer-module': 1,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-node-protocol': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-object-from-entries': 2,
    'unicorn/prefer-optional-catch-binding': 2,
    'unicorn/prefer-prototype-methods': 2,
    'unicorn/prefer-query-selector': 2,
    'unicorn/prefer-reflect-apply': 2,
    'unicorn/prefer-regexp-test': 2,
    'unicorn/prefer-set-has': 2,
    'unicorn/prefer-spread': 2,
    'unicorn/prefer-string-replace-all': 0,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-string-starts-ends-with': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/prefer-switch': 2,
    'unicorn/prefer-ternary': 2,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prefer-type-error': 2,
    'unicorn/prevent-abbreviations': [
      2,
      {
        replacements: {
          // argument: {
          //   restArgs: true,
          // },

          args: {
            arguments: false,
            rest: true,
          },
          props: {
            properties: false,
          },
          properties: {
            props: true,
          },
          arr: {
            array: false,
            items: true,
          },
        },
      },
    ],
    'unicorn/relative-url-style': 2,
    'unicorn/require-array-join-separator': 2,
    'unicorn/require-number-to-fixed-digits-argument': 2,
    'unicorn/require-post-message-target-origin': 0,
    'unicorn/string-content': 0,
    'unicorn/template-indent': 1,
    'unicorn/throw-new-error': 2,

    'prettier-vue/prettier': [0, { delete: true }],
    'prettier/prettier': [0, {}, { usePrettierrc: true }],
    'prettier/prettier-vue': [0, {}, { usePrettierrc: true }],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },

    'import/extensions': arrayType,
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      alias: true,
      webpack: {},
      node: { extensions: arrayType },

      'eslint-import-resolver-custom-alias': {
        alias,
        extensions: arrayType,
      },
    },
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: true,
        script: true,
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'js' },
          comments: false,
        },
      },
      usePrettierrc: true,

      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false,
      },
    },
  },
};
