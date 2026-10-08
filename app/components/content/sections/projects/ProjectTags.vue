<template>
    <span
        :class="[
            'flex flex-row flex-wrap gap-2',
        ]"
    >
        <ProjectTag
            v-for="tag of tags"
            :key="tag"
            :tag="tag"
        />
    </span>
</template>



<script setup lang="ts">
import ProjectTag from "./ProjectTag.vue";

const {
    tags,
} = defineProps<{
    tags: string[];
}>();
</script>
