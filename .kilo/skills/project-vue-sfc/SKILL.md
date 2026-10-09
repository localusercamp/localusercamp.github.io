---
name: project-vue-sfc
description: Author or edit Vue single-file components in this project — content sections, primitives, layouts, and reusable UI. Use for SFC block layout, <script setup>, props/emits/defineModel, template rules (v-text, v-for with :key, class arrays, attribute order), <client-only>, and <transition>.
---

# Vue SFC conventions

## Block layout

Exactly three blank lines between blocks:

```vue
<template>
    ...
</template>



<script setup lang="ts">
...
</script>



<style scoped>
...
</style>
```

- Only `<script setup lang="ts">`. No Options API.
- 4-space indent, double quotes, semicolons, trailing commas, final newline, at most 3
  consecutive blank lines.
- Inside `<script setup>`, split the code into a **declarative** part — imports, types,
  constants, `defineProps`, `defineEmits`, `defineModel` — and a **setup** part — state,
  computeds, watchers, handlers, and other logic. Separate the two parts with exactly
  **three** blank lines:

```vue
<script setup lang="ts">
const {
    opened,
} = defineProps<{
    opened: boolean;
}>();

const emit = defineEmits<{
    toggle: [];
}>();



function handleClick(): void {
    emit("toggle");
}
</script>
```

- Add `<style scoped>` only when needed (keyframes, `@apply`, CSS variables).

## Props / emits / model

- Props: inline type in `defineProps<{ ... }>()`, **no** `interface Props`. Destructure on
  multiple lines even for a single prop:

```ts
const {
    src,
    alt,
} = defineProps<{
    src: string;
    alt: string;
}>();
```

- Emits: `defineEmits<{ ... }>()`, names namespaced with `:` — e.g.
  `defineEmits<{ "click:card": []; }>()`.
- Two-way binding: `defineModel`, name the variable with `$`:

```ts
const $opened = defineModel<boolean>("opened", { required: false, default: false });
```

- Template ref: `useTemplateRef<T>("name")` (in the template: `ref="name"`).

## Template rules

- Text only via `v-text` (and `useVocabulary()`), never `{{ }}` or hardcoded strings →
  see `project-vocabulary`.
- `v-for` uses `of` and always has `:key`: `v-for="project of projects"`,
  `v-for="(skill, index) of skills"`.
- Handlers are named `handleXxx()` and are called with parentheses: `@click="handleClick()"`.
- Event modifiers without a handler are fine: `@dragstart.prevent`.
- Client-only pieces go in `<client-only>`; animations use `<transition>` with explicit
  classes (`enter-active-class`, `enter-from-class`, `leave-active-class`, ...).

## Classes and attribute order

- Classes always go through `:class="[...]"` — an array of strings, one semantic group per
  line, even when fully static. A flat `class="..."` is allowed only for a single simple
  class (e.g. `class="size-5"`).
- Order of groups: positioning/structure → flex/grid → sizes → colors → typography.
- Attribute order: normal/`:props` → `:class` → `v-for`/`:key` → `v-text` → events.

```vue
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
</li>
```

## Keep components small

Split large markup into small child components in the same section folder and import them
relatively. Do not keep an entire section in one file; export only the public section from
the barrel.

## Related skills

- Design tokens, themes, scoped CSS → `project-styling`.
- Type detail inside `<script>` → `project-typescript`.
- Text/i18n → `project-vocabulary`.
- Where files go and auto-imports → `project-structure`.
