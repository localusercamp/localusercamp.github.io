<template>
    <SectionWrapper
        id="skills"
        :inner-class="[
            'py-8 md:py-20',
        ]"
    >
        <SectionHeader
            :title="v('skills_title')"
            :subtitle="v('skills_subtitle')"
            :description="v('skills_description')"
        />

        <ul
            :class="[
                'mt-8 md:mt-10',
                'grid grid-cols-2 gap-3',
                'md:grid-cols-5 md:gap-6',
            ]"
        >
            <li
                v-for="(skill, index) of skills"
                :key="skill.title"
                :class="skill.class"
            >
                <Skill
                    :icon="skill.icon"
                    :title="skill.title"
                    :subtitle="skill.subtitle"
                    :ambient-background-style="ambients[index]!"
                />
            </li>
        </ul>
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper, SectionHeader } from "~/components/content/primitives";

import Skill from "./Skill.vue";

const { v } = useVocabulary();

const skills = [
    { title: "JavaScript",  subtitle: "6+ лет",  icon: "/media/icons/skills/javascript.svg",  class: "md:col-start-1" },
    { title: "TypeScript",  subtitle: "4+ года", icon: "/media/icons/skills/typescript.svg",  class: "" },
    { title: "Vue",         subtitle: "6+ лет",  icon: "/media/icons/skills/vue.svg",         class: "" },
    { title: "Nuxt",        subtitle: "6+ лет",  icon: "/media/icons/skills/nuxt.svg",        class: "" },
    { title: "Node",        subtitle: "6+ лет",  icon: "/media/icons/skills/node.svg",        class: "" },
    { title: "HTML",        subtitle: "6+ лет",  icon: "/media/icons/skills/html.svg",        class: "" },
    { title: "CSS",         subtitle: "6+ лет",  icon: "/media/icons/skills/css.svg",         class: "" },
    { title: "SASS/SCSS",   subtitle: "3 года",  icon: "/media/icons/skills/sass.svg",        class: "" },
    { title: "TailwindCSS", subtitle: "4+ года", icon: "/media/icons/skills/tailwindcss.svg", class: "" },
    { title: "PHP",         subtitle: "6+ лет",  icon: "/media/icons/skills/php.svg",         class: "md:col-start-1" },
    { title: "Laravel",     subtitle: "6+ лет",  icon: "/media/icons/skills/laravel.svg",     class: "" },
    { title: "Pest",        subtitle: "2+ года", icon: "/media/icons/skills/pest.svg",        class: "[&>img]:h-8 [&>img]:mt-1" },
    { title: "Docker",      subtitle: "3+ года", icon: "/media/icons/skills/docker.svg",      class: "" },
    { title: "SQL",         subtitle: "6+ лет",  icon: "/media/icons/skills/sql.svg",         class: "md:col-start-1" },
    { title: "PostgreSQL",  subtitle: "4+ года", icon: "/media/icons/skills/postgresql.svg",  class: "" },
    { title: "MySQL",       subtitle: "2 года",  icon: "/media/icons/skills/mysql.svg",       class: "" },
    { title: "Redis",       subtitle: "2 года",  icon: "/media/icons/skills/redis.svg",       class: "" },
    { title: "Git",         subtitle: "6+ лет",  icon: "/media/icons/skills/git.svg",         class: "md:col-start-1" },
    { title: "GitLab",      subtitle: "5+ лет",  icon: "/media/icons/skills/gitlab.svg",      class: "" },
    { title: "GitHub",      subtitle: "6+ лет",  icon: "/media/icons/skills/github.svg",      class: "" },
];

