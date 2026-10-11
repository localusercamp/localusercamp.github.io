---
name: project-content-sync
description: Keep the derived AI/HR/SEO artifacts in sync with site content — regenerate the CV (app/templates/cv.ru.html → public/documents/Evgeniy_Polozov_CV.pdf) and the OG preview (app/templates/og.html → public/media/images/og.png), update public/llms.txt, the JSON-LD and SEO meta in app/pages/index.vue, and public/sitemap.xml. Use when personal info, contacts, skills, the certificate, or projects change, including «добавь проект», «обнови CV», «поменялись навыки / контакты».
---

# Content sync: CV, OG preview, llms.txt, JSON-LD, sitemap

Site data is the single source of truth. The CV, OG preview, `llms.txt`, JSON-LD, SEO meta and
sitemap are derived copies and must be updated after any content change.

## Sources of truth

- `app/composables/useVocabulary.ts` — name, nickname, grade, about, email, Telegram, GitHub,
  and the SEO strings `seo_title` / `seo_description` used by the page meta.
- `app/data/projects.ts` — `projectsRu` / `projectsEn` (per-locale `ProjectData[]`), exposed
  through the `useProjects()` composable: title, subtitle, summary, description, contribution,
  role, period, tags, links, tasks, results (rendered by `sections/projects/Section.vue` and
  mirrored into the JSON-LD `ItemList`).
- `app/components/content/sections/skills/Section.vue` — skills and their experience durations.
- `app/components/content/sections/hero/NuxtCertificateLink.vue` — certificate URL.
- `app/templates/cv.ru.html` — the only home of CV-only facts: phone, birth date, employer,
  work format, education, languages.

## Derived artifacts

- `app/templates/cv.ru.html` — CV source; `app/templates/` is not processed by Nuxt. Hand-edit
  to mirror the sources; keep the A4 print CSS, the strict B/W style, and the section order
  (О себе, Ключевые навыки, Опыт работы, Образование, Сертификаты, Языки).
- `public/documents/Evgeniy_Polozov_CV.pdf` — regenerate from the HTML (command below).
- `app/templates/og.html` — OG preview source (1200×630: dark background, name, role, green
  gradient), not processed by Nuxt. Hand-edit the name and role when they change.
- `public/media/images/og.png` — regenerate from the HTML (command below).
- SEO meta in `app/pages/index.vue` — title and description from `seo_title` /
  `seo_description`; canonical and og / twitter URLs are built from the `site_url` vocabulary
  key (`import.meta.dev` → `http://localhost:3000/`, production build → the GitHub Pages
  root); `robots: index, follow, max-image-preview:large`; og / twitter images point at
  `media/images/og.png`.
- `public/llms.txt` — mirror contacts, about, experience and **full project details**: the
  project drawer content (tasks / description / tags / results) is `<client-only>` and absent
  from the static HTML, so `llms.txt` is the only machine-readable source of it besides the PDF.
- JSON-LD in `app/pages/index.vue` — `Person` / `ProfilePage` / `WebSite` / `ItemList`; the
  `ItemList` mirrors every project from `app/data/projects.ts` (name, description,
  keywords = tags, url / sameAs = links) so the drawer-only details stay machine-readable.
  `worksFor`, `alumniOf`, `hasCredential`, `knowsAbout` are static object literals there,
  while name, email and contacts come from the vocabulary. All keys in an object that
  contains `@type` must stay quoted (ESLint `@stylistic/quote-props` errors otherwise).
- `public/sitemap.xml` — bump `<lastmod>` to the current date.
- `public/robots.txt` — touch only if the site URL or the crawler policy changes.

`cvUrl` in `app/components/content/sections/hero/Section.vue` is the download link for the PDF:
keep the PDF file name stable, and update `cvUrl` if it ever changes.

## Regenerate the CV PDF

```powershell
& "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="V:\dev\localusercamp.github.io\public\documents\Evgeniy_Polozov_CV.pdf" "file:///V:/dev/localusercamp.github.io/app/templates/cv.ru.html"
```

- Absolute paths are required on purpose: Chrome does not resolve a relative `--print-to-pdf`
  path against the shell working directory and fails with "не удается найти указанный путь".
- Fallback if Chrome is absent: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.
- The `file:///` URL must be absolute; `--no-pdf-header-footer` removes the printed URL and date.
- The current layout prints to 2 A4 pages.

## Verify the PDF

Render pages to PNG and inspect them with the Read tool (page count, no clipped text, project
blocks not split across pages):

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File ".kilo\skills\project-content-sync\render-pdf.ps1" -PdfPath "public\documents\Evgeniy_Polozov_CV.pdf" -OutDir "$env:TEMP\kilo\pdf-pages"
```

The script uses the built-in Windows.Data.Pdf renderer (no dependencies) and writes `page-N.png`
at 2x scale.

## Regenerate the OG preview

```powershell
& "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --screenshot="V:\dev\localusercamp.github.io\public\media\images\og.png" "file:///V:/dev/localusercamp.github.io/app/templates/og.html"
```

- The window size must stay exactly 1200×630 to match the `og:image` dimensions.
- Inspect the resulting PNG with the Read tool after regenerating.

## Change → artifacts checklist

- New / edited project: `app/data/projects.ts` (both locales) → JSON-LD `ItemList` picks it up
  automatically → CV «Опыт работы» (bullets, stack, links, results) → `llms.txt` project
  entry → PDF → sitemap `lastmod`.
- Personal info / contacts: vocabulary → CV header → `llms.txt` → JSON-LD (`name`, `email`,
  `sameAs`) → `seo_title` / `seo_description` if the role changed → `og/og.png` → PDF.
- Skills: `skills/Section.vue` → CV «Ключевые навыки» → `llms.txt` → JSON-LD `knowsAbout` → PDF.
- Certificate: hero link → CV «Сертификаты» → `llms.txt` → JSON-LD `hasCredential` → PDF.
- Employer / education / languages / phone: `app/templates/cv.ru.html` → `llms.txt` → JSON-LD
  (`worksFor`, `alumniOf`) → PDF.

## Validation

1. Visually verify the regenerated PDF and OG preview (above).
2. `pnpm lint` and `pnpm typecheck` after `.vue` / `.ts` edits.
3. `pnpm generate` to confirm `llms.txt`, `sitemap.xml`, the PDF, the OG image and the project
   card texts land in `.output/public`; `docs/` is the publish output, refreshed separately.

## Related skills

- Toolchain and mandatory checks → `project-workflow`.
- Text / i18n → `project-vocabulary`.
- File placement → `project-structure`.
