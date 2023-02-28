/** @type { import('stylelint').Config } */

const config = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules',
    'stylelint-order-config-standard',
  ],
  overrides: [
    {
      files: [
        '**/*.js',
        '**/*.cjs',
        '**/*.mjs',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
      ],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
  plugins: ['stylelint-order'],
  rules: {
    'no-descending-specificity': null, // - allow nested selectors
    'no-empty-source': null, // - allow files without any styles
    'order/order': ['custom-properties'],
  },
}

module.exports = config
