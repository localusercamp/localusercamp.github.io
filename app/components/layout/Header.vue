<template>
    <header
        :class="[
            'sticky top-0',
            'border-b border-neutral-100',
            'bg-neutral-50',
            'py-6 px-8',
            'flex flex-row items-center justify-center',
            'text-neutral-950',
            'dark:text-white dark:border-neutral-900 dark:bg-neutral-950',
        ]"
    >
        <div
            :class="[
                'relative',
                'max-w-content w-full',
            ]"
        >
            <nav>
                <ul
                    :class="[
                        'flex flex-row items-center justify-center gap-16',
                    ]"
                >
                    <li
                        v-for="link of links"
                        :key="link.text"
                    >
                        <a
                            :href="link.href"
                            :class="[
                                'font-mono font-bold',
                                'text-4 leading-6',
                                'text-neutral-950 dark:text-neutral-300',
                                'hover:text-primary-500',
                            ]"
                            v-text="link.text"
                        />
                    </li>
                </ul>
            </nav>

            <div
                :class="[
                    'pointer-events-none',
                    'absolute inset-0',
                    'flex flex-row items-center justify-between',
                ]"
            >
                <div
                    :class="[
                        'pointer-events-auto',
                        'relative',
                        'flex flex-row items-center justify-start gap-2',
                    ]"
                >
                    <div
                        class="size-2 rounded-full bg-primary-500"
                    />

                    <p
                        class="font-mono pt-1"
                    >
                        <span v-text="v('nickname')" />
                        <span
                            class="animate-blink -ml-px"
                            v-text="'▐'"
                        />
                    </p>
                </div>

                <ui-dark-mode-switch
                    class="pointer-events-auto"
                />
            </div>
        </div>
    </header>
</template>



<script setup lang="ts">
const { v } = useVocabulary();

const links = computed(() => [
    { text: "~/about",    href: "#about" },
    { text: "~/skills",   href: "#skills" },
    { text: "~/projects", href: "#projects" },
]);
</script>
