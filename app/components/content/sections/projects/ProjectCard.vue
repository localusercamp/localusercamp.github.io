<template>
    <button
        type="button"
        :class="[
            'project-card',
            'relative',
            'rounded-4 bg-surface',
            'border border-border-neutral',
            'hover:border-primary-500',
            'flex flex-col md:flex-row',
            'items-start justify-start',
            'gap-3 md:gap-4',
            'p-3',
        ]"
        @click="handleClick()"
    >
        <div
            :class="[
                'shrink-0',
                'w-full md:w-auto',
            ]"
        >
            <ui-img
                :src="image"
                :alt="title"
                :class="[
                    'rounded-3',
                    'w-full aspect-video',
                    'md:aspect-auto md:size-40',
                    'object-cover object-center',
                ]"
            />
        </div>

        <div
            :class="[
                'min-w-0 flex-1',
                'w-full md:w-auto',
            ]"
        >
            <div
                :class="[
                    'flex items-start justify-between',
                    'gap-3',
                ]"
            >
                <h3
                    :class="[
                        'font-semibold',
                        'text-4.5 leading-6',
                    ]"
                    v-text="title"
                />

                <icon-arrow-up-right class="project-card__arrow" />
            </div>
            <ProjectRole
                :role="role"
                :period="period"
                class="mt-2"
            />

            <p
                :class="[
                    'mt-2',
                    'text-3.5 leading-5.5',
                    'text-text-ghosty',
                ]"
                v-text="summary"
            />
        </div>
    </button>
</template>



<script setup lang="ts">
import ProjectRole from "./ProjectRole.vue";

const {
    image,
    title,
    role,
    period,
    summary,
} = defineProps<{
    image: string;
    title: string;
    role: string;
    period: string;
    summary: string;
}>();

const emit = defineEmits<{
    "click:card": [];
}>();



function handleClick(): void {
    emit("click:card");
}
</script>



<style scoped>
.project-card:hover {
    transition: border-color 700ms ease;
}

.project-card__arrow {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    color: var(--color-text-ghosty);
    transition:
        color 300ms ease,
        transform 300ms ease;
}

.project-card:hover .project-card__arrow {
    color: var(--color-primary-500);
    transform: translate(0.125rem, -0.125rem);
}

.project-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-primary-500) 0%, transparent);
    transition: box-shadow 900ms cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover::before {
    box-shadow: 0 0 5rem -0.5rem color-mix(in srgb, var(--color-primary-500) 20%, transparent);
}
</style>
