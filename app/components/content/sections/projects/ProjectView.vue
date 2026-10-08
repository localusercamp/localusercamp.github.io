<template>
    <Teleport to="body">
        <div class="project-view-motion">
            <transition
                name="view-backdrop"
            >
                <div
                    v-if="$opened"
                    class="view-backdrop"
                    @click="$opened = false"
                />
            </transition>

            <transition
                name="view"
                @after-enter="afterEnter = true"
                @before-leave="afterEnter = false"
                @after-leave="emit('close:view')"
            >
                <div
                    v-if="$opened"
                    :class="[
                        { 'is-open': afterEnter },
                        'project-view',
                    ]"
                    :style="{
                        '--initial-x': initialX,
                        '--initial-y': initialY,
                        '--target-x': targetX,
                        '--target-y': targetY,
                        '--initial-w': initialWidth,
                        '--initial-h': initialHeight,
                        '--target-w': targetWidthValue,
                        '--target-h': targetHeightValue,
                    }"
                >
                    <div class="project-view__cover">
                        <ui-img
                            :src="image"
                            :alt="title"
                            class="project-view__image"
                        />
                    </div>

                    <div class="project-view__body">
                        <h3
                            class="project-view__title"
                            v-text="title"
                        />

                        <ProjectRole
                            :role="role"
                            :period="period"
                            class="project-view__role"
                        />

                        <div class="project-view__swap">
                            <div class="project-view__summary-collapse">
                                <p
                                    class="project-view__summary"
                                    v-text="summary"
                                />
                            </div>

                            <ProjectTags
                                :tags="tags"
                                class="project-view__tags"
                            />
                        </div>

                        <ProjectViewGallery
                            :index="0"
                            :images="gallery"
                        />

                        <ProjectViewDescription
                            :index="1"
                            :text="description"
                        />

                        <ProjectViewLinks
                            :index="2"
                            :links="links"
                        />

                        <ProjectViewHighlights
                            :index="3"
                            :tasks="tasks"
                            :results="results"
                        />
                    </div>

                    <icon-arrow-up-right class="project-view__arrow" />

                    <button
                        type="button"
                        class="project-view__close"
                        @click.stop="$opened = false"
                    >
                        <icon-x class="project-view__close-icon" />
                    </button>
                </div>
            </transition>
        </div>
    </Teleport>
</template>



<script setup lang="ts">
import ProjectRole from "./ProjectRole.vue";
import ProjectTags from "./ProjectTags.vue";
import ProjectViewDescription from "./ProjectViewDescription.vue";
import ProjectViewGallery from "./ProjectViewGallery.vue";
import ProjectViewLinks from "./ProjectViewLinks.vue";
import ProjectViewHighlights from "./ProjectViewHighlights.vue";

import type { CardBBox } from "./types.ts";

