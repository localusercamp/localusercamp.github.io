---
name: project-component-style
description: Правила создания Vue-компонентов и секций в этом Nuxt-портфолио. Использовать всегда, когда нужно создать или изменить компонент, секцию, примитив, layout, композабл или Tailwind-стили, чтобы код совпадал со стилем существующих компонентов.
---

# Стиль компонентов проекта

Полные правила — в `AGENTS.md` в корне репозитория. Ниже — краткая рабочая выжимка
перед созданием/правкой кода.

## Перед началом

1. Открой `AGENTS.md` и ближайший аналогичный компонент в `app/components/`.
2. Повтори его структуру, порядок блоков, импортов и классов.
3. После правок запусти `pnpm lint` и `pnpm typecheck`.

## Каркас SFC

- `<script setup lang="ts">` — только Composition API, Options API запрещён.
- Ровно три пустые строки между `<template>`, `<script setup>` и `<style scoped>`.
- Две пустые строки между логическими блоками внутри `<script>`.
- 4 пробела отступа, двойные кавычки, точки с запятой, висячие запятые,
  завершающий перевод строки. Максимум 3 пустые строки подряд.

## Props / emits / model

```ts
const {
    src,
    alt,
} = defineProps<{
    src: string;
    alt: string;
}>();

const emit = defineEmits<{
    "click:card": [];
}>();

const $opened = defineModel<boolean>("opened", { required: false, default: false });
```

- Props — inline-тип в `defineProps`, без `interface Props`.
- Деструктуризация в несколько строк даже для одного prop.
- Emits с namespace через `:`.
- v-model — через `defineModel`, переменная с `$`.

## Шаблон

- Текст только через `v-text` и `useVocabulary()`, не через `{{ }}` и не хардкодом.
- `v-for` — через `of`, `:key` обязателен.
- Обработчики `handleXxx()` вызываются со скобками: `@click="handleClick()"`.
- Классы: `:class="[...]"` массивом, группа на строке; порядок — позиционирование →
  flex/grid → размеры → цвета → типографика.
- Атрибуты: props → `:class` → `v-for`/`:key` → `v-text` → события.
- Браузерные куски — в `<client-only>`; анимации — `<transition>` с явными классами.

## Импорты

- Не импортировать автоимпорты Nuxt/Vue (`ref`, `computed`, `defineProps`, `readonly`,
  `useCookie`, `useSeoMeta`, `useTemplateRef` и т.п.).
- Порядок: внешние + `import type` → пустая строка → `~/...` → пустая строка → `./...`.
- `<ui-*>` компоненты без импорта; секции/примитивы/layout — явный импорт из barrel.

## Tailwind

- Только токены из `app/assets/css/main.css`: `text-4`, `leading-6`, `rounded-4`,
  `bg-surface`, `bg-surface-accent`, `border-border-neutral`, `text-text-ghosty`,
  `text-primary-500`, `max-w-content`.
- Тёмная тема — `dark:` / `light:`.
- Компонентные анимации — `<style scoped>` с `@apply` и `@keyframes`; динамика —
  CSS-переменные через `:style` (`translate-x-(--initial-x)`).
