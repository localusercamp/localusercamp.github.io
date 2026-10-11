<template>
    <SectionWrapper
        id="projects"
        :inner-class="[
            'py-8 md:py-20',
        ]"
    >
        <SectionHeader
            :title="v('projects_title')"
            :subtitle="v('projects_subtitle')"
            :description="v('projects_description')"
        />

        <ul
            :class="[
                'relative z-0',
                'mt-8 md:mt-10',
                'grid grid-cols-1 gap-4',
                'md:grid-cols-2 md:gap-4',
            ]"
        >
            <li
                v-for="project of projects"
                :key="project.title"
            >
                <Project
                    :title="project.title"
                    :subtitle="project.subtitle"
                    :description="project.description"
                    :contribution="project.contribution"
                    :image="project.image"
                    :role="project.role"
                    :period="project.period"
                    :summary="project.summary"
                    :tags="project.tags"
                    :links="project.links"
                    :gallery="project.gallery"
                    :tasks="project.tasks"
                    :results="project.results"
                />
            </li>
        </ul>

        <ProjectImageViewer
            v-model:opened="viewerOpened"
            :images="viewerImages"
            :start-index="viewerIndex"
        />
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper, SectionHeader } from "~/components/content/primitives";

import Project from "./Project.vue";
import ProjectImageViewer from "./ProjectImageViewer.vue";
import { imageViewerKey } from "./imageViewer.ts";

const { v } = useVocabulary();

const projects = useProjects();

const viewerOpened = ref<boolean>(false);
const viewerImages = ref<string[]>([]);
const viewerIndex = ref<number>(0);



function openImageViewer(images: string[], startIndex: number): void {
    viewerImages.value = images;
    viewerIndex.value = startIndex;
    viewerOpened.value = true;
}

provide(imageViewerKey, {
    open: openImageViewer,
});
</script>
