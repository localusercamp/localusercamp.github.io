<template>
    <button
        type="button"
        :class="[
            'rounded-4 bg-surface',
            'border border-border-neutral',
            'flex flex-col md:flex-row',
            'items-start justify-start',
            'gap-4 md:gap-6',
        ]"
        @click="handleClick()"
    >
        <div class="shrink-0">
            <ui-img
                :src="image"
                :alt="title"
                :class="[
                    'rounded-l-4',
                    'size-40',
                    'object-cover object-center',
                ]"
            />
        </div>

        <div
            :class="[
                'md:pl-0 md:py-4 md:pr-4',
            ]"
        >
            <h3
                :class="[
                    'font-semibold',
                    'text-4.5 leading-6',
                ]"
                v-text="title"
            />

            <p
                :class="[
                    'mt-2',
                    'text-3.5 leading-5.5',
                    'text-text-ghosty',
                ]"
                v-text="description"
            />
        </div>
    </button>
</template>



<script setup lang="ts">
const {
    image,
    title,
    description,
} = defineProps<{
    image: string;
    title: string;
    description: string;
}>();

const emit = defineEmits<{
    "click:card": [];
}>();



function handleClick(): void {
    emit("click:card");
}
</script>
