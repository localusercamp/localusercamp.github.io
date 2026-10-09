---
name: project-vocabulary
description: User-facing text and i18n through the useVocabulary composable. Use whenever a component shows text, when adding or renaming a visible string, or when you see v("...")/vs([...])/v-text and need to add a key to the ru/en vocabularies.
---

# Vocabulary and user-facing text

All visible text goes through `useVocabulary()` — never hardcode it in the template.

```ts
const { v, vs } = useVocabulary();

v("projects_title");              // one key
vs(["first_name", "last_name"]);  // joined with a space
```

## Rules

- Output text with `v-text`, never `{{ }}`:

```vue
<span v-text="v('grade')" />
```

- Keys live in `app/composables/useVocabulary.ts`. Add each key to **both** `ru` and `en`.
  The `VocabularyKey` type is derived automatically, so a missing key becomes a type error.
- `v()` warns at runtime about an unknown key and falls back to the key itself.
- `vs(keys, separator?)` joins several keys; the default separator is a space.
- Content data (arrays of projects, skills) is data, not vocabulary: keep it in the
  section's `<script>`, but still render it via `v-text` and pass strings down as props.

## Related skills

- Rendering rules and template attribute order → `project-vue-sfc`.
