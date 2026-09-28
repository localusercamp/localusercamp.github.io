export default defineNuxtConfig({

    modules: [
        "@nuxt/eslint",
    ],

    devtools: {
        enabled: true,
    },
    compatibilityDate: "2025-07-15",

    typescript: {
        strict: true,
        typeCheck: true,
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },
})
