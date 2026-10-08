<template>
    <SectionWrapper id="about">
        <div
            :class="[
                'py-8 md:py-20',
                'flex flex-col md:flex-row',
                'items-start justify-stretch',
                'gap-8 md:gap-16',
            ]"
        >
            <div
                :class="[
                    'relative shrink-0',
                    'hidden md:block',
                ]"
            >
                <ui-img
                    src="/media/images/avatar.webp"
                    :alt="vs(['first_name', 'last_name'])"
                    :class="[
                        'rounded-4',
                        'size-64',
                        'object-cover object-center',
                    ]"
                />


                <NuxtCertificateLink
                    :class="[
                        'transition-all duration-200',
                        'absolute -bottom-6 -right-6',
                        '-rotate-9',
                        'hover:scale-110 hover:-rotate-4',
                    ]"
                />
            </div>

            <div>
                <h1>
                    <span
                        :class="[
                            'block',
                            'text-primary-500',
                            'font-medium',
                            'text-3.5 leading-5',
                        ]"
                        v-text="v('grade')"
                    />
                    <span
                        :class="[
                            'mt-2',
                            'block',
                            'font-bold',
                            'text-10 leading-12 tracking-[-0.8px]',
                            'md:text-12 md:leading-15 md:tracking-[-1.2px]',
                        ]"
                        v-text="vs(['first_name', 'last_name'])"
                    />
                </h1>

                <p
                    :class="[
                        'mt-3',
                        'text-text-ghosty',
                        'font-normal',
                        'text-4 leading-6.5',
                        'whitespace-normal',
                        'md:whitespace-pre-wrap',
                    ]"
                    v-text="v('about_me')"
                />

                <div
                    :class="[
                        'mt-6',
                        'flex flex-row flex-wrap items-center justify-start gap-3',
                    ]"
                >
                    <a :href="`mailto:${v('contact_email_address')}`">
                        <ui-button
                            variant="solid"
                            inert
                        >
                            <icon-mail class="size-5 -ml-2" />
                            Связаться
                        </ui-button>
                    </a>

                    <ui-button
                        variant="outlined"
                    >
                        <icon-arrow-down-to-line class="size-5 -ml-2" />
                        Скачать CV
                    </ui-button>
                </div>

                <hr
                    :class="[
                        'mt-6',
                        'border-border-neutral',
                        'hidden md:block',
                    ]"
                >

                <ul
                    :class="[
                        'mt-6',
                        'flex flex-row items-start justify-start gap-6',
                        'md:gap-8',
                    ]"
                >
                    <li
                        v-for="dataitem of datalist"
                        :key="dataitem.term"
                    >
                        <p
                            :class="[
                                'font-bold',
                                'text-6 leading-8',
                            ]"
                            v-text="dataitem.value"
                        />
                        <p
                            :class="[
                                'text-text-ghosty',
                                'text-4 leading-5',
                            ]"
                            v-text="dataitem.term"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper } from "~/components/content/primitives";

import NuxtCertificateLink from "./NuxtCertificateLink.vue";

const { v, vs } = useVocabulary();

const datalist = computed(() => [
    { term: v("dt_years_of_experience"),    value: v("dv_years_of_experience")    },
    { term: v("dt_amount_of_projects"),     value: v("dv_amount_of_projects")     },
    { term: v("dt_amount_of_technologies"), value: v("dv_amount_of_technologies") },
]);
</script>
