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

const { v, vs } = useVocabulary();

const projects = useProjects();

const siteUrl = v("site_url");

const personId = `${siteUrl}#person`;

const jsonLd = computed(() => JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": personId,
            "name": vs(["first_name", "last_name"]),
            "alternateName": v("nickname"),
            "jobTitle": v("grade"),
            "description": v("about_me").replace(/\n/g, " "),
            "email": v("contact_email_address"),
            "url": siteUrl,
            "sameAs": [
                v("contact_github_url"),
                `https://t.me/${v("contact_telegram_username")}`,
            ],
            "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "Vue",
                "Nuxt",
                "Node.js",
                "PHP",
                "Laravel",
                "PostgreSQL",
                "MySQL",
                "Redis",
                "Docker",
                "Git",
                "TailwindCSS",
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "ООО «Трид Медиа»",
            },
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Югорский государственный университет",
            },
            "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "Certified Mid-Level Nuxt Developer",
                "url": "https://certificates.dev/nuxt/certificates/9d13ed76-99ff-48bf-9649-271e276c5487",
            },
        },
        {
            "@type": "ProfilePage",
            "@id": `${siteUrl}#profile-page`,
            "url": siteUrl,
            "name": `${vs(["first_name", "last_name"])} — ${v("portfolio")}`,
            "inLanguage": "ru",
            "mainEntity": { "@id": personId },
            "hasPart": { "@id": `${siteUrl}#projects` },
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}#website`,
            "url": siteUrl,
            "name": `${vs(["first_name", "last_name"])} — ${v("portfolio")}`,
            "inLanguage": "ru",
            "about": { "@id": personId },
        },
        {
            "@type": "ItemList",
            "@id": `${siteUrl}#projects`,
            "name": v("projects_title"),
            "description": v("projects_description"),
            "itemListElement": projects.value.map((project, index) => {
                const [primaryLink, ...extraLinks] = project.links;

                return {
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "CreativeWork",
                        "@id": `${siteUrl}#project-${index + 1}`,
                        "name": project.title,
                        "description": project.description,
                        "keywords": project.tags.join(", "),
                        "author": { "@id": personId },
                        "url": primaryLink?.href,
                        ...(extraLinks.length > 0 ? { sameAs: extraLinks.map(link => link.href) } : {}),
                    },
                };
            }),
        },
    ],
}).replace(/</g, "\\u003c"));

useHead({
    link: [
        {
            rel: "canonical",
            href: siteUrl,
        },
    ],
    script: [
        {
            type: "application/ld+json",
            innerHTML: jsonLd,
        },
    ],
});

useSeoMeta({
    title: v("seo_title"),
    description: v("seo_description"),
    robots: "index, follow, max-image-preview:large",
    ogType: "website",
    ogUrl: siteUrl,
    ogSiteName: `${vs(["first_name", "last_name"])} — ${v("portfolio")}`,
    ogTitle: v("seo_title"),
    ogDescription: v("seo_description"),
    ogLocale: "ru_RU",
    ogImage: `${siteUrl}media/images/og.png`,
    ogImageWidth: "1200",
    ogImageHeight: "630",
    ogImageAlt: v("seo_title"),
    twitterCard: "summary_large_image",
    twitterTitle: v("seo_title"),
    twitterDescription: v("seo_description"),
    twitterImage: `${siteUrl}media/images/og.png`,
});
</script>
