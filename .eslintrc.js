module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["import"],
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
