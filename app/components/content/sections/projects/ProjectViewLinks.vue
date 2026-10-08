<template>
    <section
        :class="[
            'project-view__section',
            'mt-2',
        ]"
        :style="{ '--section-index': index }"
    >
        <div class="project-view__links">
            <a
                v-for="link of links"
                :key="link.href"
                :href="link.href"
                class="project-view__link"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
            >
                <icon-globe class="project-view__link-icon" />
                <span v-text="link.label" />
            </a>
        </div>
    </section>
</template>



<script setup lang="ts">
const {
    index,
    links,
} = defineProps<{
    index: number;
    links: {
        label: string;
        href: string;
    }[];
}>();
</script>



<style scoped>
.project-view__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.project-view__link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.875rem;
    border: 1px solid var(--color-border-neutral);
    border-radius: var(--radius-2);
    color: var(--color-text-ghosty);
    font-size: 0.875rem;
    transition:
        color 300ms ease,
        border-color 300ms ease;
}

.project-view__link:hover {
    color: var(--color-primary-500);
    border-color: var(--color-primary-500);
}

.project-view__link-icon {
    width: 1rem;
    height: 1rem;
}
</style>
