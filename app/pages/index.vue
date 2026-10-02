<template>
    <div>
        <HeroSection />

        <SectionDivider />

        <SkillsSection />

        <SectionDivider />

        <ProjectSection />

        <!-- <client-only>
            <div
                class="size-100 bg-white text-black p-20"
                :style="{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: transform,
                }"
            >
                width {{ width }}<br>
                height {{ height }}<br>
                left {{ left }}<br>
                top {{ top }}<br>

                transform {{ transform }}<br>
            </div>
        </client-only> -->
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



// const { width, height, left, top } = useWindowBox();

// const transform = computed<string>(() => {
//     const translateX = (width.value / 2) - 200;
//     const translateY = (height.value / 2) - 200 + top.value;

//     return `translate(${translateX}px, ${translateY}px)`;
// });


// onMounted(() => {
//     console.log(window.pageYOffset);
// })
</script>
