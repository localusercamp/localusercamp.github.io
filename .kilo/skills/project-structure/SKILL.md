---
name: project-structure
description: Repository map and file-placement rules for this Nuxt 4 app. Use when adding, moving, or naming files; deciding where new code belongs (ui vs layouts vs sections vs composables); creating a section folder or barrel index.ts; or checking what Nuxt auto-imports and which components need explicit imports.
---

# Project structure

## Map

```
app/
  app.vue                      # root: provides window box, mounts the layout
  pages/index.vue              # the single page, assembles sections
  layouts/default.vue          # LayoutHeader + <slot/> + LayoutFooter
  assets/css/main.css          # Tailwind tokens (@theme), base layer, themes
  components/
    ui/                        # Button.vue, Img.vue, DarkModeSwitch.vue — AUTO-registered as <ui-*>
    layouts/
      default/                 # Header.vue, Footer.vue + index.ts (exports LayoutHeader/LayoutFooter)
      primitives/              # HeaderBurger.vue, HeaderNav.vue, HeaderNickname.vue + index.ts
    content/
      primitives/              # SectionWrapper, SectionHeader, SectionDivider + index.ts
      sections/<name>/         # Section.vue + index.ts (+ local parts and types.ts)
  composables/                 # useXxx.ts, auto-imported by Nuxt
public/                        # favicon.ico, media/images, media/icons
docs/                          # generated GitHub Pages output — do not edit
```

Note: the layout components live in `app/components/layouts/` (plural), split into
`default/` (Header/Footer) and `primitives/` (HeaderBurger/HeaderNav/HeaderNickname), each
with its own `index.ts`. This is separate from the Nuxt layout file `app/layouts/default.vue`.

## Component registration (the key trap)

`nuxt.config.ts` overrides auto-scanning to **only** `~/components/ui`:

```ts
components: [{ path: "~/components/ui", prefix: "ui", pathPrefix: false, extensions: [".vue"] }],
```

- `ui/*` components are used without import, in kebab-case: `<ui-button>`, `<ui-img>`,
  `<ui-dark-mode-switch>`.
- **Everything else** (layouts, primitives, sections) must be imported explicitly from its
  barrel `index.ts`. There is no auto-registration for them.

## Naming and barrels

- Component files are PascalCase (`Header.vue`, `ProjectCard.vue`).
- A section is `sections/<name>/Section.vue` plus a barrel with a prefixed export:

```ts
// sections/hero/index.ts
import HeroSection from "./Section.vue";

export {
    HeroSection,
};
```

- Local section parts (cards, views, chips) live next to `Section.vue` and are imported
  relatively (`./ProjectCard.vue`). Only the public section is exported from `index.ts`.
- Layout: `layouts/default/Header.vue` → exported as `LayoutHeader` from
  `layouts/default/index.ts`; layout parts (e.g. `layouts/primitives/HeaderBurger.vue`) are
  exported from `layouts/primitives/index.ts`.
- Composable files are `useXxx.ts`.

## Imports

- **Never** import Vue/Nuxt auto-imports: `ref`, `reactive`, `computed`, `watch`, `provide`,
  `inject`, `readonly`, `createError`, `defineProps`, `defineEmits`, `defineModel`,
  `useSeoMeta`, `useColorMode`, `useCookie`, `useTemplateRef`, `useAsyncData`, etc. They are
  global.
- Import only: external packages, types (`import type { ... } from "vue"`), and your own
  modules.
- Order: external + `import type` → blank line → absolute (`~/...`) → blank line → relative
  (`./...`).

## Where new code goes

- Reusable primitive that must be auto-registered → `components/ui/`; otherwise
  `components/content/primitives/`.
- Reusable reactive logic → `composables/useXxx.ts`.
- New content section → `components/content/sections/<name>/Section.vue` + `index.ts`, then
  mount it in `pages/index.vue`.

## Related skills

- SFC/template/props style → `project-vue-sfc`.
- Type and composable style → `project-typescript`.
- Toolchain and validation → `project-workflow`.
