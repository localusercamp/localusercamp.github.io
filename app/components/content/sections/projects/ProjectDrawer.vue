<template>
    <DrawerRoot
        :open="$opened"
        @update:open="handleOpenChange($event)"
    >
        <DrawerPortal>
            <DrawerOverlay
                :class="[
                    'drawer-overlay',
                    'fixed inset-0 z-110 bg-neutral-950/60 backdrop-blur-sm',
                ]"
            />

            <DrawerContent
                :class="[
                    'drawer-content',
                    'fixed -inset-x-px bottom-0 z-120',
                    'rounded-t-6',
                    'border-t border-x border-border-neutral',
                    'bg-surface',
                    'flex flex-col max-h-[80dvh] overflow-hidden',
                    'data-[swiping]:duration-0',
                    'pb-[env(safe-area-inset-bottom)]',
                    [
                        'transition-transform duration-300 ease-out',
                        'translate-y-(--drawer-swipe-movement-y)',
                    ],
                ]"
                :aria-describedby="undefined"
            >
                <DrawerHandle
                    class="mx-auto my-4 h-1 w-10 shrink-0 rounded-full bg-text-ghosty/40"
                />

                <div
                    :class="[
                        'overflow-y-auto overscroll-contain',
                        'flex-1',
                        'px-4 pb-4',
                    ]"
                >
                    <header
                        :class="[
                            'sticky top-0',
                        ]"
                    >
                        <DrawerTitle as-child>
                            <h3
                                class="text-6 leading-7 font-bold bg-surface"
                                v-text="title"
                            />
                        </DrawerTitle>

                        <div
                            :class="[
                                'w-full h-4',
                                'bg-linear-to-b from-surface from-25% to-transparent',
                            ]"
                        />
                    </header>

                    <p
                        :class="[
                            'text-3.5 leading-5',
                            'text-text-ghosty',
                        ]"
                        v-text="subtitle"
                    />

                    <ProjectRole
                        :role="role"
                        :period="period"
                        class="mt-1.5"
                    />

                    <p
                        :class="[
                            'mt-2',
                            'text-3.5 leading-5.5 text-text-ghosty',
                        ]"
                        v-text="summary"
                    />

                    <ProjectTags
                        :tags="tags"
                        class="mt-3"
                    />

                    <transition v-bind="RevealTransition">
                        <ProjectViewGallery
                            :index="0"
                            :images="gallery"
                        />
                    </transition>

                    <transition v-bind="RevealTransition">
                        <ProjectViewDescription
                            :index="1"
                            :description="description"
                            :contribution="contribution"
                        />
                    </transition>

                    <transition v-bind="RevealTransition">
                        <ProjectViewLinks
                            :index="2"
                            :links="links"
                        />
                    </transition>

                    <transition v-bind="RevealTransition">
                        <ProjectViewHighlights
                            :index="3"
                            :tasks="tasks"
                            :results="results"
                        />
                    </transition>
                </div>
            </DrawerContent>
        </DrawerPortal>
    </DrawerRoot>
</template>



<script setup lang="ts">
import {
    DrawerContent,
    DrawerHandle,
    DrawerOverlay,
    DrawerPortal,
    DrawerRoot,
    DrawerTitle,
} from "reka-ui";

import ProjectRole from "./ProjectRole.vue";
import ProjectTags from "./ProjectTags.vue";
import ProjectViewDescription from "./ProjectViewDescription.vue";
import ProjectViewGallery from "./ProjectViewGallery.vue";
import ProjectViewHighlights from "./ProjectViewHighlights.vue";
import ProjectViewLinks from "./ProjectViewLinks.vue";

import type { TransitionProps } from "vue";

const {
    title,
    subtitle,
    description,
    contribution,
    role,
    period,
    summary,
    tags,
    links,
    gallery,
    tasks,
    results,
} = defineProps<{
    title: string;
    subtitle: string;
    description: string;
    contribution: string;
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

const RevealTransition: TransitionProps = {
    appear: true,
    enterActiveClass: "transition-[opacity,translate] duration-500 ease-out delay-[calc(200ms+var(--section-index)*200ms)]",
    enterFromClass: "opacity-0 translate-y-4",
    enterToClass: "opacity-100 translate-y-0",
};



function handleOpenChange(value: boolean): void {
    $opened.value = value;

    if (!value) {
        emit("close:view");
    }
}
</script>



<style scoped>
.drawer-overlay[data-state="open"] {
    animation: drawer-overlay-in 500ms ease;
}

.drawer-overlay[data-state="closed"] {
    animation: drawer-overlay-out 200ms ease;
}

.drawer-content[data-state="open"] {
    animation: drawer-in 720ms cubic-bezier(0.22, 1, 0.36, 1);
}

.drawer-content[data-state="closed"] {
    animation: drawer-out 240ms cubic-bezier(0.4, 0, 1, 1);
}


@keyframes drawer-in {
    from {
        translate: 0 100%;
    }
}

@keyframes drawer-out {
    to {
        translate: 0 100%;
    }
}

@keyframes drawer-overlay-in {
    from {
        opacity: 0;
    }
}

@keyframes drawer-overlay-out {
    to {
        opacity: 0;
    }
}
</style>
