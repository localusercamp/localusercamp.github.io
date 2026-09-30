<template>
    <section
        :class="[
            'w-full',
            'px-4 sm:px-10',
            'flex flex-row items-start justify-center',
        ]"
    >
        <div
            :class="[
                'max-w-content w-full',
            ]"
        >
            <slot />
        </div>
    </section>
</template>



<script setup lang="ts">
</script>
