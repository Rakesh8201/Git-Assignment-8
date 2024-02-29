module.exports = {
  extends: 'eslint:recommended',
  'env': {
    'browser': true,
    'amd': true,
    'node': true
  },
  rules: {
    // Enforce two spaces for indentation
    'indent': ['error', 2],
  
    // Require the use of single quotes
    'quotes': ['error', 'single'],
  
    // Require a space before and after arrow functions' arrow
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
  
    // Enforce the use of === and !== over == and !=
    'eqeqeq': 'error',
  
    // Disallow unnecessary semicolons
    'no-extra-semi': 'error',
  
    // Enforce a maximum line length
    'max-len': ['error', { 'code': 80 }],
  
    // Disallow console statements in production code
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  
  },
};
  