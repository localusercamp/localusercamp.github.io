<template>
    <div class="project-view__block">
        <h4
            class="project-view__block-title"
            v-text="title"
        />

        <ul class="project-view__list">
            <li
                v-for="item of items"
                :key="item"
                v-text="item"
            />
        </ul>
    </div>
</template>



<script setup lang="ts">
const {
    title,
    items,
} = defineProps<{
    title: string;
    items: string[];
}>();
</script>



<style scoped>
.project-view__block-title {
    margin-bottom: 0.75rem;
    color: var(--color-primary-500);
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.project-view__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--color-text-ghosty);
    font-size: 0.9375rem;
    line-height: 1.5;
}

.project-view__list li {
    position: relative;
    padding-left: 1.125rem;
}

.project-view__list li::before {
    content: "";
    position: absolute;
    top: 0.5625rem;
    left: 0;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: var(--color-primary-500);
}
</style>
