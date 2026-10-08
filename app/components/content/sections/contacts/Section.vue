<template>
    <SectionWrapper
        id="contacts"
        :inner-class="[
            'py-20',
        ]"
    >
        <SectionHeader
            :title="v('contacts_title')"
            :subtitle="v('contacts_subtitle')"
            :description="v('contacts_description')"
        />

        <div
            :class="[
                'mt-10',
                'flex flex-row flex-wrap items-center justify-start gap-3',
            ]"
        >
            <a :href="`mailto:${v('contact_email_address')}`">
                <ui-button
                    variant="solid"
                    inert
                >
                    <icon-mail class="size-5 -ml-2" />
                    <span v-text="v('contact_email')" />
                </ui-button>
            </a>

            <a
                :href="`https://t.me/${v('contact_telegram_username')}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ui-button
                    variant="outlined"
                    inert
                >
                    <icon-send class="size-5 -ml-2" />
                    <span v-text="v('contact_telegram')" />
                </ui-button>
            </a>

            <a
                :href="v('contact_github_url')"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ui-button
                    variant="outlined"
                    inert
                >
                    <GithubIcon class="size-5 -ml-2" />
                    <span v-text="v('contact_github')" />
                </ui-button>
            </a>
        </div>
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper, SectionHeader } from "~/components/content/primitives";

import GithubIcon from "./GithubIcon.vue";

const { v } = useVocabulary();
</script>
