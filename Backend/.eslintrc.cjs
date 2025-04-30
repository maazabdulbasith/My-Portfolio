module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    parserOptions: {
        ecmaVersion: 2021, // Specify ECMAScript version
        sourceType: "module", // Allow import/export syntax
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "jsx-a11y", "import"],
    rules: {},
    ignorePatterns: ["node_modules/", "build/"],
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
};
