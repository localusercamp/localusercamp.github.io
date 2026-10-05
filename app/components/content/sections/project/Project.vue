<template>
    <article>
        <ProjectCard
            ref="project-card"
            :image="image"
            :title="title"
            :description="description"
            :class="{ 'opacity-0': opened }"
            @click:card="handleCardClick()"
        />

        <ProjectView
            v-model:opened="opened"
            :card-b-box="{ width, height, top, left }"
            :image="image"
            :title="title"
            :description="description"
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
} = defineProps<{
    image: string;
    title: string;
    description: string;
}>();



const {
    state: opened,
    on: openView,
} = useBooleanState();

function handleCardClick(): void {
    openView();
}



const ProjectCardTref = useTemplateRef<ComponentPublicInstance>("project-card");

const { width, height, left, top } = useElementBounding(ProjectCardTref);
</script>
