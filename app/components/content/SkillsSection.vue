<template>
    <ContentSection id="skills">
        <div
            :class="[
                'py-20',
            ]"
        >
            <div>
                <p
                    :class="[
                        'font-medium',
                        'text-primary-500',
                    ]"
                    v-text="v('skills_pretitle')"
                />

                <h2
                    :class="[
                        'mt-2',
                        'font-bold',
                        'text-9 leading-10',
                    ]"
                    v-text="v('skills_title')"
                />

                <p
                    :class="[
                        'mt-3',
                        'text-text-ghosty',
                        'text-3.5 leading-5',
                    ]"
                    v-text="v('skills_subtitle')"
                />
            </div>

            <ul
                :class="[
                    'mt-10',
                    'grid grid-cols-5 gap-6',
                ]"
            >
                <li
                    v-for="(skill, index) of skills"
                    :key="skill.title"
                    :class="[
                        skill.class,
                        'relative isolate overflow-hidden',
                        'rounded-4 bg-surface-accent',
                        'border border-border-neutral',
                        'p-2',
                        'flex flex-row items-center justify-start gap-4',
                    ]"
                >
                    <div
                        :class="[
                            'ambient-background',
                            'pointer-events-none select-none',
                            'absolute -top-10 -right-20 -z-1 ',
                            'w-full aspect-square',
                            'bg-linear-to-l from-primary-500/40 to-primary-500/0',
                        ]"
                        :style="ambients[index%10]"
                    />

                    <ui-img
                        v-if="typeof skill.icon=== 'string'"
                        :src="skill.icon"
                        :alt="skill.title"
                        :class="[
                            'size-12 ',
                        ]"
                    />

                    <div>
                        <h3
                            :class="[
                                'font-medium',
                                'text-4 leading-5.5',
                                'text-primary-500',
                            ]"
                            v-text="skill.title"
                        />

                        <p
                            :class="[
                                'mt-0.5',
                                'text-3.5 leading-5',
                                'text-text-ghosty',
                            ]"
                            v-text="skill.subtitle"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </ContentSection>
</template>



<script setup lang="ts">
const { v } = useVocabulary();

const skills = [
    { title: "JavaScript",  subtitle: "6+ лет",  icon: "/media/icons/skills/javascript.svg",  class: "col-start-1" },
    { title: "TypeScript",  subtitle: "4+ года", icon: "/media/icons/skills/typescript.svg",  class: "" },
    { title: "Vue",         subtitle: "6+ лет",  icon: "/media/icons/skills/vue.svg",         class: "" },
    { title: "Nuxt",        subtitle: "6+ лет",  icon: "/media/icons/skills/nuxt.svg",        class: "" },
    { title: "Node",        subtitle: "6+ лет",  icon: "/media/icons/skills/node.svg",        class: "" },
    { title: "HTML",        subtitle: "6+ лет",  icon: "/media/icons/skills/html.svg",        class: "" },
    { title: "CSS",         subtitle: "6+ лет",  icon: "/media/icons/skills/css.svg",         class: "" },
    { title: "SASS/SCSS",   subtitle: "3 года",  icon: "/media/icons/skills/sass.svg",        class: "" },
    { title: "TailwindCSS", subtitle: "4+ года", icon: "/media/icons/skills/tailwindcss.svg", class: "" },
    { title: "PHP",         subtitle: "6+ лет",  icon: "/media/icons/skills/php.svg",         class: "col-start-1" },
    { title: "Laravel",     subtitle: "6+ лет",  icon: "/media/icons/skills/laravel.svg",     class: "" },
    { title: "Pest",        subtitle: "2+ года", icon: "/media/icons/skills/pest.svg",        class: "[&>img]:h-8 [&>img]:mt-1" },
    { title: "Docker",      subtitle: "3+ года", icon: "/media/icons/skills/docker.svg",      class: "" },
    { title: "SQL",         subtitle: "6+ лет",  icon: "/media/icons/skills/sql.svg",         class: "col-start-1" },
    { title: "PostgreSQL",  subtitle: "4+ года", icon: "/media/icons/skills/postgresql.svg",  class: "" },
    { title: "MySQL",       subtitle: "2 года",  icon: "/media/icons/skills/mysql.svg",       class: "" },
    { title: "Redis",       subtitle: "2 года",  icon: "/media/icons/skills/redis.svg",       class: "" },
    { title: "Git",         subtitle: "6+ лет",  icon: "/media/icons/skills/git.svg",         class: "col-start-1" },
    { title: "GitHub",      subtitle: "6+ лет",  icon: "/media/icons/skills/github.svg",      class: "" },
    { title: "GitLab",      subtitle: "5+ лет",  icon: "/media/icons/skills/gitlab.svg",      class: "" },
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
];
</script>



<style scoped>
.ambient-background {
    animation: ambient var(--speed) ease-in-out infinite;
    will-change: transform;
}

@keyframes ambient {
    0%   { transform: var(--step-1); }
    33%  { transform: var(--step-2); }
    66%  { transform: var(--step-3); }
    100% { transform: var(--step-1); }
}
</style>
