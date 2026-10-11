<template>
    <div
        :class="[
            'min-h-screen',
            'flex flex-col items-center justify-center gap-4',
            'px-4',
            'bg-surface',
        ]"
    >
        <p
            :class="[
                'font-mono font-bold',
                'text-primary-500',
                'text-6 leading-8',
            ]"
            v-text="error.statusCode"
        />

        <h1
            :class="[
                'text-center',
                'font-bold',
                'text-7 leading-9',
            ]"
            v-text="pageTitle"
        />

        <p
            :class="[
                'text-center',
                'text-text-ghosty',
                'text-4 leading-6',
            ]"
            v-text="pageDescription"
        />

        <a href="/">
            <ui-button
                variant="solid"
                inert
            >
                <icon-arrow-left class="size-5 -ml-2" />
                <span v-text="v('error_back_home')" />
            </ui-button>
        </a>
    </div>
</template>



<script setup lang="ts">
import type { NuxtError } from "#app";

const {
    error,
} = defineProps<{
    error: NuxtError;
}>();

const { v, vs } = useVocabulary();

const pageTitle = computed(() => error.statusCode === 404 ? v("error_not_found_title") : v("error_generic_title"));

const pageDescription = computed(() => error.statusCode === 404 ? v("error_not_found_description") : v("error_generic_description"));

useSeoMeta({
    title: () => `${pageTitle.value} | ${vs(["first_name", "last_name"])}`,
    robots: "noindex",
});
</script>
