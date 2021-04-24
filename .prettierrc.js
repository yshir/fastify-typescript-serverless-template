/** @type {import('prettier').Options} */

const config = {
  // base
  arrowParens: 'avoid',
  bracketSpacing: true,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  // addons
  importOrder: ['^@src/(.*)$', '^[./]'],
  importOrderSeparation: true,
};

module.exports = config;
