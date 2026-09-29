type Vocabulary = {
    nickname: string;
    first_name: string;
    last_name: string;
};
type VocabularyKey = keyof Vocabulary;

const ru: Partial<Vocabulary> = {
    nickname: "localusercamp",
    first_name: "Евгений",
    last_name: "Полозов",
};

const en: Partial<Vocabulary> = {

} as const;

const vocabularies = { ru, en };



export function useVocabulary() {
    const { locale } = useLocale();

    function v(key: VocabularyKey): string {
        return vocabularies[locale.value][key] ?? key;
    }

    function vs(keys: VocabularyKey[], separator: string = " "): string {
        return keys.map(key => v(key)).join(separator);
    }

    return { v, vs };
}
