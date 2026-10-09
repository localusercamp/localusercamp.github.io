<template>
    <ul
        :class="classes({ direction })"
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
                @click="emit('navigate')"
                v-text="link.text"
            />
        </li>
    </ul>
</template>



<script setup lang="ts">
import { tv } from "tailwind-variants/lite";

const Direction = {
    Row: "row",
    Column: "column",
} as const;

type Direction = typeof Direction[keyof typeof Direction];

type NavLink = {
    text: string;
    href: string;
};

const {
    links,
    direction,
} = defineProps<{
    links: NavLink[];
    direction?: Direction;
}>();

const emit = defineEmits<{
    navigate: [];
}>();



const classes = tv({
    base: [
        "flex",
    ],
    variants: {
        direction: {
            [Direction.Row]: [
                "flex-row items-center justify-center gap-16",
            ],
            [Direction.Column]: [
                "flex-col items-start justify-start gap-4",
            ],
        },
    },
    defaultVariants: {
        direction: Direction.Row,
    },
});
</script>
