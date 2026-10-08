<template>
    <DrawerRoot
        :open="$opened"
        @update:open="handleOpenChange($event)"
    >
        <DrawerPortal>
            <DrawerOverlay
                :class="[
                    'fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm',
                    'data-[state=open]:animate-drawer-overlay-in',
                    'data-[state=closed]:animate-drawer-overlay-out',
                ]"
            />

            <DrawerContent
                :class="[
                    'fixed inset-x-0 bottom-0 z-50',
                    'flex flex-col max-h-[88dvh] overflow-hidden',
                    'rounded-t-6 border-t border-border-neutral bg-surface',
                    'translate-y-(--drawer-swipe-movement-y) transition-transform duration-300 ease-out',
                    'data-[swiping]:duration-0',
                    'data-[state=open]:animate-drawer-in',
                    'data-[state=closed]:animate-drawer-out',
                    'pb-[env(safe-area-inset-bottom)]',
                ]"
                :aria-describedby="undefined"
            >
                <DrawerHandle
                    class="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-text-ghosty/40"
                />

                <DrawerClose
                    :class="[
                        'absolute top-3 right-3',
                        'rounded-2 p-2 bg-surface-accent/80',
                        'text-text-ghosty transition-colors hover:text-primary-500',
                    ]"
                >
                    <icon-x class="size-5" />
                </DrawerClose>

                <div
                    :class="[
                        'flex-1 overflow-y-auto overscroll-contain',
                        'p-5 pt-9',
                    ]"
                >
                    <DrawerTitle as-child>
                        <h3
                            class="pr-10 text-6 leading-7 font-bold"
                            v-text="title"
                        />
                    </DrawerTitle>

                    <ProjectRole
                        :role="role"
                        :period="period"
                        class="mt-2"
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
            </DrawerContent>
        </DrawerPortal>
    </DrawerRoot>
</template>



<script setup lang="ts">
import {
    DrawerClose,
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

const {
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



function handleOpenChange(value: boolean): void {
    $opened.value = value;

    if (!value) {
        emit("close:view");
    }
}
</script>
