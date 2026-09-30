<template>
    <button
        type="button"
        :class="[
            'rounded-2',
            'hover:bg-neutral-100 dark:hover:bg-neutral-900',
            'p-1',
            'text-primary-500',
        ]"
        @click="toggleDarkMode()"
    >
        <client-only>
            <icon-moon
                v-show="isDarkMode"
                class="size-6"
            />
            <icon-sun
                v-show="!isDarkMode"
                class="size-6"
            />
        </client-only>
    </button>
</template>



<script setup lang="ts">
const {
    isDarkMode,
    toggleDarkMode,
} = useDarkMode();
</script>
