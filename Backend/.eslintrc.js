module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["import"],
    rules: {},
    ignorePatterns: ["node_modules/", "build/"],
    settings: {
        "import/resolver": {
            node: {
                paths: ["."],
                extensions: [".js", ".jsx"],
            },
        },
    },
    env: {
        node: true,
        es2021: true,
    },
};
