<template>
    <header>
        <h2
            :class="[
                'font-medium',
                'text-primary-500',
            ]"
            v-text="title"
        />

        <p
            :class="[
                'mt-2',
                'font-bold',
                'text-7 leading-8',
                'md:text-9 md:leading-10',
            ]"
            v-text="subtitle"
        />

        <p
            :class="[
                'mt-3',
                'text-text-ghosty',
                'text-3.5 leading-5',
            ]"
            v-text="description"
        />
    </header>
</template>



<script setup lang="ts">
const {
    title,
    subtitle,
    description,
} = defineProps<{
    title: string;
    subtitle: string;
    description: string;
}>();
</script>
