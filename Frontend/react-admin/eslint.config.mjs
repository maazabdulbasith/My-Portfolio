// eslint.config.mjs
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJSXA11y from "eslint-plugin-jsx-a11y";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

// Fix for __dirname in ES Modules
const compat = new FlatCompat({
    baseDirectory: path.dirname(fileURLToPath(import.meta.url)), // Using import.meta.url to get the current directory
    resolvePluginsRelativeTo: path.dirname(fileURLToPath(import.meta.url)), // Also resolve plugins from the same directory
});

// Cleaned globals to avoid issues
const cleanedGlobals = Object.fromEntries(
    Object.entries(globals.browser).map(([key, value]) => [
        key.trim(),
        value, // Make sure no extra spaces in global names
    ])
);

// Using flat config
export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: cleanedGlobals, // Using cleaned globals without spaces
        },
        plugins: {
            react: pluginReact,
            "react-hooks": pluginReactHooks,
            "jsx-a11y": pluginJSXA11y,
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            "react/react-in-jsx-scope": "off", // Disable the rule requiring 'React' in scope when using JSX
            "react/prop-types": "off", // Disable PropTypes validation
            ...pluginReactHooks.configs.recommended.rules,
            ...pluginJSXA11y.configs.recommended.rules,
        },
        settings: {
            react: {
                version: "detect", // Automatically detect the React version
            },
        },
    },
    ...compat.extends("plugin:react/recommended").flat(), // Including the recommendations from react plugin
];
