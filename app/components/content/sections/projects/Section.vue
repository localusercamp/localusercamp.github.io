<template>
    <SectionWrapper
        id="projects"
        :inner-class="[
            'py-8 md:py-20',
        ]"
    >
        <SectionHeader
            :title="v('projects_title')"
            :subtitle="v('projects_subtitle')"
            :description="v('projects_description')"
        />

        <ul
            :class="[
                'relative z-0',
                'mt-8 md:mt-10',
                'grid grid-cols-1 gap-4',
                'md:grid-cols-2 md:gap-4',
            ]"
        >
            <li
                v-for="project of projects"
                :key="project.title"
            >
                <Project
                    :title="project.title"
                    :subtitle="project.subtitle"
                    :description="project.description"
                    :contribution="project.contribution"
                    :image="project.image"
                    :role="project.role"
                    :period="project.period"
                    :summary="project.summary"
                    :tags="project.tags"
                    :links="project.links"
                    :gallery="project.gallery"
                    :tasks="project.tasks"
                    :results="project.results"
                />
            </li>
        </ul>

        <ProjectImageViewer
            v-model:opened="viewerOpened"
            :images="viewerImages"
            :start-index="viewerIndex"
        />
    </SectionWrapper>
</template>



<script setup lang="ts">
import { SectionWrapper, SectionHeader } from "~/components/content/primitives";

import Project from "./Project.vue";
import ProjectImageViewer from "./ProjectImageViewer.vue";
import { imageViewerKey } from "./imageViewer.ts";

const { v } = useVocabulary();

const viewerOpened = ref<boolean>(false);
const viewerImages = ref<string[]>([]);
const viewerIndex = ref<number>(0);



function openImageViewer(images: string[], startIndex: number): void {
    viewerImages.value = images;
    viewerIndex.value = startIndex;
    viewerOpened.value = true;
}

provide(imageViewerKey, {
    open: openImageViewer,
});


