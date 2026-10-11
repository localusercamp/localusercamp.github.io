type ProjectLink = {
    label: string;
    href: string;
};

type ProjectData = {
    image: string;
    title: string;
    subtitle: string;
    summary: string;
    description: string;
    contribution: string;
    role: string;
    period: string;
    tags: string[];
    links: ProjectLink[];
    gallery: string[];
    tasks: string[];
    results: string[];
};



const projectsRu: ProjectData[] = [
    {
        image: "/media/images/projects/wolfie/logo.svg",
        title: "Вулфи",
        subtitle: "Федеральная платформа детского образования",
        summary: "Спроектировал и разработал архитектуру платформы из 5 фронтенд-приложений с общим бекендом.",
        description: "Платформа для цифровизации бизнеса в сфере дополнительного образования. Продукт позволяет организациям создавать кастомизируемый личный кабинет, упрощает составление расписания и ведения учета посещений, а так же делает процесс образования прозрачным для родителей и более интересным для детей.",
        contribution: "В проекте я занимался проектированием архитектуры, реализацией функционала и подбором технологий. Было много интересных и не тривиальных задач, которые мы решали всей командой, например: оплата подписок, календарь, расписание, геймификация, достижения, собственный UIKit, а так же внутренние инструменты для повышения DX и много чего еще. Отдельно вёл небольшую команду из 3 разработчиков: распределял задачи, проводил код-ревью и менторил коллег. В проекте мне удалось много поэкспериментировать и многому научиться.",
        role: "Tech Lead",
        period: "2023 — 2026",
        tags: ["TypeScript", "Vue 3", "Nuxt 4", "TailwindCSS", "PHP 8.3", "Laravel 12", "PostgreSQL"],
        links: [
            { label: "wolfie.ru", href: "https://wolfie.ru" },
        ],
        gallery: [
            "/media/images/projects/wolfie/image1.webp",
            "/media/images/projects/wolfie/image2.webp",
            "/media/images/projects/wolfie/image3.webp",
            "/media/images/projects/wolfie/image4.webp",
            "/media/images/projects/wolfie/image5.webp",
            "/media/images/projects/wolfie/image6.webp",
            "/media/images/projects/wolfie/image7.webp",
        ],
        tasks: [
            "Заложил модульную архитектуру бэкенда и набор внутренних инструментов-абстракций для упрощения разработки",
            "Выстроил модульную архитектуру фронтенд-приложений на Nuxt Layers и паттерне Barrel",
            "Разработал UIKit как самостоятельный Nuxt-слой на базе RekaUI",
            "Реализовал подсистему расписания с поддержкой кастомного RRULE",
            "Создал CRM-подсистему отслеживания жизненного цикла клиента",
            "Объединил клиентские приложения единой аутентификацией и авторизацией",
            "Перевёл продукт на TailwindCSS и TypeScript — это ускорило и упростило создание компонентов",
            "Разработал кастомный WYSIWYG-редактор на базе TipTap для создания и оформления контента",
            "Спроектировал и реализовал редактор портала по аналогии с Tilda",
        ],
        results: [
        ],
    },
    {
        image: "/media/images/projects/visitugra/logo.svg",
        title: "ВизитЮгра",
        subtitle: "Региональная платформа развития туризма",
        summary: "Разработал 9 модулей платформы - от аналитики до многофункциональных редакторов.",
        description: "Единая цифровая туристическая платформа целого региона: каталоги достопримечательностей, отелей, туров и мероприятий. Платформа успешно привлекает новых туристов и позволяет жителям региона открывать для себя родной край, а туроператорам — продвигать свои услуги.",
        contribution: "Моей основной задачей в проекте была разработка новых модулей системы. Я создавал редакторы достопримечательностей, туров и мероприятий, страницы каталогов с фильтрацией, реализовывал механизм оплаты по принципу маркетплейса и писал интеграции со сторонними сервисами.",
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
            "Разработал комплексную систему товаров и услуг с онлайн-продажей",
            "Реализовал оплату по принципу маркетплейса",
            "Создал инструмент построения кратчайших маршрутов между достопримечательностями",
            "Настроил интеграции с Яндекс.Метрикой, Яндекс.Переводчиком, Яндекс.Картами и ЮМани",
            "Внедрил TailwindCSS на портал платформы, ускорив создание UI",
            "Построил пайплайн оптимизации хранения и сжатия изображений",
            "Реализовал квотирование запросов пользователей к сторонним сервисам",
        ],
        results: [
            "50 000+ пользователей в месяц на платформе",
            "Ускорил загрузку страниц на 40%",
            "Уменьшил объём хранения изображений на 40%",
            "Запустил онлайн-продажу товаров и услуг платформы",
            "Ограничил перерасход на сторонние сервисы квотированием запросов",
        ],
    },
    {
        image: "/media/images/projects/letski/logo.svg",
        title: "LetSki",
        subtitle: "Платформа для детской лыжной школы",
        summary: "Спроектировал и разработал архитектуру платформы, которая цифровизовала франшизу в нескольких городах.",
        description: "Платформа, которая позволила франшизе в нескольких городах автомотизировать и цифровизовать свой бизнес. Администраторы создают расписание и ведут детские группы, тренеры проводят тренировки и отмечают посещаемость, а родители могут следить за результатами ребёнка в личном кабинете.",
        contribution: "Спроектировал архитектуру бэкенда и реализовал всю серверную логику: REST API, работу с данными, расписание, учёт посещаемости и интеграции со сторонними сервисами. Позже взял на себя и часть фронтенда — переработал дизайн и обновил интерфейс.",
        role: "Fullstack-разработчик",
        period: "2022 — 2023",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "SCSS", "PHP 8.0", "Laravel 9", "PostgreSQL"],
        links: [],
        gallery: [
            "/media/images/projects/letski/image1.webp",
            "/media/images/projects/letski/image2.webp",
            "/media/images/projects/letski/image3.webp",
        ],
        tasks: [
            "Спроектировал архитектуру бэкенда и REST API сервиса",
            "Реализовал расписание занятий, группы и учёт посещаемости",
            "Разработал серверную логику личных кабинетов тренеров, родителей и администраторов",
            "Настроил интеграции со сторонними сервисами",
            "Реализовал API для мобильного приложения на Vue Native",
            "Развернул сервис на сервере и настроил простой деплой",
            "Переработал часть дизайна и обновил интерфейс фронтенда",
        ],
        results: [
            //
        ],
    },
    {
        image: "/media/images/projects/monitoringugra/logo.svg",
        title: "Мониторинг Югра",
        subtitle: "Государственная аналитическая система региона",
        summary: "Разработал модули отчетов и аналитики для различных организаций правительства.",
        description: "Мониторинг Югра — государственная система сбора и визуализации данных о регионе. Сводит разрозненные показатели — зарплаты, экономику, закупки и другие — в единую аналитическую панель для принятия управленческих решений.",
        contribution: "Это был мой первый проект и первый опыт работы с большой легаси-кодовой базой. Занимался доработкой существующей системы: реализовывал отдельные модули сбора данных и отчётности, разбирался в чужом коде и встраивал новую функциональность.",
        role: "Fullstack-разработчик",
        period: "2020 — 2022",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "PHP 7.0 - 8.0", "Laravel 5 - 8", "PostgreSQL"],
        links: [
            { label: "lk2-monitoring.admhmao.ru", href: "https://lk2-monitoring.admhmao.ru" },
        ],
        gallery: [
            //
        ],
        tasks: [
            "Дорабатывал модули сбора и агрегации данных о регионе",
            "Реализовал формирование отчётов в форматах, требуемых нормативно-правовыми актами",
            "Работал с легаси-кодовой базой и встраивал новую функциональность",
        ],
        results: [
            //
        ],
    },
    {
        image: "/media/images/projects/easeai/logo.svg",
        title: "EaseAI",
        subtitle: "Корпоративный AI-сервис",
        summary: "Разрабатывал AI-платформу для решения рабочих задач с помощью специализированных ИИ-агентов.",
        description: "EaseAI — платформа специализированных ИИ-агентов для типовых рабочих задач. Каждому агенту заданы роль, промпт и подмешивание контекста (RAG), что избавляет пользователя от повторного описания задачи. Решение представляет собой раннюю агентную надстройку над чатом GPT с подбором подходящей модели и готовыми сценариями под конкретную задачу.",
        contribution: "Собрал сервис целиком за три недели как быстрый прототип. На бэкенде спроектировал архитектуру чатов, сообщений, агентов и привязанных к чату моделей, на фронтенде — собственный чат-интерфейс. Подключил несколько языковых моделей (ChatGPT, ГигаЧат, YandexGPT).",
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
            "Спроектировал архитектуру чатов, сообщений, агентов и моделей",
            "Собрал агентную надстройку над чатом: роли, промпты и подмешивание контекста (RAG)",
            "Реализовал удобный чат-интерфейс с потоковой печатью ответов",
            "Подключил языковые модели ChatGPT, ГигаЧат и YandexGPT",
        ],
        results: [
        ],
    },
];

