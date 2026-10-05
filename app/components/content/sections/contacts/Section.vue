<template>
    <SectionWrapper
        id="skills"
        :inner-class="[
            'py-20',
        ]"
    >
        <SectionHeader
            :title="v('contacts_title')"
            :subtitle="v('contacts_subtitle')"
            :description="v('contacts_description')"
        />

        <ul
            :class="[
                'mt-10',
                'grid grid-cols-5 gap-6',
            ]"
        >
            contacts
        </ul>
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper, SectionHeader } from "~/components/content/primitives";

const { v } = useVocabulary();
</script>
