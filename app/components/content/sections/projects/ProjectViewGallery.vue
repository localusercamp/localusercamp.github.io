<template>
    <section
        :class="[
            'project-view__section',
            'mt-4',
        ]"
        :style="{ '--section-index': index }"
    >
        <div class="project-view__gallery">
            <button
                v-for="(image, imageIndex) of images"
                :key="imageIndex"
                type="button"
                :class="[
                    'h-32 w-52 shrink-0',
                    'md:h-40 md:w-64',
                    'overflow-hidden rounded-4',
                    'snap-start',
                    'transition-transform duration-300',
                    'hover:scale-105',
                ]"
                @click.stop="handleImageClick(imageIndex)"
            >
                <ui-img
                    :src="image"
                    alt="Скриншот системы"
                    :class="[
                        'h-full w-full',
                        'object-cover object-center',
                    ]"
                />
            </button>
        </div>
    </section>
</template>



<script setup lang="ts">
import { imageViewerKey } from "./imageViewer.ts";

const {
    index,
    images,
} = defineProps<{
    index: number;
    images: string[];
}>();

const imageViewer = inject(imageViewerKey);



function handleImageClick(imageIndex: number): void {
    imageViewer?.open(images, imageIndex);
}
</script>



<style scoped>
.project-view__gallery {
    display: flex;
    gap: 1rem;
    margin-inline: calc(var(--view-padding) * -1);
    padding-block: 0.5rem;
    padding-inline: var(--view-padding);
    overflow-x: auto;
    scroll-padding-inline: var(--view-padding);
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
}

.project-view__gallery::-webkit-scrollbar {
    display: none;
}
</style>
