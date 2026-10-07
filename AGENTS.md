# AGENTS.md

Руководство для ИИ-агентов, работающих с этим репозиторием. Описывает устройство
проекта, команды и **правила стиля**, которым обязан следовать любой новый код.

> Главное правило: писать код **точно так же**, как он уже написан в существующих
> компонентах. При сомнениях — открыть ближайший аналогичный файл и повторить его стиль.

## О проекте

Персональное портфолио (Nuxt 4, SSR) для Fullstack-разработчика. Одностраничный
сайт с секциями «Обо мне», «Навыки», «Проекты», «Контакты». Собирается в статику
и публикуется на GitHub Pages.

## Стек

- **Nuxt** `~4.5.2` (Vue `~3.5`, `vue-router` `~5.3`), режим `ssr: true`.
- **TypeScript** `~6.0` в strict-режиме, проверка типов включена в сборку.
- **Tailwind CSS** `~4.3` через Vite-плагин `@tailwindcss/vite` (директивы `@theme`, `@apply`).
- **tailwind-variants** (`tv`, импорт из `tailwind-variants/lite`) для вариантов классов.
- **@vueuse/core** для реактивных утилит (`useWindowSize`, `useWindowScroll`, `useElementBounding`).
- **@nuxtjs/color-mode** — тёмная/светлая тема.
- **nuxt-lucide-icons** — иконки с префиксом `Icon` (в шаблоне `<icon-moon />`).
- **@nuxt/fonts** — шрифт Inter.
- **ESLint** `~10` через `@nuxt/eslint` + служебный пакет `@stylistic`.

## Тулчейн

- **Node.js 26** — зафиксировано в `.nvmrc` (`26`) и `package.json` (`engines.node`).
  На Node 20 и ниже ESLint 10 падает (`Object.groupBy is not a function`).
  Перед работой: `nvm use`.
- **pnpm** `9.15` (`devEngines.packageManager`), lockfile `pnpm-lock.yaml` — не коммитить
  другие lockfile.
- Отступ 4 пробела задан в `.editorconfig`.

## Команды

```bash
pnpm install       # установка зависимостей (postinstall: nuxt prepare)
pnpm dev           # dev-сервер на http://localhost:3000
pnpm build         # production-сборка (включает typecheck)
pnpm generate      # генерация статики
pnpm preview       # локальный предпросмотр сборки
pnpm lint          # ESLint по репозиторию (docs/ и dist/ игнорируются)
pnpm typecheck     # nuxt typecheck (vue-tsc)
```

После изменений в коде **всегда** запускать `pnpm lint` и `pnpm typecheck`.

## Структура

```
app/
  app.vue                         # корень: провайдит window box, подключает layout
  pages/index.vue                 # единственная страница, собирает секции
  layouts/default.vue             # Header + <slot/> + Footer
  assets/css/main.css             # токены Tailwind (@theme), базовый слой, темы
  components/
    ui/                           # Button.vue, Img.vue, DarkModeSwitch.vue — АВТО-регистрируются как <ui-*>
    layout/                       # Header.vue, Footer.vue + index.ts (экспорт LayoutHeader/LayoutFooter)
    content/
      primitives/                 # SectionWrapper, SectionHeader, SectionDivider + index.ts
      sections/
        <name>/                   # Section.vue + index.ts (+ локальные части и types.ts)
  composables/                    # useXxx.ts, авто-импортируются Nuxt
docs/                             # артефакт сборки для GitHub Pages — НЕ редактировать вручную
public/                           # статика: favicon.ico, media/images, media/icons
```

### Подключение компонентов (важно)

В `nuxt.config.ts` авто-сканирование компонентов переопределено:

```ts
components: [{ path: "~/components/ui", prefix: "ui", pathPrefix: false, extensions: [".vue"] }],
```

- Компоненты из `app/components/ui/` доступны в шаблоне **без импорта** в kebab-case:
  `<ui-button>`, `<ui-img>`, `<ui-dark-mode-switch>`.
- **Все остальные** компоненты (layout, primitives, sections) **нужно импортировать
  явно** из их barrel-файла `index.ts`. Авто-регистрации для них нет.

## Стиль кода

