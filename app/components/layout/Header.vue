<template>
    <header
        :class="[
            'sticky top-0 z-100',
            'border-b border-border-neutral',
            'bg-surface',
            'py-4 px-4',
            'md:py-6 md:px-8',
            'flex flex-row items-center justify-center',
        ]"
    >
        <div
            :class="[
                'relative',
                'max-w-content w-full',
            ]"
        >
            <nav
                :class="[
                    'hidden md:block',
                ]"
            >
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
                                'text-text-ghosty hover:text-primary-500',
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
                    'hidden md:flex flex-row items-center justify-between',
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

            <div
                :class="[
                    'grid grid-cols-3 items-center',
                    'md:hidden',
                ]"
            >
                <ui-dark-mode-switch
                    class="justify-self-start"
                />

                <div
                    :class="[
                        'justify-self-center',
                        'flex flex-row items-center justify-center gap-2',
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

                <button
                    type="button"
                    :class="[
                        'justify-self-end',
                        'rounded-2 p-1',
                        'text-primary-500',
                        'hover:bg-neutral-100 dark:hover:bg-neutral-900',
                    ]"
                    @click="toggleMenu()"
                >
                    <icon-x
                        v-if="menuOpened"
                        class="size-6"
                    />
                    <icon-menu
                        v-else
                        class="size-6"
                    />
                </button>
            </div>
        </div>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <nav
                v-if="menuOpened"
                :class="[
                    'md:hidden',
                    'absolute top-full right-0 left-0',
                    'border-b border-border-neutral',
                    'bg-surface',
                    'px-4 py-4',
                ]"
            >
                <ul
                    :class="[
                        'flex flex-col items-start justify-start gap-4',
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
                                'text-text-ghosty hover:text-primary-500',
                            ]"
                            @click="closeMenu()"
                            v-text="link.text"
                        />
                    </li>
                </ul>
            </nav>
        </transition>
    </header>
</template>



<script setup lang="ts">
const { v } = useVocabulary();

const links = computed(() => [
    { text: "~/about",    href: "#about" },
    { text: "~/skills",   href: "#skills" },
    { text: "~/projects", href: "#projects" },
]);


const {
    state: menuOpened,
    toggle: toggleMenu,
    off: closeMenu,
} = useBooleanState();
</script>
