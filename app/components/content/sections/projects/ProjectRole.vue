<template>
    <p
        class="project-role"
        v-text="meta"
    />
</template>



<script setup lang="ts">
const {
    role,
    period,
} = defineProps<{
    role: string;
    period: string;
}>();

const meta = computed<string>(() => `${role} · ${period}`);
</script>



<style scoped>
.project-role {
    color: var(--color-primary-500);
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
}
</style>
