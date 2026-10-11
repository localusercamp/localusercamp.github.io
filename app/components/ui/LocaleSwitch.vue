<template>
    <button
        type="button"
        :class="[
            'flex size-8 items-center justify-center',
            'rounded-2',
            'font-semibold',
            'text-4 leading-6',
            'text-primary-500',
            'hover:bg-neutral-100 dark:hover:bg-neutral-900',
        ]"
        @click="toggleLocale()"
    >
        <span v-text="label" />
    </button>
</template>



<script setup lang="ts">
const { locale, setLocale } = useLocale();

const label = computed<string>(() => locale.value.toUpperCase());



function toggleLocale(): void {
    setLocale(locale.value === "ru" ? "en" : "ru");
}
</script>
