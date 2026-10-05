<template>
    <div
        :class="[
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
            :style="ambientBackgroundStyle"
        />

        <ui-img
            :src="icon"
            :alt="title"
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
                v-text="title"
            />

            <p
                :class="[
                    'mt-0.5',
                    'text-3.5 leading-5',
                    'text-text-ghosty',
                ]"
                v-text="subtitle"
            />
        </div>
    </div>
</template>



<script setup lang="ts">
const {
    icon,
    title,
    subtitle,
    ambientBackgroundStyle,
} = defineProps<{
    icon: string;
    title: string;
    subtitle: string;
    ambientBackgroundStyle: string;
}>();
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
