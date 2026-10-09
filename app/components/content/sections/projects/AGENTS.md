# Projects section

Local invariants for `app/components/content/sections/projects/`. These decisions already
broke the animation several times. **Do not revert them without a clear reason.**

## Composition and data

- The project viewer has two implementations; `Project.vue` picks by
  `useMediaQuery("(width < 69rem)")` inside a `<client-only>` (below 69rem is mobile):
  - `ProjectView.vue` — desktop morph from the card (document coordinates);
  - `ProjectDrawer.vue` — mobile bottom-sheet built on reka-ui `Drawer`.
- All content flows through props: `Section.vue` (`projects`) → `Project.vue` →
  `ProjectCard.vue` / `ProjectView.vue` / `ProjectDrawer.vue` → `ProjectRole`,
  `ProjectTags`, `ProjectViewGallery`/`ProjectViewLinks`/`ProjectViewHighlights` →
  `ProjectViewList`. No hardcoded text in the markup.
- `ProjectRole` is part of the "header": shown in both the card and the view
  (`role · period`). Below it, `.project-view__swap` cross-fades `summary`
  (card / closing) and the tags (open view) inside a single cell.
- The image viewer is **one per section**: it lives in `Section.vue`, and galleries call it
  via provide/inject (`imageViewer.ts`, `imageViewerKey`). Never create a viewer inside each
  project view.

## Positioning and stacking

- Overlay: `<Teleport to="body">` + `position: absolute` with **document** coordinates
  (`cardBBox.top + scrollY`). Do not switch to `fixed` — otherwise closing the modal sticks to
  the viewport instead of scrolling with the content.
- The `<ul>` grid is `relative z-0` (stacking context) so the card glow
  (`.project-card::before`, `z-index: -1`) sits behind all cards, not above the neighbor.
- Hover shadow lives only on `.project-card::before`; never put box-shadow on the card itself.

## Mobile drawer (reka-ui)

- `ProjectDrawer.vue` is assembled from reka-ui `Drawer` (`Root`/`Portal`/`Overlay`/
  `Content`/`Handle`/`Close`/`Title`), not written from scratch. Behavior (swipe-to-dismiss,
  scroll lock, focus trap, Esc, safe-area) comes from reka-ui.
- `DrawerRoot` is controlled: `:open="$opened"` + `@update:open` (write `$opened`, and on
  close emit `close:view` to restore the card).
- No `<style scoped>` in the component — Tailwind only. Finger drag:
  `translate-y-(--drawer-swipe-movement-y)` + `transition-transform` +
  `data-[swiping]:duration-0`. Keyframes/animations are declared as tokens in `main.css`
  (`@theme`, `--animate-drawer-*`) and enabled via
  `data-[state=open|closed]:animate-drawer-*`.
- Content scrolls in an inner block (`overflow-y-auto`, `overscroll-contain`); reka-ui
  distinguishes scroll from dismiss at the scroll edge.
- `DrawerTitle` is required (a11y). No description → `:aria-describedby="undefined"`.

## Key Vue gotcha

Vue **does not re-patch classes on a leaving element**, so `.is-open` (the persistent
open-state class) stays on the element for the whole closing animation. Therefore every
property set in `.is-open`/`.view-enter-to` that must return to compact has to be explicitly
duplicated in `.view-leave-to` (position, `padding`, `opacity`, fonts, delays). Do not rely on
the class being removed. This bug has recurred several times.

## Geometry (seamless open — desktop ProjectView only)

The compact overlay state must match the card. Currently: card `p-3` (0.75rem),
`gap-3 md:gap-4`, image `size-40`/`rounded-3`; cover at `top/left 0.75rem`; body at
`top 0.75rem`, `left 11.75rem`, `width calc(100% - 12.5rem)`. When you change padding/gap/image
size, update these values in sync.

## Timings (current — do not change without a reason)

- `--view-duration: 1400ms`, `--view-ease: cubic-bezier(0.16, 1, 0.3, 1)` (both directions).
- Cover: base `600ms ease 600ms`; opening — `300ms`, `delay 0`; closing —
  `delay var(--view-cover-close-delay)` (250ms) so the image appears after the text leaves.
- Close button: `--view-close-duration: 200ms`, `--view-close-delay: 100ms`.
- Sections: opacity only (no height animation). Shared delay `400ms`, step `120ms`
  (`--section-index`), show `400ms`, hide `150ms`.

## Misc

- Expanded body: `top/left 0`, `width 100%`, `padding: var(--view-padding)` (2rem) so the
  gallery can bleed past the padding; `padding` is part of the transition.
- Gallery full-bleed: `margin-inline: calc(var(--view-padding) * -1)`,
  `padding-inline: var(--view-padding)`, and **must** have
  `scroll-padding-inline: var(--view-padding)` (otherwise scroll-snap sticks to the edge).
- On closing, body: `.view-leave-active .project-view__body { max-height: none; overflow: hidden }`
  (otherwise scrollbars) and `.view-leave-to .project-view__body { padding: 0 }` (otherwise a
  stale inset from `.is-open`).
- Section spacing is a Tailwind `m*` class on the section root (`mt-6`), not in
  `.project-view__section`.
- On theme change the card follows the global `transition-colors` (300ms): do not set a base
  `transition` on `.project-card`; the 700ms border transition is on `:hover` only.
- The modal currently has no shadow (box-shadow removed). The blurred ambient-blob layer was
  also removed — it expanded the document scroll area. Do not bring either back without a
  clear reason.
