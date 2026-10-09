<template>
    <div
        :class="[
            'min-h-screen',
            'pt-16 md:pt-18',
            'flex flex-col items-stretch justify-start',
            'dark:text-white',
        ]"
    >
        <LayoutHeader />

        <main
            :class="[
                'flex-1',
            ]"
        >
            <slot />
        </main>

        <LayoutFooter />
    </div>
</template>



<script setup lang="ts">
import { LayoutHeader, LayoutFooter } from "~/components/layouts/default";

useHead({
    bodyAttrs: {
        class: "bg-neutral-50 dark:bg-neutral-950",
    },
});
</script>