const ambients = [
    "--step-1: rotate(35deg) translate3d(0px, 0px, 0); --step-2: rotate(41deg) translate3d(24px, -8px, 0); --step-3: rotate(29deg) translate3d(-20px, 8px, 0); --speed: 4.5s;",
    "--step-1: rotate(35deg) translate3d(0px, 0px, 0); --step-2: rotate(29deg) translate3d(-28px, 11px, 0); --step-3: rotate(41deg) translate3d(20px, -7px, 0); --speed: 6.0s;",
    "--step-1: rotate(31deg) translate3d(0px, -12px, 0); --step-2: rotate(39deg) translate3d(22px, 14px, 0); --step-3: rotate(35deg) translate3d(-18px, -5px, 0); --speed: 4.2s;",
    "--step-1: rotate(40deg) translate3d(0px, 0px, 0); --step-2: rotate(30deg) translate3d(26px, -11px, 0); --step-3: rotate(35deg) translate3d(-22px, 11px, 0); --speed: 5.5s;",
    "--step-1: rotate(30deg) translate3d(-22px, -11px, 0); --step-2: rotate(40deg) translate3d(28px, 14px, 0); --step-3: rotate(35deg) translate3d(0px, -8px, 0); --speed: 3.8s;",
    "--step-1: rotate(35deg) translate3d(0px, 0px, 0); --step-2: rotate(37deg) translate3d(-24px, 5px, 0); --step-3: rotate(31deg) translate3d(26px, 10px, 0); --speed: 4.8s;",
    "--step-1: rotate(29deg) translate3d(-30px, 7px, 0); --step-2: rotate(41deg) translate3d(30px, -9px, 0); --step-3: rotate(35deg) translate3d(-18px, 9px, 0); --speed: 5.0s;",
    "--step-1: rotate(30deg) translate3d(-26px, -13px, 0); --step-2: rotate(40deg) translate3d(26px, 13px, 0); --step-3: rotate(35deg) translate3d(0px, -9px, 0); --speed: 6.5s;",
    "--step-1: rotate(38deg) translate3d(0px, 0px, 0); --step-2: rotate(44deg) translate3d(22px, -13px, 0); --step-3: rotate(26deg) translate3d(-22px, 11px, 0); --speed: 3.9s;",
    "--step-1: rotate(32deg) translate3d(-16px, 8px, 0); --step-2: rotate(38deg) translate3d(20px, -8px, 0); --step-3: rotate(35deg) translate3d(-10px, 0px, 0); --speed: 3.2s;",
    "--step-1: rotate(33deg) translate3d(0px, 0px, 0); --step-2: rotate(33deg) translate3d(-15px, -12px, 0); --step-3: rotate(30deg) translate3d(21px, 6px, 0); --speed: 5.2s;",
    "--step-1: rotate(37deg) translate3d(18px, -10px, 0); --step-2: rotate(28deg) translate3d(-22px, 14px, 0); --step-3: rotate(34deg) translate3d(0px, 4px, 0); --speed: 4.0s;",
    "--step-1: rotate(31deg) translate3d(-15px, 9px, 0); --step-2: rotate(43deg) translate3d(27px, -5px, 0); --step-3: rotate(36deg) translate3d(-12px, -8px, 0); --speed: 5.8s;",
    "--step-1: rotate(42deg) translate3d(0px, -6px, 0); --step-2: rotate(32deg) translate3d(-29px, 10px, 0); --step-3: rotate(38deg) translate3d(23px, -11px, 0); --speed: 4.6s;",
    "--step-1: rotate(28deg) translate3d(20px, 12px, 0); --step-2: rotate(36deg) translate3d(-15px, -5px, 0); --step-3: rotate(40deg) translate3d(0px, 0px, 0); --speed: 3.5s;",
    "--step-1: rotate(36deg) translate3d(-10px, -5px, 0); --step-2: rotate(42deg) translate3d(25px, 11px, 0); --step-3: rotate(30deg) translate3d(-24px, -6px, 0); --speed: 6.2s;",
    "--step-1: rotate(34deg) translate3d(0px, 0px, 0); --step-2: rotate(26deg) translate3d(28px, -15px, 0); --step-3: rotate(39deg) translate3d(-19px, 13px, 0); --speed: 4.9s;",
    "--step-1: rotate(41deg) translate3d(-26px, 8px, 0); --step-2: rotate(35deg) translate3d(16px, -12px, 0); --step-3: rotate(29deg) translate3d(12px, 9px, 0); --speed: 3.7s;",
    "--step-1: rotate(30deg) translate3d(0px, -10px, 0); --step-2: rotate(38deg) translate3d(-23px, 15px, 0); --step-3: rotate(33deg) translate3d(26px, -4px, 0); --speed: 5.4s;",
    "--step-1: rotate(33deg) translate3d(19px, -7px, 0); --step-2: rotate(33deg) translate3d(-17px, -9px, 0); --step-3: rotate(28deg) translate3d(0px, 12px, 0); --speed: 6.8s;",
];
</script>