### Форматирование (контролируется ESLint)

- Отступ — **4 пробела** (`@stylistic/indent`, `vue/html-indent`).
- Точка с запятой всегда (`semi: always`).
- **Двойные** кавычки в JS/TS.
- Висячие запятые в многострочных конструкциях (`comma-dangle: always-multiline`).
- Перевод строки `LF`, кодировка UTF-8, файл **завершается переводом строки** (`eol-last: always`).
- Не более 3 пустых строк подряд; без пробелов в конце строк.
- Члены `type`/`interface` завершаются `;`.
- `no-multi-spaces` отключён — выравнивание колонок в литералах разрешено и используется.
- Не более одного атрибута на строку в многострочных тегах (`vue/max-attributes-per-line`).

Запускать `pnpm lint --fix` допустимо, но не полагаться на него вместо соблюдения стиля.

### Структура SFC

Порядок блоков и **ровно три пустые строки** между ними:

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

- Только `<script setup lang="ts">`. Options API не использовать.
- `<style scoped>` добавлять лишь при необходимости (анимации, `@apply`, `@keyframes`).

Внутри `<script>` логические блоки разделяются **двумя пустыми строками**:
сначала данные/константы и props, затем состояние/логика, затем функции.

### TypeScript

- Явный тип возврата у функций: `function handleClick(): void {}`.
- Параметр типа у `ref`/`computed`, когда тип не выводится: `ref<boolean>(initial)`,
  `computed<string>(() => ...)`, `computed<boolean>(() => ...)`.
- Типы описывать через `type`, экспортировать в конце файла:

  ```ts
  type CardBBox = {
      width: number;
      height: number;
  };


  export type {
      CardBBox,
  };
  ```

- Enum-подобные наборы значений — через `as const`:

  ```ts
  const Variant = {
      Solid: "solid",
      Outlined: "outlined",
  } as const;

  type Variant = typeof Variant[keyof typeof Variant];
  ```

- Опции композаблов — через `export interface XxxOptions` с JSDoc на русском.

### Стиль Vue-компонентов

- Props — **inline** тип в `defineProps<{...}>()`, без отдельного `interface Props`.
  Деструктуризация — в несколько строк, **даже если prop один**:

  ```ts
  const {
      src,
      alt,
  } = defineProps<{
      src: string;
      alt: string;
  }>();
  ```

- Emits — `defineEmits<{ ... }>()`, имена с namespace через `:`:
  `defineEmits<{ "click:card": []; }>()`.
- Двусторонняя привязка — `defineModel`, переменную именовать с `$`:
  `const $opened = defineModel<boolean>("opened", { required: false, default: false });`
- Обработчики — именованные функции `handleXxx(): void`, в шаблоне вызываются со скобками:
  `@click="handleClick()"`.
- Template ref — `useTemplateRef<T>("name")` (ref в шаблоне: `ref="name"`).
- `v-for` — через `of`, `:key` обязателен:
  `v-for="project of projects"` / `v-for="(skill, index) of skills"`.
- Текст выводить через `v-text`, **не** через `{{ }}`:
  `<span v-text="v('grade')" />`.
- Только для клиента — `<client-only>`; анимации — `<transition>` с явными классами
  (`enter-active-class`, `enter-from-class`, …).
- Модификаторы событий без обработчика допустимы: `@dragstart.prevent`.

### Авто-импорты Nuxt

Не импортировать встроенные/авто-импортируемые API: `ref`, `reactive`, `computed`,
`watch`, `provide`, `inject`, `readonly`, `createError`, `defineProps`, `defineEmits`,
`defineModel`, `useSeoMeta`, `useColorMode`, `useCookie`, `useTemplateRef`, `useAsyncData`
и т.п. — они доступны глобально.

Импортировать нужно только:
- внешние пакеты (`@vueuse/core`, `tailwind-variants/lite`, …);
- типы (`import type { ComponentPublicInstance } from "vue";`);
- собственные компоненты/композаблы/типы.

Порядок импортов — внешние и типы, пустая строка, абсолютные (`~/…`), пустая строка,
относительные (`./…`):

