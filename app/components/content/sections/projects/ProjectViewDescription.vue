<template>
    <section
        :class="[
            'project-view__section',
            'mt-6',
        ]"
        :style="{ '--section-index': index }"
    >
        <p
            :class="[
                'text-text-ghosty',
                'text-3.5 leading-5',
                'md:text-4 md:leading-6.5',
            ]"
            v-text="description"
        />

        <p
            :class="[
                'mt-2',
                'text-text-ghosty',
                'text-3.5 leading-5',
                'md:text-4 md:leading-6.5',
            ]"
            v-text="contribution"
        />
    </section>
</template>



<script setup lang="ts">
const {
    index,
    description,
    contribution,
} = defineProps<{
    index: number;
    description: string;
    contribution: string;
}>();
</script>
