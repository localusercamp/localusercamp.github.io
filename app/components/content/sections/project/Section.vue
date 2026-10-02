<template>
    <SectionWrapper
        id="projects"
        :inner-class="[
            'py-20',
        ]"
    >
        <SectionHeader
            :title="v('projects_title')"
            :subtitle="v('projects_subtitle')"
            :description="v('projects_description')"
        />

        <ul
            :class="[
                'grid grid-cols-2',
                'md:gap-4',
            ]"
        >
            <li
                v-for="project of projects"
                :key="project.title"
            >
                <Project
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                />
            </li>
        </ul>
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper, SectionHeader } from "~/components/content/primitives";

import Project from "./Project.vue";

const { v } = useVocabulary();

const projects = computed(() => [
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "Вулфи",
        description: "Цифровая платформа для автоматизации процессов дополнительного образования",
    },
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "VisitUgra",
        description: "Туристическая цифровая платформа Югры",
    },
]);
</script>
