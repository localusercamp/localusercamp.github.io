<template>
    <SectionWrapper id="about">
        <div
            :class="[
                'py-20',
                'flex flex-col sm:flex-row',
                'items-start justify-stretch',
                'gap-0 sm:gap-16',
            ]"
        >
            <div class="relative shrink-0">
                <ui-img
                    src="/media/images/avatar.webp"
                    :alt="vs(['first_name', 'last_name'])"
                    :class="[
                        'rounded-4',
                        'size-64',
                        'object-cover object-center',
                    ]"
                />

                <client-only>
                    <transition
                        appear
                        appear-active-class="duration-2000 ease-[linear(0,0.011_0.4%,0.052_0.9%,0.214_1.9%,1.303_6.3%,1.466_7.5%,1.502_8%,1.52_8.6%,1.515_9.1%,1.494_9.6%,1.41_10.6%,0.979_13.8%,0.834_15.1%,0.758_16.2%,0.73_17.3%,0.743_18.3%,0.786_19.3%,1.086_23.8%,1.125_24.9%,1.141_26%,1.134_27%,1.112_28%,0.956_32.5%,0.935_33.6%,0.927_34.7%,0.942_36.7%,1.023_41.2%,1.038_43.4%,1.03_45.4%,0.988_49.9%,0.98_52%,1.01_60.7%,0.995_69.4%,1.003_78%,1)]"
                        appear-from-class="scale-0"
                        appear-to-class="scale-100"
                    >
                        <ui-nuxt-certificate-link
                            :class="[
                                'transition-all duration-200',
                                'absolute -bottom-6 -right-6',
                                '-rotate-9',
                                'hover:scale-110 hover:-rotate-4',
                            ]"
                        />
                    </transition>
                </client-only>
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
                            'text-12 leading-15 tracking-[-1.2px]',
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
                        'whitespace-pre-wrap',
                    ]"
                    v-text="v('about_me')"
                />

                <div
                    :class="[
                        'mt-6',
                        'flex flex-row items-center justify-start gap-3',
                    ]"
                >
                    <ui-button
                        variant="solid"
                    >
                        <icon-mail class="size-5 -ml-2" />
                        Связаться
                    </ui-button>

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
                    ]"
                >

                <ul
                    :class="[
                        'mt-6',
                        'flex flex-row items-start justify-start gap-8',
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

const { v, vs } = useVocabulary();

const datalist = computed(() => [
    { term: v("dt_years_of_experience"),    value: v("dv_years_of_experience")    },
    { term: v("dt_amount_of_projects"),     value: v("dv_amount_of_projects")     },
    { term: v("dt_amount_of_technologies"), value: v("dv_amount_of_technologies") },
]);
</script>
