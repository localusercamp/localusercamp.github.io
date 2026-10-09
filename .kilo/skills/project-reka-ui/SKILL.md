---
name: project-reka-ui
description: Build interactive UI (dialogs, drawers, popovers, tooltips, selects, accordions, tabs, switches) with reka-ui primitives. Use whenever a component needs behavior, focus management, scroll lock, keyboard support, or ARIA instead of a hand-rolled implementation.
---

# reka-ui

Do not build interactive components from scratch. reka-ui is an unstyled primitive library:
it provides behavior and accessibility, we provide styling.

## Order of work

1. Find the closest primitive by **meaning**, not by component name.
2. Read the primitive's docs in LLM format:
   - index of all pages: `https://reka-ui.com/llms.txt`
   - page as markdown: `https://reka-ui.com/docs/components/<name>.md`
   - source and props: `node_modules/reka-ui/src/<Component>/`
3. Compose the component from the provided parts (`Root` / `Trigger` / `Portal` /
   `Overlay` / `Content` / `Handle` / `Close` / `Title` / ...). Do not reinvent behavior.
4. Wrap it in a local component with our API and Tailwind styling.

## Rules

- reka-ui gives behavior and a11y (focus, scroll lock, keyboard, ARIA) but **no styles**.
  Style via `data-state` / `data-[state=...]`, `@keyframes`, and the primitive's CSS
  variables — not hand-written reactivity.
- Shared wrappers go in `components/ui/` (auto-registered `<ui-*>`); section-local wrappers go
  next to the section.
- Controlled roots: bind `:open="$opened"` and handle `@update:open`, updating the model and
  emitting a close event when it becomes `false`. See
  `app/components/content/sections/projects/ProjectDrawer.vue`.
- Animations for reka-ui state changes: `data-[state=open|closed]:animate-*` tokens defined in
  `main.css` (`@theme`, `--animate-*`), or scoped `@keyframes` keyed on `[data-state]`.
- `Drawer` is **Alpha** — its API may change. `DrawerTitle` is required (a11y); pass
  `:aria-describedby="undefined"` when there is no description.
- Do not pull reka-ui everywhere: static markup and layout stay plain Tailwind.

## Related skills

- Styling, tokens, keyframes → `project-styling`.
- Component API and template conventions → `project-vue-sfc`.
