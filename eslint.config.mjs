import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];