```ts
import type { ComponentPublicInstance } from "vue";

import { useElementBounding } from "@vueuse/core";

import { SectionWrapper } from "~/components/content/primitives";

import ProjectCard from "./ProjectCard.vue";
import ProjectView from "./ProjectView.vue";
```

### Именование

- Файлы компонентов — PascalCase (`Header.vue`, `ProjectCard.vue`).
- Секция: папка `sections/<name>/`, файл `Section.vue`, barrel `index.ts` с префиксным
  экспортом; в шаблоне — `<HeroSection />`, `<SkillsSection />`, `<ProjectSection />`:

  ```ts
  import HeroSection from "./Section.vue";

  export {
      HeroSection,
  };
  ```

- Локальные части секции (карточки, view, чипы и т.п.) складывать рядом в
  `sections/<name>/` отдельными компонентами и импортировать относительно
  (`./ProjectTag.vue`). Крупную разметку дробить на маленькие компоненты, а не
  держать всё в родителе; в `index.ts` экспортировать только публичную секцию.
- Примитивы: `primitives/SectionWrapper.vue` → экспорт `SectionWrapper` из `index.ts`.
- Layout: `layout/Header.vue` → экспорт `LayoutHeader` из `index.ts`.
- Композаблы — `useXxx.ts`, возвращают объект с именованными полями и JSDoc:

  ```ts
  export function useBooleanState(options: UseBooleanStateOptions = {}) {
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

- Данные/массивы — `const` camelCase (`skills`, `ambients`, `datalist`, `links`),
  поля элементов выравниваются по колонкам.

### Шаблоны

- Классы — **всегда** через `:class="[...]"`: массив строк, каждая смысловая группа
  на своей строке, даже если классы полностью статичные. Плоский `class="..."`
  допустим только для одиночного простого класса (`class="size-5"`), как в существующих
  компонентах.
- Порядок групп классов: позиционирование/структура → flex/grid → размеры → цвета →
  типографика.
- Порядок атрибутов: обычные/`:props` → `:class` → `v-for`/`:key` → `v-text` → события.

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
  ```

### Стили и Tailwind

- Использовать токены из `app/assets/css/main.css`, а не произвольные значения.
- Масштабы: `text-<N>`, `leading-<N>`, `rounded-<N>` (например `text-4`, `leading-6.5`,
  `rounded-4`).
- Семантические цвета: `surface`, `surface-accent`, `border-neutral`, `text-ghosty`,
  `text-black`, `text-white`, `primary-*`, `neutral-*`.
- Частые классы: `text-text-ghosty`, `bg-surface`, `bg-surface-accent`,
  `border-border-neutral`, `text-primary-500`, `max-w-content`.
- Тёмная тема — через `dark:` и `light:` варианты.
- Компонентная анимация — в `<style scoped>` с `@apply` и `@keyframes`.
- Динамические значения передавать CSS-переменными через `:style`, а использовать
  в scoped CSS через `@apply translate-x-(--initial-x)`.
- Не плодить классы-модификаторы (`&--1`, `&--2`) под каждый элемент. Числовой
  параметр (задержку, смещение) передавать CSS-переменной через `:style` и читать
  в scoped CSS: `transition-delay: var(--reveal-delay, 0ms)`.

### Комментарии и тексты

- Комментарии, JSDoc и TODO — **на русском**. Формат задач: `// TODO: ...`.
- Пользовательские тексты **не хардкодить** в разметке. Использовать `useVocabulary()`:
  - `const { v, vs } = useVocabulary();`
  - `v("projects_title")` — один ключ;
  - `vs(["first_name", "last_name"])` — склейка через пробел.
- Ключи добавлять в `app/composables/useVocabulary.ts` (`ru` и `en`), тип `VocabularyKey`
  выводится автоматически.

## Чего не делать

- Не редактировать сгенерированное: `docs/`, `.output/`, `.nuxt/`, `dist/`.
- Не менять настройки форматирования (отступы, кавычки, точки с запятой) в угоду вкусу.
- Не добавлять зависимости без явной необходимости.
- Не использовать `{{ }}` для текста, `interface Props` для `defineProps`, Options API.
- Не импортировать Vue/Nuxt-автоимпорты.
- Не коммитить `node_modules`, секреты и `.env`-файлы.
