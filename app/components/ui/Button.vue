<template>
    <component
        :is="inert ? 'div' : 'button'"
        :type="inert ? undefined : 'button'"
        :class="classes({ variant })"
        @click="handleClick()"
    >
        <slot />
    </component>
</template>



<script setup lang="ts">
import { tv } from "tailwind-variants/lite";

const Variant = {
    Solid: "solid",
    Outlined: "outlined",
} as const;

type Variant = typeof Variant[keyof typeof Variant];

const {
    variant,
    inert,
} = defineProps<{
    variant: Variant;
    inert?: boolean;
}>();

const emit = defineEmits<{
    click: [];
}>();



const classes = tv({
    base: [
        "rounded-3",
        "flex flex-row items-center justify-center gap-2",
        "font-medium",
        "text-3.5 leading-5",
    ],
    variants: {
        variant: {
            [Variant.Solid]: [
                "bg-primary-500 hover:bg-primary-600",
                "px-5 py-2.5",
                "text-text-black light:text-text-white",
            ],
            [Variant.Outlined]: [
                "border-2 border-primary-500 hover:border-primary-600",
                "bg-transparent hover:bg-primary-600",
                "px-5 py-2",
                "text-primary-500 hover:text-text-black light:hover:text-text-white",
            ],
        },
    },
});



function handleClick(): void {
    if (inert) {
        return;
    }

    emit("click");
}
</script>
