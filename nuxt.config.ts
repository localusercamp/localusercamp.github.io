import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxtjs/color-mode",
        "nuxt-lucide-icons",
    ],

    ssr: true,

    devtools: {
        enabled: true,
    },

    css: [
        "~/assets/css/main.css",
    ],

    colorMode: {
        preference: "system",
        fallback: "dark",
        storage: "cookie",
        storageKey: "color-mode",
    },

    compatibilityDate: "2026-09-28",

    nitro: {
        preset: "github-pages",
    },

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    typescript: {
        strict: true,
        typeCheck: true,
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },

    fonts: {
        families: [
            {
                name: "Inter",
                provider: "google",
                weights: [400, 500, 600, 700],
                styles: ["normal"],
                subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
            },
        ],
    },

    lucide: {
        namePrefix: "Icon",
    },
});
