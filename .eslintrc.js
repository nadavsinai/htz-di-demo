module.exports = {
  /* Extend airbnb's style-guide enforcement */
  "extends": "eslint-config-airbnb/base",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "plugins": ["mocha"],
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,

    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never",
    }],
    "brace-style": [2, "stroustrup", {"allowSingleLine": true}],
    /* Warn about long line */
    "max-len": [1, 100, 2],
    /* Warn about use of console */
    "no-console": [1],
    /* Warn about use of debugger */
    "no-debugger": [1],
    /* Allow nested ternaries */
    "no-nested-ternary": 0,
    /* Warn when declaring a variable with a name that already exists in the containing scope */
    "no-shadow": [1],
    /* Forbid referencing a variable before it is defined, but allow using declared functions */
    "no-use-before-define": [2, "nofunc"],
    /* Warn when referencing an undefined variable */
    "no-undef": [1],
    "no-trailing-spaces":0,
    /* Forbid expressions that are never used */
    "no-unused-expressions": [2, {allowShortCircuit: true, allowTernary: true}],
    /* Warn when declaring a variable without using it */
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-warning-comments": [1, {"terms": ["fixme", "todo"], "location": "start"}],
    "valid-jsdoc": [2, {
      "requireReturn": false,
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],
    /* disallow certain syntax forms */
    'no-restricted-syntax': [
      2,
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  }
};
