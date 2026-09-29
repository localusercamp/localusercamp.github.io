<template>
    <button
        type="button"
        :class="[
            'rounded-3 bg-primary-500 hover:bg-primary-600',
            'px-6 py-3',
            'font-bold',
            'text-4 leading-6',
            'text-white dark:text-neutral-950',
        ]"
    >
        <slot />
    </button>
</template>



<script setup lang="ts">
</script>
