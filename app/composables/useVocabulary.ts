type VocabularyKey = keyof typeof ru | keyof typeof en;

const ru = {
    nickname: "localusercamp",
    first_name: "Евгений",
    last_name: "Полозов",
    grade: "Senior Fullstack Developer",
    about_me: "Привет! Я Fullstack-разработчик с большим опытом в создании цифровых систем\nдля бизнеса и государства. Ценю программирование как инженерную дисциплину\nи постоянно изучаю что-то новое. Активно слежу за развитием Open Source проектов\nи использую ИИ для автоматизации рутины.",
    portfolio: "Портфолио",
    experience_start_date: "14.02.2020",
    contact_me: "Связаться",
    download_cv: "Скачать CV",
    dt_years_of_experience: "лет опыта",
    dv_amount_of_projects: "7+", // TODO: посчитать
    dt_amount_of_projects: "проектов",
    dv_amount_of_technologies: "15+", // TODO: посчитать
    dt_amount_of_technologies: "технологии",
    skills_pretitle: "Навыки",
    skills_title: "Что я умею",
    skills_subtitle: "Языки программирования, технологии и инструменты с которыми я умею работать.",
} as const;

const en = {

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
