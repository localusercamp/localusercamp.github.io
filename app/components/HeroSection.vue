<template>
    <ui-content-section
        :class="[
            'border-b border-border-neutral',
        ]"
    >
        <div
            :class="[
                'py-20',
                'flex flex-col sm:flex-row',
                'items-start justify-stretch',
                'gap-0 sm:gap-16',
            ]"
        >
            <img
                src="/media/images/avatar.webp"
                :alt="vs(['first_name', 'last_name'])"
                :class="[
                    'rounded-4',
                    'size-64 shrink-0',
                    'object-cover object-center',
                ]"
            >

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
    </ui-content-section>
</template>



<script setup lang="ts">
const { v, vs } = useVocabulary();

const datalist = computed(() => [
    { term: v("dt_years_of_experience"),    value: getYearsOfExperience()         },
    { term: v("dt_amount_of_projects"),     value: v("dv_amount_of_projects")     },
    { term: v("dt_amount_of_technologies"), value: v("dv_amount_of_technologies") },
]);
</script>
