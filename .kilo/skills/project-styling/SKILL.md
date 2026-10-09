---
name: project-styling
description: Tailwind v4 tokens, theming, and component CSS for this project. Use when applying utility classes, choosing design tokens (text-*, leading-*, rounded-*, surface/primary/neutral colors), writing dark:/light: variants, or adding scoped CSS, @keyframes, and CSS variables.
---

# Styling

## Choose the tool

- If utilities express it (layout, spacing, size, color, states) — use Tailwind.
- If you need CSS variables, `@keyframes`, complex state/hierarchy, or custom values — use
  `<style scoped>` with plain CSS.

## Tokens (from app/assets/css/main.css)

Never invent arbitrary values; use the token scales:

- Text, leading, and radius share one numeric scale: `text-4`, `leading-6.5`, `rounded-4`
  (fractional steps like `text-3.5` are valid). Defaults for `--text-*`, `--leading-*`,
  `--radius-*` are reset with `initial`, so only these numeric steps exist.
- Breakpoints: `xs sm md(69rem) lg xl 2xl`. Sections are mobile-first and usually switch at
  `md`. (The projects viewer switches at `< 69rem`.)
- Semantic colors: `surface`, `surface-accent`, `border-neutral`, `text-ghosty`,
  `text-black`, `text-white`, `primary-*`, `neutral-*`.
- Frequent classes: `text-text-ghosty`, `bg-surface`, `bg-surface-accent`,
  `border-border-neutral`, `text-primary-500`, `max-w-content` (`--spacing-content: 64rem`).

## Theming

- Dark/light via `dark:` and `light:` variants (custom variants defined in `main.css`).
- `.light` redefines the primary palette and the semantic roles; the `@theme` values are the
  dark defaults.
- Global color transitions already exist: `html *` has `transition-colors duration-300`.
  Do not add a base `transition` to cards; on `:hover` only, transition the specific property
  (e.g. border-color 700ms).

## Component CSS and animation

- Put component animations in `<style scoped>` with `@keyframes`.
- Pass dynamic numbers as CSS variables through `:style`, then consume them in scoped CSS:

```vue
<div :style="{ '--initial-x': '12px' }" class="move" />
```

```css
.move {
    @apply translate-x-(--initial-x);
}
```

- Do not create modifier classes per element (`&--1`, `&--2`). Pass the numeric parameter
  (delay, offset) as a CSS variable: `transition-delay: var(--reveal-delay, 0ms)`.
- Enter/leave animations: `@keyframes` (as in `ProjectDrawer`) or Vue `<transition>` with
  Tailwind classes. **Never** `@starting-style`/`starting:` — not Baseline "widely available".

## Standards

- Use only Baseline **"widely available"** CSS/APIs. No experimental or newly-available
  features, even if a recent browser supports them.

## Related skills

- Class array format and attribute order → `project-vue-sfc`.
- reka-ui state styling (`data-[state=...]`) → `project-reka-ui`.
