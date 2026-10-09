---
name: project-typescript
description: TypeScript conventions for this project — composables, types, interfaces, option objects, and typing logic inside <script setup>. Use when writing or changing .ts files, declaring or exporting types, building composables, or using `as const` enum-like sets.
---

# TypeScript conventions

## Return types and generics

- Always annotate function return types explicitly: `function handleClick(): void {}`.
- Add type parameters to `ref`/`computed` when the type is not inferred:

```ts
const state = ref<boolean>(initial);
const title = computed<string>(() => ...);
```

## Type placement and order

- Declare all types at the top of the file, before code. Exception: a local type inside a
  function when that reads better.
- Order types from most composite (high level) down to the simplest building blocks, so
  reading top-down builds up. The same spirit applies to functions: the public one first,
  helpers below.
- Export types at the end of the file:

```ts
type CardBBox = {
    width: number;
    height: number;
    top: number;
    left: number;
};


export type {
    CardBBox,
};
```

- Do not merge two entities with different semantics into one shared type just because the
  fields match. Reuse a type only when it is genuinely abstract (e.g.
  `Point = { x: number; y: number }` for a coordinate and a position). If a type "belongs" to
  one entity, declare a separate type for the other, even when the fields are identical.

## Enum-like sets

Use `as const` plus a derived type, not TS `enum`:

```ts
const Variant = {
    Solid: "solid",
    Outlined: "outlined",
} as const;

type Variant = typeof Variant[keyof typeof Variant];
```

## Composables

- Options via `export interface XxxOptions` with Russian JSDoc on each field (include
  `@default`).
- Return a named-field object and document each returned field with JSDoc.
- Example (`app/composables/useBooleanState.ts`):

```ts
export interface UseBooleanStateOptions {
    /**
     * Начальное значение.
     * @default false
     */
    initial?: boolean;
}

export function useBooleanState(options: UseBooleanStateOptions = {}) {
    const { initial = false } = options;
    const state = ref<boolean>(initial);

    function on(): void {
        state.value = true;
    }

    return {
        state,
        on,
    };
}
```

## Data and literals

- Data arrays are `const` camelCase (`skills`, `ambients`, `datalist`, `links`); align the
  fields of object literals into columns where it reads well (`no-multi-spaces` is off).

## Comments

- Comments, JSDoc, and TODOs are in **Russian**. TODO format: `// TODO: ...`.

## Related skills

- Component/`<script setup>` structure → `project-vue-sfc`.
- Where composables and types live → `project-structure`.
