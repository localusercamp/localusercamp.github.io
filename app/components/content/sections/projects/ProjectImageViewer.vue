<template>
    <DialogRoot
        :open="$opened"
        @update:open="$opened = $event"
    >
        <DialogPortal>
            <DialogOverlay
                :class="[
                    'image-viewer__overlay',
                    'fixed inset-0 z-[200]',
                    'bg-neutral-950/90',
                    'backdrop-blur-sm',
                ]"
            />

            <DialogContent
                :class="[
                    'image-viewer__content',
                    'fixed inset-0 z-[201]',
                ]"
                :aria-describedby="undefined"
            >
                <DialogTitle class="sr-only">
                    <span v-text="v('image_viewer_title')" />
                </DialogTitle>

                <div
                    ref="track"
                    :class="[
                        'flex h-full w-full',
                        'snap-x snap-mandatory',
                        'overflow-x-auto overflow-y-hidden',
                        '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                    ]"
                    @scroll="handleScroll()"
                >
                    <div
                        v-for="(image, imageIndex) of images"
                        :key="imageIndex"
                        :class="[
                            'flex flex-[0_0_100%]',
                            'snap-center',
                            'items-center justify-center',
                            'p-4 md:p-20',
                        ]"
                    >
                        <ui-img
                            :src="image"
                            alt="Скриншот системы"
                            :class="[
                                'max-h-full max-w-full',
                                'rounded-4',
                                'object-contain',
                            ]"
                        />
                    </div>
                </div>

                <button
                    v-if="currentIndex > 0"
                    type="button"
                    :class="[
                        'absolute top-1/2 left-2 md:left-6',
                        'flex size-10 md:size-12 -translate-y-1/2 items-center justify-center',
                        'rounded-2 border border-border-neutral',
                        'bg-surface-accent/80',
                        'text-text-ghosty',
                        'transition-colors',
                        'hover:border-primary-500 hover:text-primary-500',
                    ]"
                    aria-label="Предыдущее изображение"
                    @click.stop="goTo(currentIndex - 1)"
                >
                    <icon-chevron-left class="size-6" />
                </button>

                <button
                    v-if="currentIndex < images.length - 1"
                    type="button"
                    :class="[
                        'absolute top-1/2 right-2 md:right-6',
                        'flex size-10 md:size-12 -translate-y-1/2 items-center justify-center',
                        'rounded-2 border border-border-neutral',
                        'bg-surface-accent/80',
                        'text-text-ghosty',
                        'transition-colors',
                        'hover:border-primary-500 hover:text-primary-500',
                    ]"
                    aria-label="Следующее изображение"
                    @click.stop="goTo(currentIndex + 1)"
                >
                    <icon-chevron-right class="size-6" />
                </button>

                <button
                    type="button"
                    :class="[
                        'absolute top-4 right-4 md:top-6 md:right-6',
                        'flex size-10 items-center justify-center',
                        'rounded-2 border border-border-neutral',
                        'bg-surface-accent/80',
                        'text-text-ghosty',
                        'transition-colors',
                        'hover:border-primary-500 hover:text-primary-500',
                    ]"
                    aria-label="Закрыть"
                    @click.stop="$opened = false"
                >
                    <icon-x class="size-5" />
                </button>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>



<script setup lang="ts">
import {
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
} from "reka-ui";

const {
    images,
    startIndex,
} = defineProps<{
    images: string[];
    startIndex: number;
}>();

const $opened = defineModel<boolean>("opened", { required: false, default: false });

const { v } = useVocabulary();

const track = useTemplateRef<HTMLElement>("track");

const currentIndex = ref<number>(0);



watch($opened, (value) => {
    if (!value) {
        return;
    }

    currentIndex.value = startIndex;

    nextTick(() => {
        scrollToIndex(startIndex, "auto");
    });
});



function handleScroll(): void {
    const trackElement = track.value;

    if (!trackElement || trackElement.clientWidth === 0) {
        return;
    }

    currentIndex.value = Math.round(trackElement.scrollLeft / trackElement.clientWidth);
}

function goTo(index: number): void {
    currentIndex.value = index;
    scrollToIndex(index, "smooth");
}

function scrollToIndex(index: number, behavior: ScrollBehavior): void {
    const trackElement = track.value;

    if (!trackElement) {
        return;
    }

    trackElement.scrollTo({
        left: index * trackElement.clientWidth,
        behavior,
    });
}
</script>



<style scoped>
.image-viewer__overlay[data-state="open"],
.image-viewer__content[data-state="open"] {
    animation: image-viewer-in 300ms ease;
}

.image-viewer__overlay[data-state="closed"],
.image-viewer__content[data-state="closed"] {
    animation: image-viewer-out 300ms ease;
}


@keyframes image-viewer-in {
    from {
        opacity: 0;
    }
}

@keyframes image-viewer-out {
    to {
        opacity: 0;
    }
}
</style>
