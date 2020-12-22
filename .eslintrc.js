module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /*
     * 0 for off
     * 1 for warning
     * 2 for error
     */
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/member-delimiter-style": 0, // reported: could conflict with prettier
    "@typescript-eslint/type-annotation-spacing": 0, // reported: could conflict with prettier
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/camelcase": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
