<template>
    <div
        :class="[
            'flex flex-row items-center justify-start gap-2',
        ]"
    >
        <div
            class="size-2 shrink-0 rounded-full bg-primary-500"
        />

        <p
            :class="[
                'header-nickname',
                'font-mono pt-1',
                'whitespace-nowrap',
            ]"
            :style="{
                '--char-fade': typingCharFade,
                '--nickname-width': `${typedNickname.length + 1}ch`,
            }"
        >
            <span
                v-for="item of typedNickname"
                :key="item.index"
                class="header-nickname-char"
                :style="{ '--char-delay': item.delay }"
                v-text="item.char"
            />
            <span
                class="animate-blink -ml-px"
                :style="{ animationDelay: caretBlinkDelay }"
                v-text="'▐'"
            />
        </p>
    </div>
</template>



<script setup lang="ts">
const { v } = useVocabulary();

const nickname = computed(() => v("nickname"));

const {
    chars: typedNickname,
    caretDelay: caretBlinkDelay,
    charAppearDuration: typingCharFade,
} = useStringTypingAnimator(nickname, {
    initialDelay: 350,
    groupDelay: { min: 150, max: 250 },
});
</script>



<style scoped>
.header-nickname {
    min-width: var(--nickname-width, 0);
}

.header-nickname-char {
    display: inline-block;
    white-space: nowrap;
    width: 0;
    opacity: 0;
    animation-name: nickname-char;
    animation-duration: var(--char-fade, 120ms);
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-delay: var(--char-delay, 0ms);
}

@keyframes nickname-char {
    0% {
        width: 0;
        opacity: 0;
    }
    6% {
        width: 1ch;
        opacity: 0;
    }
    100% {
        width: 1ch;
        opacity: 1;
    }
}
</style>
