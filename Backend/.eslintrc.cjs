// Backend/.eslintrc.cjs
module.exports = {
    root: true, // <------- stops ESLint from searching above this dir
    env: {
        node: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    rules: {},
    ignorePatterns: ["node_modules/", "build/"],
};
