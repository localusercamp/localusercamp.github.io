<template>
    <span
        :class="[
            'rounded-2',
            'border border-border-neutral',
            'px-2.5 py-0.5',
            'text-3 leading-4',
            'text-primary-500',
        ]"
        v-text="tag"
    />
</template>



<script setup lang="ts">
const {
    tag,
} = defineProps<{
    tag: string;
}>();
</script>
