<template>
    <transition
        enter-active-class="transition-all duration-1000"
        enter-from-class="translate-x-(--initial-x) translate-y-(--initial-y)"
        enter-to-class=""
        leave-active-class="transition-all duration-1000"
        leave-from-class=""
        leave-to-class=""
    >
        <div
            v-if="$opened"
            :class="[
                $opened ? 'enter-to' : '',
                // '_animate',
                // $opened ? '' : '',
                'absolute top-0 left-0',
                'will-change-transform',
            ]"
            :style="{
                '--initial-x': initialX,
                '--initial-y': initialY,
                '--target-x': targetX,
                '--target-y': targetY,
            }"
            @click="$opened = false"
        >
            <ProjectCard
                :image="image"
                :title="title"
                :description="description"
            />
        </div>
    </transition>
</template>



<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

import type { CardBBox } from "./types";

const {
    cardBBox,
    image,
    title,
    description,
} = defineProps<{
    cardBBox: CardBBox;
    image: string;
    title: string;
    description: string;
}>();

const $opened = defineModel<boolean>("opened", { required: false, default: false });

const { width, height, top } = useWindowBox();

const initialX = computed<string>(() => `${cardBBox.left}px`);
const initialY = computed<string>(() => `${cardBBox.top + top.value}px`);

const targetX = computed<string>(() => `${(width.value / 2) - (cardBBox.width / 2)}px`);
const targetY = computed<string>(() => `${(height.value / 2) - (cardBBox.height / 2) + top.value}px`);
</script>



<style scoped>
.enter-to {
    @apply translate-x-(--target-x) translate-y-(--target-y);
}

._animate {
    /* @apply transition-all duration-1000 will-change-transform; */

    /* transition: all;
    transition-duration: 1s;
    will-change: transform; */

    /* transform: translate(var(--x), var(--y)); */

    &._appear {
        --move-from-x: var(--initial-x);
        --move-from-y: var(--initial-y);
        --move-to-x: var(--target-x);
        --move-to-y: var(--target-y);
        /* animation: move forwards 2s; */
        /* --x: var(--target-left, 0px);
        --y: var(--target-top, 0px); */
        /* transform: translate(var(--target-left), var(--target-top)); */
    }

    &._leave {
        /* animation: leave 2s; */
        /* --x: var(--initial-left, 0px);
        --y: var(--initial-top, 0px); */
        --move-from-x: var(--target-x);
        --move-from-y: var(--target-y);
        --move-to-x: var(--initial-x);
        --move-to-y: var(--initial-y);
        /* animation: move forwards 2s; */
    }
}

.move-enter-active, .move-leave-active {
    @apply transition-all duration-2000;
}

.move-enter-from {
    transform: translate(var(--move-from-x), var(--move-from-y));
}
.move-enter-to {
    transform: translate(var(--move-to-x), var(--move-to-y));
}

/* @keyframes move {
    0% {
        transform: translate(var(--move-from-x), var(--move-from-y));
    }
    100% {
        transform: translate(var(--move-to-x), var(--move-to-y));
    }
} */

/* .animate-appear {
    animation: appear 1s;
    transform: translate(var(--target-left, 0px), var(--target-top, 0px));
}
@keyframes appear {
    from {
        transform: translate(var(--initial-left, 0px), var(--initial-top, 0px));
    }
    to {
        transform: translate(var(--target-left, 0px), var(--target-top, 0px));
    }
} */

/* .animate-leave {
    @apply transition-all duration-1000 ease-[cubic-bezier(0,0.255,0.256,0.995)];
    animation: leave 1s;
    will-change: transform;
    transform: translate(var(--initial-left, 0px), var(--initial-top, 0px))
}
@keyframes leave {
    from {
        transform: translate(var(--target-left, 0px), var(--target-top, 0px));
    }
    to {
        transform: translate(var(--initial-left, 0px), var(--initial-top, 0px));
    }
} */

.target-transform {
    /* @apply transition-all duration-1000 ease-[cubic-bezier(0,0.255,0.256,0.995)]; */
    /* transform: translate(var(--target-left, 0px), var(--target-top, 0px)); */
}
.initial-transform {
    /* transform: translate(var(--initial-left, 0px), var(--initial-top, 0px)); */
}
</style>
