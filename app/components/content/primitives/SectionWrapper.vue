<template>
    <section
        :class="[
            'w-full',
            'px-4 md:px-10',
            'flex flex-row items-start justify-center',
            'scroll-mt-16 md:scroll-mt-20',
        ]"
    >
        <div
            :class="[
                innerClass,
                'max-w-content w-full',
            ]"
        >
            <slot />
        </div>
    </section>
</template>



<script setup lang="ts">
const {
    innerClass,
} = defineProps<{
    innerClass?: string | string[];
}>();
</script>
