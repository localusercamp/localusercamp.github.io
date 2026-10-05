<template>
    <div>
        <HeroSection />

        <SectionDivider />

        <SkillsSection />

        <SectionDivider />

        <ProjectSection />
    </div>
</template>



<script setup lang="ts">
import { SectionDivider } from "~/components/content/primitives";

import { HeroSection } from "~/components/content/sections/hero";
import { SkillsSection } from "~/components/content/sections/skill";
import { ProjectSection } from "~/components/content/sections/project";

// TODO: Заполнить
useSeoMeta({
    title: "Евгений Полозов | Fullstack Developer | Портфолио",
    // description: "[description]",
    // ogTitle: "[og:title]",
    // ogDescription: "[og:description]",
    // ogImage: "[og:image]",
    // ogUrl: "[og:url]",
    // twitterTitle: "[twitter:title]",
    // twitterDescription: "[twitter:description]",
    // twitterImage: "[twitter:image]",
    // twitterCard: "summary",
});
</script>
