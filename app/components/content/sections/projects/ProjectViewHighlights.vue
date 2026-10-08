<template>
    <section
        :class="[
            'project-view__section',
            'mt-6',
        ]"
        :style="{ '--section-index': index }"
    >
        <div class="project-view__columns">
            <ProjectViewList
                title="Задачи"
                :items="tasks"
            />

            <ProjectViewList
                title="Результаты"
                :items="results"
            />
        </div>
    </section>
</template>



<script setup lang="ts">
import ProjectViewList from "./ProjectViewList.vue";

const {
    index,
    tasks,
    results,
} = defineProps<{
    index: number;
    tasks: string[];
    results: string[];
}>();
</script>



<style scoped>
.project-view__columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

@media (width < 69rem) {
    .project-view__columns {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
</style>
