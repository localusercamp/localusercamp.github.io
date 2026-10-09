---
name: project-workflow
description: Toolchain and validation workflow for this Nuxt portfolio (localusercamp.github.io). Use before and after ANY code change — pick the pinned Node/pnpm versions, start the dev server, and run the mandatory pnpm lint and pnpm typecheck checks that must pass before work is considered done. Also use when a command fails on the wrong Node version or a stray lockfile appears.
---

# Project workflow

## Toolchain (pinned — do not bump casually)

- Node.js **26** — pinned in `.nvmrc` and `package.json` (`engines.node`). Run `nvm use`
  before working. ESLint 10 crashes on Node 20 and below (`Object.groupBy is not a function`).
- pnpm **9.15** — pinned in `package.json` (`devEngines.packageManager`). The only lockfile
  is `pnpm-lock.yaml`; never add or commit another lockfile.
- Indentation is 4 spaces (`.editorconfig`).

## Commands

```bash
pnpm install     # dependencies (postinstall runs `nuxt prepare`)
pnpm dev         # dev server on http://localhost:3000
pnpm build       # production build (includes typecheck)
pnpm generate    # static site generation
pnpm preview     # preview the build locally
pnpm lint        # ESLint over the repo (docs/ and dist/ ignored)
pnpm typecheck   # nuxt typecheck (vue-tsc)
```

## Mandatory validation

After every change to code:

1. Run `pnpm lint`.
2. Run `pnpm typecheck`.

Both must pass. `pnpm lint --fix` may fix formatting, but it must never replace
following the style by hand.

## Do not touch

- Generated output: `docs/`, `.output/`, `.nuxt/`, `dist/` — never edit them by hand.
- `node_modules`, secrets, and `.env*` files — never commit them.

## Related skills

- Where code goes and what is auto-imported → `project-structure`.
- Formatting rules enforced by ESLint → `project-vue-sfc`, `project-typescript`.
