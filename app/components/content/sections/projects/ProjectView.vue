<template>
    <transition
        enter-active-class="transition-all duration-1000"
        enter-from-class="enter-from"
        enter-to-class="enter-to"
        leave-active-class="transition-all duration-1000"
        leave-from-class="leave-from"
        leave-to-class="leave-to"
        @after-enter="afterEnter = true"
        @before-leave="afterEnter = false"
    >
        <div
            v-if="$opened"
            :class="[
                { 'enter-to': afterEnter },
                'transition-all duration-1000',
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

import type { CardBBox } from "./types.ts";

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

const afterEnter = ref<boolean>(false);


const { width, height, top } = useWindowBox();

const initialX = computed<string>(() => `${cardBBox.left}px`);
const initialY = computed<string>(() => `${cardBBox.top + top.value}px`);

const targetX = computed<string>(() => `${(width.value / 2) - (cardBBox.width / 2)}px`);
const targetY = computed<string>(() => `${(height.value / 2) - (cardBBox.height / 2) + top.value}px`);
</script>



<style scoped>
.enter-from {
    @apply translate-x-(--initial-x) translate-y-(--initial-y);
}
.enter-to, .leave-from {
    @apply translate-x-(--target-x) translate-y-(--target-y);
}
.leave-to {
    @apply translate-x-(--initial-x) translate-y-(--initial-y);
}
</style>
