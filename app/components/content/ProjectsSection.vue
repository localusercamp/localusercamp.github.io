<template>
    <ContentSection id="projects">
        <div
            :class="[
                'py-20',
            ]"
        >
            <div>
                <p
                    :class="[
                        'font-medium',
                        'text-primary-500',
                    ]"
                    v-text="v('skills_pretitle')"
                />

                <h2
                    :class="[
                        'mt-2',
                        'font-bold',
                        'text-9 leading-10',
                    ]"
                    v-text="v('skills_title')"
                />

                <p
                    :class="[
                        'mt-3',
                        'text-text-ghosty',
                        'text-3.5 leading-5',
                    ]"
                    v-text="v('skills_subtitle')"
                />
            </div>
        </div>
    </ContentSection>
</template>



<script setup lang="ts">
const { v } = useVocabulary();
</script>
