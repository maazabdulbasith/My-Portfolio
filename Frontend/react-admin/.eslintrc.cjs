// Frontend/react-admin/.eslintrc.cjs
/**
 * This file exists ONLY so that create-react-app’s internal ESLint run
 * (during `npm run build`) can resolve .jsx imports.
 * It extends the default CRA rules and tweaks the import resolver.
 */
module.exports = {
    // let CRA’s “react-app” config stay in charge
    extends: ["react-app"],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".json"], // added .jsx here
            },
        },
    },
};