const {
    cardBBox,
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
    cardBBox: CardBBox;
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

const $opened = defineModel<boolean>("opened", { required: false, default: false });

const emit = defineEmits<{
    "close:view": [];
}>();

const afterEnter = ref<boolean>(false);



const { width, height, top } = useWindowBox();

const targetWidth = computed<number>(() => Math.min(width.value * 0.92, 960));
const targetHeight = computed<number>(() => Math.min(height.value * 0.9, 720));

const initialX = computed<string>(() => `${cardBBox.left}px`);
const initialY = computed<string>(() => `${cardBBox.top + top.value}px`);

const targetX = computed<string>(() => `${(width.value - targetWidth.value) / 2}px`);
const targetY = computed<string>(() => `${(height.value - targetHeight.value) / 2 + top.value}px`);

const initialWidth = computed<string>(() => `${cardBBox.width}px`);
const initialHeight = computed<string>(() => `${cardBBox.height}px`);

const targetWidthValue = computed<string>(() => `${targetWidth.value}px`);
const targetHeightValue = computed<string>(() => `${targetHeight.value}px`);
</script>



<style scoped>
.project-view-motion {
    --view-duration: 1400ms;
    --view-ease: cubic-bezier(0.16, 1, 0.3, 1);
    --view-text-delay: 150ms;
    --view-backdrop-duration: 800ms;
    --view-cover-duration: 600ms;
    --view-cover-delay: 600ms;
    --view-cover-open-duration: 300ms;
    --view-cover-close-delay: 250ms;
    --view-close-duration: 200ms;
    --view-close-delay: 150ms;
    --view-section-delay: 400ms;
    --view-section-step: 120ms;
    --view-section-duration: 400ms;
    --view-section-hide-duration: 150ms;
    --view-padding: 2rem;
}

.view-backdrop {
    position: fixed;
    inset: 0;
    z-index: 40;
    background-color: color-mix(in srgb, var(--color-neutral-950) 60%, transparent);
    backdrop-filter: blur(0.25rem);
}

.view-backdrop-enter-active,
.view-backdrop-leave-active {
    transition: opacity var(--view-backdrop-duration) ease;
}

.view-backdrop-enter-from,
.view-backdrop-leave-to {
    opacity: 0;
}

.view-backdrop-enter-to,
.view-backdrop-leave-from {
    opacity: 1;
}

.project-view {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: var(--initial-w);
    height: var(--initial-h);
    border: 1px solid var(--color-border-neutral);
    border-radius: var(--radius-4);
    background-color: var(--color-surface);
    overflow: hidden;
    will-change: transform, width, height;
    transform: translate(var(--initial-x), var(--initial-y));
}

.view-enter-active,
.view-leave-active {
    transition:
        transform var(--view-duration) var(--view-ease),
        width var(--view-duration) var(--view-ease),
        height var(--view-duration) var(--view-ease);
}

.view-enter-to,
.view-leave-from,
.is-open {
    width: var(--target-w);
    height: var(--target-h);
    transform: translate(var(--target-x), var(--target-y));
}

.view-enter-from,
.view-leave-to {
    width: var(--initial-w);
    height: var(--initial-h);
    transform: translate(var(--initial-x), var(--initial-y));
}

.project-view__cover {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    border-radius: 0.75rem;
    opacity: 1;
    transition: opacity var(--view-cover-duration) ease var(--view-cover-delay);
}

.project-view__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.view-enter-to .project-view__cover,
.view-leave-from .project-view__cover {
    opacity: 0;
    transition-duration: var(--view-cover-open-duration);
    transition-delay: 0ms;
}

.is-open .project-view__cover {
    opacity: 0;
    transition-delay: 0ms;
}

.view-leave-to .project-view__cover {
    opacity: 1;
    transition-delay: var(--view-cover-close-delay);
}

.project-view__body {
    position: absolute;
    top: 0.75rem;
    left: 11.75rem;
    width: calc(100% - 12.5rem);
    transition:
        top var(--view-duration) var(--view-ease),
        left var(--view-duration) var(--view-ease),
        width var(--view-duration) var(--view-ease),
        padding var(--view-duration) var(--view-ease);
}

.view-enter-to .project-view__body,
.view-leave-from .project-view__body,
.is-open .project-view__body {
    top: 0;
    left: 0;
    width: 100%;
    padding: var(--view-padding);
}

.view-enter-to .project-view__body {
    transition-delay: var(--view-text-delay);
}

.view-leave-to .project-view__body {
    top: 0.75rem;
    left: 11.75rem;
    width: calc(100% - 12.5rem);
    padding: 0;
}

.project-view__title {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
    transition:
        color 300ms ease,
        font-size var(--view-duration) var(--view-ease),
        line-height var(--view-duration) var(--view-ease),
        font-weight var(--view-duration) var(--view-ease);
}

.view-enter-to .project-view__title,
.view-leave-from .project-view__title,
.is-open .project-view__title {
    font-size: 2rem;
    line-height: 2.25rem;
    font-weight: 700;
}

.view-leave-to .project-view__title {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
}

.project-view__role {
    margin-top: 0.5rem;
}

.project-view__swap {
    position: relative;
    min-height: 1.75rem;
    margin-top: 0.5rem;
}

.project-view__summary-collapse {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows 500ms ease;
}

.project-view__summary {
    min-height: 0;
    overflow: hidden;
    color: var(--color-text-ghosty);
    font-size: 0.875rem;
    line-height: 1.375rem;
    opacity: 1;
    transition: opacity 400ms ease;
}

.project-view__tags {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    max-height: 1.75rem;
    overflow: hidden;
    opacity: 0;
    transition: opacity 400ms ease;
}

.view-enter-to .project-view__summary-collapse,
.view-leave-from .project-view__summary-collapse,
.is-open .project-view__summary-collapse {
    grid-template-rows: 0fr;
}

.view-leave-to .project-view__summary-collapse {
    grid-template-rows: 1fr;
}

.view-enter-to .project-view__summary,
.view-leave-from .project-view__summary,
.is-open .project-view__summary {
    opacity: 0;
}

.view-leave-to .project-view__summary {
    opacity: 1;
}

.view-enter-to .project-view__tags,
.view-leave-from .project-view__tags,
.is-open .project-view__tags {
    opacity: 1;
}

.view-leave-to .project-view__tags {
    opacity: 0;
}

.view-enter-to .project-view__title {
    transition-delay: var(--view-text-delay);
}

.project-view__section {
    opacity: 0;
    transition: opacity var(--view-section-duration) ease;
}

.view-enter-to .project-view__section,
.is-open .project-view__section {
    opacity: 1;
    transition-delay: calc(var(--view-section-delay) + var(--section-index, 0) * var(--view-section-step));
}

.view-leave-to .project-view__section {
    opacity: 0;
    transition-duration: var(--view-section-hide-duration);
    transition-delay: 0ms;
}

.project-view__close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.5rem;
    border: 0;
    border-radius: var(--radius-2);
    background-color: color-mix(in srgb, var(--color-surface-accent) 80%, transparent);
    color: var(--color-text-ghosty);
    opacity: 0;
    transition:
        opacity var(--view-close-duration) ease var(--view-close-delay),
        color 300ms ease;
}

.project-view__close:hover {
    color: var(--color-primary-500);
}

.view-enter-to .project-view__close,
.view-leave-from .project-view__close,
.is-open .project-view__close {
    opacity: 1;
}

.view-leave-to .project-view__close {
    opacity: 0;
}

.project-view__close-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.project-view__arrow {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-text-ghosty);
    opacity: 1;
    transition: opacity var(--view-close-duration) ease;
}

.view-enter-to .project-view__arrow,
.view-leave-from .project-view__arrow,
.is-open .project-view__arrow {
    opacity: 0;
}

.view-leave-to .project-view__arrow {
    opacity: 1;
    transition-delay: calc(var(--view-close-delay) + var(--view-close-duration));
}
</style>
