// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    {
        rules: {
            "vue/multi-word-component-names": "off",
            "vue/html-indent": ["error", 4],

            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-multiple-empty-lines": ["warn", { max: 3 }],
        },
    },
);
