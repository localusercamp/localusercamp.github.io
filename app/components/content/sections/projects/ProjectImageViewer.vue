<template>
    <Teleport to="body">
        <transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="$opened"
                :class="[
                    'fixed inset-0 z-[200]',
                    'bg-neutral-950/90',
                    'backdrop-blur-sm',
                ]"
                @click="$opened = false"
            >
                <div
                    ref="track"
                    :class="[
                        'flex h-full w-full',
                        'snap-x snap-mandatory',
                        'overflow-x-auto overflow-y-hidden',
                        '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                    ]"
                    @click.stop
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
            </div>
        </transition>
    </Teleport>
</template>



<script setup lang="ts">
import { useEventListener } from "@vueuse/core";

const {
    images,
    startIndex,
} = defineProps<{
    images: string[];
    startIndex: number;
}>();

const $opened = defineModel<boolean>("opened", { required: false, default: false });

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

useEventListener(window, "keydown", handleKeydown);



function handleKeydown(event: KeyboardEvent): void {
    if (!$opened.value) {
        return;
    }

    if (event.key === "Escape") {
        $opened.value = false;
    }
}

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
