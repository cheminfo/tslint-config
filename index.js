'use strict';

module.exports = {
  defaultSeverity: 'error',
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  jsRules: {},
  rules: {
    forin: false,
    'object-literal-sort-keys': false,
    'variable-name': false,
    quotemark: [true, 'single', 'jsx-double'],
    'prefer-template': true,
    'arrow-parens': true
  },
  rulesDirectory: []
};
