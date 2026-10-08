<template>
    <section
        :class="[
            'project-view__section',
            'mt-6',
        ]"
        :style="{ '--section-index': index }"
    >
        <p
            class="project-view__about"
            v-text="text"
        />
    </section>
</template>



<script setup lang="ts">
const {
    index,
    text,
} = defineProps<{
    index: number;
    text: string;
}>();
</script>



<style scoped>
.project-view__about {
    color: var(--color-text-ghosty);
    font-size: 1rem;
    line-height: 1.6;
}
</style>
