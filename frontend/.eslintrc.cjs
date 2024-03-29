module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,ejs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // This is the key line - it tells ESLint to expect JSX syntax
    },
    requireConfigFile: false,
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": ["error", "always-multiline"], // Enforces trailing commas for multiline statements
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }], // Enforces .jsx extension for JSX files
    "react/react-in-jsx-scope": "off", // Prevents React to be incorrectly marked as unused
    quotes: ["error", "double"],
  },
  settings: {
    react: {
      version: "detect", // Automatically picks the version you have installed.
    },
  },
}
