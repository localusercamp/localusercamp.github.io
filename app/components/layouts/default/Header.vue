<template>
    <header
        :aria-expanded="menuOpened"
        :class="[
            'fixed inset-x-0 top-0 z-100',
            'overflow-hidden',
            'max-h-16 md:max-h-none',
            'aria-expanded:max-h-50',
            'transition-[max-height,color,background-color,border-color] duration-300',
            'border-b border-border-neutral',
            'bg-surface',
        ]"
    >
        <div
            :class="[
                'flex flex-row items-center justify-center',
                'py-4 pl-4 pr-[calc(var(--scrollbar-width,0px)+1rem)]',
                'md:py-6 md:px-8',
            ]"
        >
            <div
                :class="[
                    'grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center',
                    'max-w-content w-full',
                ]"
            >
                <nav
                    :class="[
                        'hidden md:block',
                        'md:order-2',
                    ]"
                >
                    <HeaderNav
                        :links="links"
                    />
                </nav>

                <HeaderNickname
                    :class="[
                        'order-2 md:order-1',
                        'justify-self-center md:justify-self-start',
                    ]"
                />

                <ui-dark-mode-switch
                    :class="[
                        'order-1 md:order-3',
                        'justify-self-start md:justify-self-end',
                    ]"
                />

                <HeaderBurger
                    :opened="menuOpened"
                    :class="[
                        'order-3 md:hidden',
                        'justify-self-end',
                    ]"
                    @toggle="toggleMenu()"
                />
            </div>
        </div>

        <nav
            :class="[
                { 'header-menu--open': menuOpened },
                'header-menu',
                'md:hidden',
            ]"
        >
            <HeaderNav
                :links="links"
                direction="column"
                :class="[
                    'px-4 py-4',
                ]"
                @navigate="closeMenu()"
            />
        </nav>
    </header>
</template>



<script setup lang="ts">
import {
    HeaderBurger,
    HeaderNav,
    HeaderNickname,
} from "~/components/layouts/primitives";

const links = computed(() => [
    { text: "~/about",    href: "#about" },
    { text: "~/projects", href: "#projects" },
    { text: "~/skills",   href: "#skills" },
]);


const {
    state: menuOpened,
    toggle: toggleMenu,
    off: closeMenu,
} = useBooleanState();
</script>



<style scoped>
.header-menu {
    visibility: hidden;
    transition: visibility 0s linear 300ms;
}


.header-menu--open {
    visibility: visible;
    transition-delay: 0s;
}
</style>
