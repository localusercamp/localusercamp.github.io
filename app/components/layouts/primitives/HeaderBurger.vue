<template>
    <button
        type="button"
        :class="[
            'rounded-2 p-1',
            'text-primary-500',
            'hover:bg-neutral-100 dark:hover:bg-neutral-900',
        ]"
        @click="handleClick()"
    >
        <icon-x
            v-if="opened"
            class="size-6"
        />
        <icon-menu
            v-else
            class="size-6"
        />
    </button>
</template>



<script setup lang="ts">
const {
    opened,
} = defineProps<{
    opened: boolean;
}>();

const emit = defineEmits<{
    toggle: [];
}>();



function handleClick(): void {
    emit("toggle");
}
</script>
