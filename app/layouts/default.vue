<template>
    <div
        :class="[
            'min-h-screen',
            'flex flex-col items-stretch justify-start',
            'bg-neutral-50 dark:bg-neutral-950',
            'dark:text-white',
        ]"
    >
        <LayoutHeader />

        <main
            :class="[
                'flex-1 max-w-content mx-auto',
            ]"
        >
            <slot />
        </main>

        <LayoutFooter />
    </div>
</template>



<script setup lang="ts">

</script>