const projects = computed(() => [
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "Вулфи",
        subtitle: "Федеральная платформа детского образования",
        summary: "Спроектировал и разработал архитектуру платформы из 5 фронтенд-приложений с общим бекендом.",
        description: "Платформа для цифровизации бизнеса в сфере дополнительного образования. Продукт позволяет организациям создавать кастомизируемый личный кабинет, упрощает составление расписания и ведения учета посещений, а так же делает процесс образования прозрачным для родителей и более интересным для детей.",
        contribution: "В проекте я занимался проектированием архитектуры, реализацией функционала и подбором технологий. Было много интересных и не тривиальных задач, которые мы решали всей командой, например: оплата подписок, календарь, расписание, геймификация, достижения, собственный UIKit, а так же внутренние инструменты для повышения DX и много чего еще. В проекте мне удалось много поэкспериментировать и многому научиться.",
        role: "Tech Lead",
        period: "2023 — 2026",
        tags: ["TypeScript", "Vue 3", "Nuxt 4", "TailwindCSS", "PHP 8.3", "Laravel 12", "PostgreSQL"],
        links: [
            { label: "wolfie.ru", href: "https://wolfie.ru" },
        ],
        gallery: [
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/cover.webp",
        ],
        tasks: [
            "Спроектировал модульную архитектуру бэкенд приложения и реализовал внутренние инструменты и абстракции для упрощения разработки",
            "Спроектировал модульную архитектуру фронтенд приложений на основе Nuxt Layers и паттерна \"Barrel\"",
            "Спроектировал и реализовал UIKit как самодостаточный Nuxt-слой с помощью фреймворка для создания дизайн систем RekaUI",
            "Спроектировал и реализовал подсистему расписания с поддержкой кастомного RRULE",
            "Спроектировал и реализовал CRM-подсистему отслеживания жизненного цикла клиента",
            "Спроектировал и реализовал подсистему единой аутентификации и авторизации между всеми фронтенд приложениями",
            "Внедрил в продукт TailwindCSS и TypeScript, что позволило создавать компоненты быстрее и надежнее",
        ],
        results: [
            // "Ускорил загрузку страниц на 40%",
            // "15 000+ пользователей в месяц",
            // "Сократил время публикации контента в 3 раза",
        ],
    },
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "ВизитЮгра",
        subtitle: "Региональная платформа развития туризма",
        summary: "Разработал 9 модулей платформы - от аналитики до многофункциональных редакторов.",
        description: "VisitUgra — единая цифровая туристическая платформа Югры. Объединяет каталог туров и маршрутов, онлайн-бронирование, личный кабинет туриста и инструменты для туроператоров региона.",
        contribution: "Разработал большинство модулей платформы: каталог туров и маршрутов, онлайн-бронирование, личный кабинет туриста и инструменты для туроператоров, а также модули аналитики и многофункциональные редакторы.",
        role: "Fullstack-разработчик",
        period: "2020 — 2026",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "SCSS / TailwindCSS", "PHP 7.4 - 8.0", "Laravel 6 - 10", "MySQL"],
        links: [
            { label: "visitugra.ru",    href: "https://visitugra.ru" },
            { label: "lk.visitugra.ru", href: "https://lk.visitugra.ru" },
        ],
        gallery: [
            "/media/images/projects/visitugra/image1.webp",
            "/media/images/projects/visitugra/image2.webp",
            "/media/images/projects/visitugra/image3.webp",
            "/media/images/projects/visitugra/image4.webp",
            "/media/images/projects/visitugra/image5.webp",
            "/media/images/projects/visitugra/image6.webp",
        ],
        tasks: [
            "Спроектировал архитектуру и REST API на Nuxt + Laravel",
            "Разработал личный кабинет, каталог и админ-панель",
            "Настроил CI/CD, деплой и мониторинг",
        ],
        results: [
            "Ускорил загрузку страниц на 40%",
            "15 000+ пользователей в месяц",
            "Сократил время публикации контента в 3 раза",
        ],
    },
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "LetSki",
        subtitle: "Платформа для детской лыжной школы",
        summary: "Спроектировал и разработал архитектуру платформы, которая цифровизовала франшизу в нескольких городах.",
        description: "LetSki — цифровая платформа для детской лыжной школы. Тренеры ведут группы и расписание занятий, отмечают посещаемость и прогресс учеников, а родители записываются на тренировки и следят за результатами ребёнка в личном кабинете.",
        contribution: "Спроектировал архитектуру и API сервиса, разработал личные кабинеты тренеров и родителей, расписание и учёт посещаемости, настроил интеграции и деплой.",
        role: "Fullstack-разработчик",
        period: "2022 — 2023",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "SCSS", "PHP 8.0", "Laravel 9", "PostgreSQL"],
        links: [],
        gallery: [
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/image1.webp",
            "/media/images/projects/visitugra/image2.webp",
            "/media/images/projects/visitugra/image3.webp",
        ],
        tasks: [
            "Спроектировал архитектуру и API сервиса",
            "Разработал личный кабинет и административную панель",
            "Настроил интеграции и деплой",
        ],
        results: [
            "Автоматизировал учёт посещаемости и расписания",
            "Сократил время на рутинные операции",
            "Обеспечил стабильную работу сервиса",
        ],
    },
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "Мониторинг Югра",
        subtitle: "Государственная аналитическая система региона",
        summary: "Разработал модули отчетов и аналитики для различных организаций правительства.",
        description: "Мониторинг Югра — государственная система сбора и визуализации данных о регионе. Сводит разрозненные показатели — зарплаты, экономику, закупки и другие — в единую аналитическую панель для принятия управленческих решений.",
        contribution: "Разрабатывал модули сбора данных и аналитических панелей для департаментов правительства Югры, проектировал API и интеграции, визуализировал отчётность.",
        role: "Fullstack-разработчик",
        period: "2020 — 2022",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "PHP 7.0 - 8.0", "Laravel 5 - 8", "PostgreSQL"],
        links: [
            { label: "lk-monitoring.admhmao.ru",  href: "https://lk-monitoring.admhmao.ru" },
            { label: "lk2-monitoring.admhmao.ru", href: "https://lk2-monitoring.admhmao.ru" },
        ],
        gallery: [
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/image4.webp",
            "/media/images/projects/visitugra/image5.webp",
            "/media/images/projects/visitugra/image6.webp",
        ],
        tasks: [
            "Спроектировал архитектуру и API сервиса",
            "Разработал интерфейс отчётов и аналитических панелей",
            "Настроил сбор данных и интеграции",
        ],
        results: [
            "Объединил разрозненные данные в единой системе",
            "Ускорил подготовку отчётности",
            "Обеспечил стабильную работу сервиса",
        ],
    },
    {
        image: "/media/images/projects/visitugra/cover.webp",
        title: "EaseAI",
        subtitle: "Корпоративный AI-сервис",
        summary: "Разрабатывал AI-платформу для решения рабочих задач с помощью специализированных ИИ-агентов.",
        description: "EaseAI — платформа для решения повседневных задач с помощью ИИ. Набор специализированных агентов закрывает часто возникающие бытовые и рабочие вопросы: от планирования до подготовки документов.",
        contribution: "Спроектировал архитектуру платформы и API, реализовал интерфейс и сценарии работы ИИ-агентов, интегрировал языковые модели ChatGPT, ГигаЧат и YandexGPT.",
        role: "Fullstack-разработчик",
        period: "2024",
        tags: ["ChatGPT / ГигаЧат / YandexGPT", "PHP 8.0", "Laravel 9", "SQLite", "TypeScript", "Vue 3", "Nuxt 3", "TailwindCSS"],
        links: [],
        gallery: [
            "/media/images/projects/easeai/image1.webp",
            "/media/images/projects/easeai/image2.webp",
            "/media/images/projects/easeai/image3.webp",
        ],
        tasks: [
            "Спроектировал архитектуру платформы и API сервиса",
            "Разработал интерфейс и сценарии работы с ИИ-агентами",
            "Настроил интеграции с языковыми моделями и деплой",
        ],
        results: [
            "Автоматизировал типовые повседневные задачи",
            "Сократил время выполнения рутинных операций",
            "Обеспечил стабильную работу сервиса",
        ],
    },
]);
</script>
