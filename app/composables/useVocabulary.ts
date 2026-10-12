type VocabularyKey = keyof typeof ru | keyof typeof en;

const siteUrl = import.meta.dev ? "http://localhost:3000/" : "https://localusercamp.github.io/";

const ru = {
    nickname: "localusercamp",
    site_url: siteUrl,
    first_name: "Евгений",
    last_name: "Полозов",
    grade: "Senior Fullstack Developer",
    about_me: "Привет! Я Fullstack-разработчик с большим опытом в создании цифровых систем\nдля бизнеса и государства. Ценю программирование как инженерную дисциплину\nи постоянно изучаю что-то новое. Активно слежу за развитием Open Source проектов\nи использую ИИ для автоматизации рутины.",
    portfolio: "Портфолио",
    seo_title: "Евгений Полозов — Senior Fullstack Developer (Vue/Nuxt, Laravel)",
    seo_description: "Портфолио Senior Fullstack-разработчика: 6+ лет опыта, проекты в образовании, туризме и AI. Стек: TypeScript, Vue, Nuxt, PHP, Laravel. Навыки, контакты и CV.",
    experience_start_date: "14.02.2020",
    contact_me: "Связаться",
    download_cv: "Скачать CV",
    dt_years_of_experience: "лет опыта",
    dv_years_of_experience: "6+",
    dv_amount_of_projects: "7+", // TODO: посчитать
    dt_amount_of_projects: "проектов",
    dv_amount_of_technologies: "15+", // TODO: посчитать
    dt_amount_of_technologies: "технологии",
    skills_title: "Навыки",
    skills_subtitle: "Что я умею",
    skills_description: "Языки программирования, технологии и инструменты с которыми я умею работать.",
    projects_title: "Проекты",
    projects_subtitle: "Что я делал",
    projects_description: "Проекты для бизнеса и государства, в которых я принимал участие.",
    image_viewer_title: "Просмотр изображений",
    contacts_title: "Контакты",
    contacts_subtitle: "Как связаться",
    contacts_description: "Пишите по любым вопросам, отвечу в течении дня.",
    contact_email: "Email",
    contact_email_address: "localusercamp.job@proton.me",
    contact_telegram: "Telegram",
    contact_telegram_username: "localusercamp",
    contact_github: "GitHub",
    contact_github_url: "https://github.com/localusercamp",
    error_not_found_title: "Страница не найдена",
    error_not_found_description: "Возможно, страница переехала или адрес указан с ошибкой.",
    error_generic_title: "Что-то пошло не так",
    error_generic_description: "Попробуйте обновить страницу или вернуться на главную.",
    error_back_home: "Вернуться на главную",
} as const;

const en = {
    nickname: "localusercamp",
    site_url: siteUrl,
    first_name: "Evgeniy",
    last_name: "Polozov",
    grade: "Senior Fullstack Developer",
    about_me: "Hi! I'm a Fullstack developer with extensive experience building digital systems\nfor businesses and governments. I treat programming as an engineering discipline\nand keep learning something new. I actively follow Open Source projects\nand use AI to automate routine work.",
    portfolio: "Portfolio",
    seo_title: "Evgeniy Polozov — Senior Fullstack Developer (Vue/Nuxt, Laravel)",
    seo_description: "Portfolio of a Senior Fullstack developer: 6+ years of experience, projects in education, tourism and AI. Stack: TypeScript, Vue, Nuxt, PHP, Laravel. Skills, contacts and CV.",
    experience_start_date: "14.02.2020",
    contact_me: "Get in touch",
    download_cv: "Download CV",
    dt_years_of_experience: "years of experience",
    dv_years_of_experience: "6+",
    dv_amount_of_projects: "7+", // TODO: посчитать
    dt_amount_of_projects: "projects",
    dv_amount_of_technologies: "15+", // TODO: посчитать
    dt_amount_of_technologies: "technologies",
    skills_title: "Skills",
    skills_subtitle: "What I can do",
    skills_description: "Programming languages, technologies and tools I work with.",
    projects_title: "Projects",
    projects_subtitle: "What I've done",
    projects_description: "Projects for businesses and governments that I took part in.",
    image_viewer_title: "Image viewer",
    contacts_title: "Contacts",
    contacts_subtitle: "How to contact me",
    contacts_description: "Feel free to write about anything — I reply within a day.",
    contact_email: "Email",
    contact_email_address: "localusercamp.job@proton.me",
    contact_telegram: "Telegram",
    contact_telegram_username: "localusercamp",
    contact_github: "GitHub",
    contact_github_url: "https://github.com/localusercamp",
    error_not_found_title: "Page not found",
    error_not_found_description: "The page may have moved, or the address is incorrect.",
    error_generic_title: "Something went wrong",
    error_generic_description: "Try refreshing the page or going back home.",
    error_back_home: "Back to home",
} as const;

const vocabularies = { ru, en };



export function useVocabulary() {
    const { locale } = useLocale();

    function v(key: VocabularyKey): string {
        const vocabulary = vocabularies[locale.value];

        if (!Object.hasOwn(vocabulary, key)) {
            console.warn("Undefined vocabulary key", {
                locale: locale.value,
                vocabulary,
                key,
            });
        }

        return vocabulary[key as keyof typeof vocabulary] ?? key;
    }

    function vs(keys: VocabularyKey[], separator: string = " "): string {
        return keys.map(key => v(key)).join(separator);
    }

    return { v, vs };
}
