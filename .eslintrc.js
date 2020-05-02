module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
        project: path.resolve(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ["jest"],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended",
    ],
    rules: {
        "object-curly-spacing": ["error", "always"],
        "no-extra-parens": "error",
        "no-unused-vars": "off",
        "no-multi-spaces": "error",
        "react/prop-types": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
