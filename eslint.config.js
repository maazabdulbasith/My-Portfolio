import { defineConfig } from "eslint";

export default defineConfig({
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
    rules: {
        // Add your custom rules here
    },
    ignorePatterns: ["node_modules/", "build/"], // Replace with directories you want to ignore
});
