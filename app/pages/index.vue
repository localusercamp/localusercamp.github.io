<template>
    <div>
        <HeroSection />

        <SectionDivider />

        <ProjectSection />

        <SectionDivider />

        <SkillsSection />

        <SectionDivider />

        <ContactsSection />
    </div>
</template>



<script setup lang="ts">
import { SectionDivider } from "~/components/content/primitives";

import { HeroSection } from "~/components/content/sections/hero";
import { SkillsSection } from "~/components/content/sections/skills";
import { ProjectSection } from "~/components/content/sections/projects";
import { ContactsSection } from "~/components/content/sections/contacts";


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
