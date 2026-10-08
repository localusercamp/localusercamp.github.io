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

        <client-only>
            <ProjectView
                v-if="!isMobile"
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

            <ProjectDrawer
                v-else
                v-model:opened="opened"
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
        </client-only>
    </article>
</template>



<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";

import { useElementBounding, useMediaQuery } from "@vueuse/core";

import ProjectCard from "./ProjectCard.vue";
import ProjectDrawer from "./ProjectDrawer.vue";
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

const isMobile = useMediaQuery("(width < 69rem)");


function handleCardClick(): void {
    isCardHidden.value = !isMobile.value;
    openView();
}

function handleViewClosed(): void {
    isCardHidden.value = false;
}



const ProjectCardTref = useTemplateRef<ComponentPublicInstance>("project-card");

const { width, height, left, top } = useElementBounding(ProjectCardTref);
</script>
