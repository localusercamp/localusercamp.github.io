<template>
    <article>
        <ProjectCard
            ref="project-card"
            :image="image"
            :title="title"
            :role="role"
            :period="period"
            :summary="summary"
            :class="{ 'opacity-0': isCardHidden }"
            @click:card="handleCardClick()"
        />

        <ProjectView
            v-model:opened="opened"
            :card-b-box="{ width, height, top, left }"
            :image="image"
            :title="title"
            :description="description"
            :role="role"
            :period="period"
            :summary="summary"
            :tags="tags"
            :links="links"
            :gallery="gallery"
            :tasks="tasks"
            :results="results"
            @close:view="handleViewClosed()"
        />
    </article>
</template>



<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";

import { useElementBounding } from "@vueuse/core";

import ProjectCard from "./ProjectCard.vue";
import ProjectView from "./ProjectView.vue";

const {
    image,
    title,
    description,
    role,
    period,
    summary,
    tags,
    links,
    gallery,
    tasks,
    results,
} = defineProps<{
    image: string;
    title: string;
    description: string;
    role: string;
    period: string;
    summary: string;
    tags: string[];
    links: {
        label: string;
        href: string;
    }[];
    gallery: string[];
    tasks: string[];
    results: string[];
}>();



const {
    state: opened,
    on: openView,
} = useBooleanState();

const isCardHidden = ref<boolean>(false);

function handleCardClick(): void {
    isCardHidden.value = true;
    openView();
}

function handleViewClosed(): void {
    isCardHidden.value = false;
}



const ProjectCardTref = useTemplateRef<ComponentPublicInstance>("project-card");

const { width, height, left, top } = useElementBounding(ProjectCardTref);
</script>
