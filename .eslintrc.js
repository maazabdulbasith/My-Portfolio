module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
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
    plugins: ["react", "jsx-a11y", "import"],
    rules: {},
    ignorePatterns: ["node_modules/", "build/"],

    settings: {
        react: {
            version: "19.1",
        },
    },

    env: {
        browser: true,
        node: true,
        es2021: true,
    },
};
