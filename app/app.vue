<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>



<script setup lang="ts">
import { useWindowScroll, useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
const { x, y } = useWindowScroll({ idle: 0 });

provideWindowBox({
    width: readonly(width),
    height: readonly(height),
    left: readonly(x),
    top: readonly(y),
});
</script>