const projectsEn: ProjectData[] = [
    {
        image: "/media/images/projects/wolfie/logo.svg",
        title: "Wolfie",
        subtitle: "Federal platform for children's supplementary education",
        summary: "Designed and built the architecture of a platform made of 5 frontend apps with a shared backend.",
        description: "A platform that digitalizes businesses in supplementary education. It lets organizations build a customizable client area, simplifies scheduling and attendance tracking, and makes the education process transparent for parents and more engaging for children.",
        contribution: "On this project I worked on architecture design, feature development and technology selection. There were many interesting and non-trivial tasks that we solved as a team: subscription payments, calendar, scheduling, gamification, achievements, a custom UIKit, internal DX tools and much more. I also led a small team of 3 developers: distributed tasks, ran code reviews and mentored colleagues. The project gave me a lot of room to experiment and learn.",
        role: "Tech Lead",
        period: "2023 — 2026",
        tags: ["TypeScript", "Vue 3", "Nuxt 4", "TailwindCSS", "PHP 8.3", "Laravel 12", "PostgreSQL"],
        links: [
            { label: "wolfie.ru", href: "https://wolfie.ru" },
        ],
        gallery: [
            "/media/images/projects/wolfie/image1.webp",
            "/media/images/projects/wolfie/image2.webp",
            "/media/images/projects/wolfie/image3.webp",
            "/media/images/projects/wolfie/image4.webp",
            "/media/images/projects/wolfie/image5.webp",
            "/media/images/projects/wolfie/image6.webp",
            "/media/images/projects/wolfie/image7.webp",
        ],
        tasks: [
            "Laid the foundation of the modular backend architecture and a set of internal abstraction tools to simplify development",
            "Built the modular frontend architecture with Nuxt Layers and the barrel pattern",
            "Developed the UIKit as a standalone Nuxt layer on top of RekaUI",
            "Implemented the scheduling subsystem with custom RRULE support",
            "Created a CRM subsystem for tracking the customer lifecycle",
            "Unified the client applications with a single authentication and authorization flow",
            "Migrated the product to TailwindCSS and TypeScript, which sped up and simplified component development",
            "Developed a custom WYSIWYG editor based on TipTap for creating and styling content",
            "Designed and implemented a portal editor similar to Tilda",
        ],
        results: [
        ],
    },
    {
        image: "/media/images/projects/visitugra/logo.svg",
        title: "VisitUgra",
        subtitle: "Regional tourism development platform",
        summary: "Built 9 platform modules, from analytics to feature-rich editors.",
        description: "A single digital tourism platform for an entire region: catalogs of attractions, hotels, tours and events. The platform attracts new tourists, helps locals rediscover their region, and lets tour operators promote their services.",
        contribution: "My main focus was building new modules of the system: I created editors for attractions, tours and events, catalog pages with filtering, implemented a marketplace-style payment mechanism and wrote integrations with third-party services.",
        role: "Fullstack Developer",
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
            "Developed a complete goods and services system with online sales",
            "Implemented marketplace-style payments",
            "Built a tool that constructs the shortest routes between attractions",
            "Set up integrations with Yandex.Metrica, Yandex.Translate, Yandex.Maps and YooMoney",
            "Introduced TailwindCSS to the platform portal, speeding up UI development",
            "Built a pipeline for image storage optimization and compression",
            "Implemented request quotas for users calling third-party services",
        ],
        results: [
            "50,000+ monthly users on the platform",
            "Improved page load speed by 40%",
            "Reduced image storage footprint by 40%",
            "Launched online sales of the platform's goods and services",
            "Capped overspending on third-party services with request quotas",
        ],
    },
    {
        image: "/media/images/projects/letski/logo.svg",
        title: "LetSki",
        subtitle: "Platform for a kids' ski school",
        summary: "Designed and built the architecture of a platform that digitalized a franchise across several cities.",
        description: "A platform that helped a multi-city franchise automate and digitalize its business. Admins schedule classes and manage kids' groups, coaches run trainings and mark attendance, and parents follow their child's progress in a personal account.",
        contribution: "Designed the backend architecture and implemented all server-side logic: REST API, data handling, scheduling, attendance tracking and third-party integrations. Later took over part of the frontend — reworked the design and refreshed the UI.",
        role: "Fullstack Developer",
        period: "2022 — 2023",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "SCSS", "PHP 8.0", "Laravel 9", "PostgreSQL"],
        links: [],
        gallery: [
            "/media/images/projects/letski/image1.webp",
            "/media/images/projects/letski/image2.webp",
            "/media/images/projects/letski/image3.webp",
        ],
        tasks: [
            "Designed the service's backend architecture and REST API",
            "Implemented class scheduling, groups and attendance tracking",
            "Built the server-side logic for coach, parent and administrator accounts",
            "Set up integrations with third-party services",
            "Implemented the API for a Vue Native mobile app",
            "Deployed the service to a server and set up a simple deployment flow",
            "Reworked part of the design and refreshed the frontend UI",
        ],
        results: [
            //
        ],
    },
    {
        image: "/media/images/projects/monitoringugra/logo.svg",
        title: "Monitoring Ugra",
        subtitle: "Government analytics system for the region",
        summary: "Built reporting and analytics modules for various government organizations.",
        description: "Monitoring Ugra is a government system that collects and visualizes regional data. It brings scattered metrics — salaries, economy, procurement and more — into a single analytics dashboard for management decisions.",
        contribution: "This was my first project and my first experience with a large legacy codebase. I worked on an existing system: implemented data collection and reporting modules, navigated other people's code and integrated new features.",
        role: "Fullstack Developer",
        period: "2020 — 2022",
        tags: ["JavaScript", "Vue 2", "Nuxt 2", "PHP 7.0 - 8.0", "Laravel 5 - 8", "PostgreSQL"],
        links: [
            { label: "lk2-monitoring.admhmao.ru", href: "https://lk2-monitoring.admhmao.ru" },
        ],
        gallery: [
            //
        ],
        tasks: [
            "Enhanced the modules collecting and aggregating regional data",
            "Implemented report generation in the formats required by regulations",
            "Worked with a legacy codebase and integrated new features",
        ],
        results: [
            //
        ],
    },
    {
        image: "/media/images/projects/easeai/logo.svg",
        title: "EaseAI",
        subtitle: "Corporate AI service",
        summary: "Developed an AI platform for solving work tasks with specialized AI agents.",
        description: "EaseAI is a platform of specialized AI agents for typical work tasks. Each agent has a role, a prompt and context injection (RAG), so users don't have to describe the task again. It is an early agent layer on top of a GPT chat, with model selection and ready-made scenarios for specific tasks.",
        contribution: "Built the entire service in three weeks as a fast prototype. On the backend I designed the architecture of chats, messages, agents and chat-bound models; on the frontend, a custom chat UI. Connected several language models (ChatGPT, GigaChat, YandexGPT).",
        role: "Fullstack Developer",
        period: "2024",
        tags: ["ChatGPT / GigaChat / YandexGPT", "PHP 8.0", "Laravel 9", "SQLite", "TypeScript", "Vue 3", "Nuxt 3", "TailwindCSS"],
        links: [],
        gallery: [
            "/media/images/projects/easeai/image1.webp",
            "/media/images/projects/easeai/image2.webp",
            "/media/images/projects/easeai/image3.webp",
        ],
        tasks: [
            "Designed the architecture of chats, messages, agents and models",
            "Built the agent layer on top of the chat: roles, prompts and context injection (RAG)",
            "Implemented a convenient chat UI with streaming responses",
            "Connected the ChatGPT, GigaChat and YandexGPT language models",
        ],
        results: [
        ],
    },
];

const projectsByLocale = {
    ru: projectsRu,
    en: projectsEn,
};



export type {
    ProjectLink,
    ProjectData,
};

export {
    projectsByLocale,
};
