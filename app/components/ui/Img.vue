<template>
    <img
        :src="src"
        :alt="alt"
        class="select-none"
        @dragstart.prevent
    >
</template>



<script setup lang="ts">
const {
    src,
    alt,
} = defineProps<{
    src: string;
    alt: string;
}>();
</script>
