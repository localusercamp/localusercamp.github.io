<template>
    <section
        :class="[
            'project-view__section',
            'mt-6',
        ]"
        :style="{ '--section-index': index }"
    >
        <div
            :class="[
                'project-view__columns',
                { 'project-view__columns--single': !results.length },
            ]"
        >
            <ProjectViewList
                title="Задачи"
                :items="tasks"
                class="project-view__tasks"
            />

            <ProjectViewList
                v-if="results.length"
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

.project-view__columns--single {
    grid-template-columns: 1fr;
}

.project-view__tasks {
    max-width: 66.6667%;
}

@media (width < 69rem) {
    .project-view__columns {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
</style>
