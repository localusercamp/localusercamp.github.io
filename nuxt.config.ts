export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "nuxt-single-html",
    ],

    devtools: {
        enabled: true,
    },

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: "2025-05-15",

    typescript: {
        strict: true,
        typeCheck: true,
    },
});
