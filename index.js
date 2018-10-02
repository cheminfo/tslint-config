'use strict';

module.exports = {
  defaultSeverity: 'error',
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  jsRules: {},
  rules: {
    forin: false,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-sort-keys': false,
    quotemark: [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
    'prefer-template': true,
    'arrow-parens': true,
    semicolon: [true, 'always', 'strict-bound-class-methods']
  }
};
