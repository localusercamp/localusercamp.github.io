# AGENTS.md

Entry point for AI agents working in this repository: identity, stack, commands, a short
structure map, global invariants, and an index of project skills. Task-specific detail lives
in the skills under `.kilo/skills/`; directory-specific quirks live in nested `AGENTS.md`
files.

> Golden rule: write code **exactly** like the existing code. When unsure, open the closest
> analogous file and repeat its style.

## Project

Personal portfolio (Nuxt 4, SSR) for a Fullstack developer. A single page with the sections
About, Skills, Projects, Contacts. It builds to static output and is published to GitHub Pages.

## Stack

- **Nuxt** `~4.6.0` (Vue `~3.5`, `vue-router` `~5.3`), `ssr: true`.
- **TypeScript** `~6.0` strict; typecheck is part of the build.
- **Tailwind CSS** `~4.3` via `@tailwindcss/vite` (`@theme`, `@apply`).
- **tailwind-variants** (`tv`, imported from `tailwind-variants/lite`) for class variants.
- **reka-ui** `~2.11` — unstyled primitives for interactive components.
- **@vueuse/core** for reactive utilities (`useWindowSize`, `useWindowScroll`, `useElementBounding`).
- **@nuxtjs/color-mode** — dark/light theme.
- **nuxt-lucide-icons** — icons with the `Icon` prefix (`<icon-moon />`).
- **@nuxt/fonts** — Inter.
- **ESLint** `~10` via `@nuxt/eslint` + `@stylistic`.

## Toolchain

- **Node.js 26** — pinned in `.nvmrc` and `package.json` (`engines.node`). Run `nvm use`
  before working. ESLint 10 crashes on Node 20 and below.
- **pnpm 9.15** — pinned in `package.json` (`devEngines.packageManager`). Only
  `pnpm-lock.yaml` is allowed; never commit another lockfile.
- Indentation is 4 spaces (`.editorconfig`).

## Commands

```bash
pnpm install       # dependencies (postinstall: nuxt prepare)
pnpm dev           # dev server on http://localhost:3000
pnpm build         # production build (includes typecheck)
pnpm generate      # static generation
pnpm preview       # local preview of the build
pnpm lint          # ESLint over the repo (docs/ and dist/ ignored)
pnpm typecheck     # nuxt typecheck (vue-tsc)
```

After any code change, **always** run `pnpm lint` and `pnpm typecheck`.

## Structure

```
app/
  app.vue                         # root: provides the window box, mounts the layout
  pages/index.vue                 # the single page, assembles sections
  layouts/default.vue             # Header + <slot/> + Footer
  assets/css/main.css             # Tailwind tokens (@theme), base layer, themes
  components/
    ui/                           # Button.vue, Img.vue, DarkModeSwitch.vue — AUTO-registered as <ui-*>
    layouts/                      # Header.vue, Footer.vue + index.ts (exports LayoutHeader/LayoutFooter)
    content/
      primitives/                 # SectionWrapper, SectionHeader, SectionDivider + index.ts
      sections/<name>/            # Section.vue + index.ts (+ local parts and types.ts)
  composables/                    # useXxx.ts, auto-imported by Nuxt
public/                           # statics: favicon.ico, media/images, media/icons
docs/                             # GitHub Pages build artifact — do not edit by hand
```

Only `app/components/ui/` is auto-registered (as `<ui-*>`); every other component must be
imported explicitly from its barrel `index.ts`. Full details in the `project-structure` skill.

## Global invariants

These always apply; skills expand on them.

- Formatting: 4 spaces, double quotes, semicolons, trailing commas, LF, final newline, at most
  3 consecutive blank lines, one attribute per line in multiline tags.
- Only `<script setup lang="ts">`; no Options API; props are inline types in `defineProps`.
- Text only via `v-text` and `useVocabulary()` — never `{{ }}` or hardcoded visible strings.
- Never import Vue/Nuxt auto-imports (`ref`, `computed`, `watch`, `defineProps`, `useCookie`,
  `useSeoMeta`, `useTemplateRef`, ...); import only external packages, types, and own modules.
- Tailwind with project tokens only (`text-4`, `leading-6`, `rounded-4`, `bg-surface`,
  `text-text-ghosty`, `text-primary-500`, `max-w-content`), `dark:`/`light:` for themes.
- Comments, JSDoc, and TODOs are in **Russian** (`// TODO: ...`).
- Interactive components are assembled from reka-ui primitives — do not hand-roll behavior.
- Use only Baseline **"widely available"** APIs. No `@starting-style`/`starting:`.
- Do not edit generated output (`docs/`, `.output/`, `.nuxt/`, `dist/`); do not add
  dependencies without a clear need; never commit `node_modules`, secrets, or `.env*` files.

## Project skills

Skills are auto-discovered from `.kilo/skills/`. Load the matching one:

- `project-workflow` — toolchain, commands, mandatory lint/typecheck.
- `project-structure` — repo map, file placement, auto-imports, barrel exports.
- `project-vue-sfc` — SFC blocks, props/emits/model, template and class rules.
- `project-typescript` — types, composables, `as const`, exports.
- `project-styling` — Tailwind tokens, themes, scoped CSS, keyframes, CSS variables.
- `project-reka-ui` — composing interactive components from reka-ui primitives.
- `project-vocabulary` — user-facing text and i18n via `useVocabulary`.

## Per-directory instructions

- `app/components/content/sections/projects/AGENTS.md` — Projects section animation
  invariants (ProjectView morph, ProjectDrawer, geometry, timings). Read it before touching
  that folder.
