module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "next",
  ],
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "sort-destructure-keys",
    "simple-import-sort",
    "json-format",
    "unused-imports",
    "import",
    "unicorn",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "no-console": "error",
    "react/jsx-no-useless-fragment": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "unused-imports/no-unused-imports": "error",
    "react/jsx-sort-props": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-array-index-key": "warn",
    "react/prop-types": "off",
    "unicorn/no-null": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "@typescript-eslint/no-shadow": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ["^.*\\.d\\.ts$"],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: ["tsconfig.json", "package/tsconfig.json"],
      },
      node: {
        project: ["tsconfig.json", "package/tsconfig.json"],
      },
    },
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
        "unicorn/prevent-abbreviations": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "unicorn/no-useless-undefined": "off",
      },
    },
    {
      files: ["*.story.*", "*.test.*"],
      rules: {
        "import/no-default-export": "off",
        "unicorn/no-null": "off",
      },
    },
  ],
};
