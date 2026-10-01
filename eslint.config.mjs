// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    {
        rules: {
            "@stylistic/semi": ["error", "always"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/quotes": ["warn", "double"],
            "@stylistic/indent": ["warn", 4],
            "@stylistic/no-multiple-empty-lines": ["warn", { max: 3 }],
            "@stylistic/eol-last": ["warn", "always"],
            "@stylistic/no-trailing-spaces": ["warn"],
            "@stylistic/member-delimiter-style": ["error", { multiline: { delimiter: "semi", requireLast: true } }],
            "@stylistic/no-multi-spaces": ["off"],
            "@stylistic/key-spacing": ["warn", { beforeColon: false, afterColon: true, mode: "minimum" }],

            "vue/multi-word-component-names": "off",
            "vue/html-indent": ["error", 4],
            "vue/no-multi-spaces": ["off"],
            "vue/max-attributes-per-line": ["error", { singleline: { max: 99 }, multiline: { max: 1 } }],
        },
    },
);
