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
                    :description="project.description"
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
        description: "Вулфи — цифровая платформа для автоматизации дополнительного образования. Учреждения ведут программы и группы, отслеживают посещаемость и формируют отчётность в едином окне, а родители записываются на занятия и следят за обучением ребёнка.",
        role: "Tech lead",
        period: "2022 — 2024",
        summary: "Собрал платформу для дополнительного образования с нуля: архитектура, API, личный кабинет и админ-панель.",
        tags: ["TypeScript", "Vue 3", "Nuxt 4", "TailwindCSS", "PHP 8.3", "Laravel 12", "PostgreSQL"],
        links: [
            { label: "visitugra.ru",    href: "https://visitugra.ru" },
            { label: "lk.visitugra.ru", href: "https://lk.visitugra.ru" },
        ],
        gallery: [
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/cover.webp",
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
        title: "VisitUgra",
        description: "VisitUgra — единая цифровая туристическая платформа Югры. Объединяет каталог туров и маршрутов, онлайн-бронирование, личный кабинет туриста и инструменты для туроператоров региона.",
        role: "Fullstack-разработчик",
        period: "2022 — 2024",
        summary: "Участвовал в развитии большой туристической платформы региона: портал, личный кабинет туроператора и бэкенд-API",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "SCSS / TailwindCSS", "PHP 7.4 - 8.0", "Laravel 6 - 11", "MySQL"],
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
        description: "LetSki — цифровая платформа для детской лыжной школы. Тренеры ведут группы и расписание занятий, отмечают посещаемость и прогресс учеников, а родители записываются на тренировки и следят за результатами ребёнка в личном кабинете.",
        role: "Fullstack-разработчик",
        period: "2023 — 2024",
        summary: "Разработал платформу для лыжной школы: расписание, учёт посещаемости и личный кабинет родителя.",
        tags: ["TypeScript", "Vue 3", "Nuxt 3", "TailwindCSS", "PHP 8.2", "Laravel 10", "PostgreSQL"],
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
        description: "Мониторинг Югра — государственная система сбора и визуализации данных о регионе. Сводит разрозненные показатели — зарплаты, экономику, закупки и другие — в единую аналитическую панель для принятия управленческих решений.",
        role: "Fullstack-разработчик",
        period: "2022 — 2024",
        summary: "Участвовал в развитии государственной аналитической системы: сбор данных, отчётность и дашборды.",
        tags: ["TypeScript", "Vue 3", "Nuxt", "TailwindCSS", "PHP", "Laravel", "PostgreSQL"],
        links: [],
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
        description: "EaseAI — платформа для решения повседневных задач с помощью ИИ. Набор специализированных агентов закрывает часто возникающие бытовые и рабочие вопросы: от планирования до подготовки документов.",
        role: "Fullstack-разработчик",
        period: "2024 — 2025",
        summary: "Разрабатываю ИИ-платформу с набором агентов под часто возникающие задачи пользователей.",
        tags: ["TypeScript", "Vue 3", "Nuxt 4", "TailwindCSS", "Node.js", "PostgreSQL", "LLM / AI"],
        links: [],
        gallery: [
            "/media/images/projects/visitugra/cover.webp",
            "/media/images/projects/visitugra/image1.webp",
            "/media/images/projects/visitugra/image3.webp",
            "/media/images/projects/visitugra/image5.webp",
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
