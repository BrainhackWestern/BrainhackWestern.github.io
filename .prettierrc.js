/** @type {import("prettier").Config} */
const config = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    'next',
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '^[./]', // relative imports
    '^[.]' // relative imports
  ]
};

module.exports = config;
