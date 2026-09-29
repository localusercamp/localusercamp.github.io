type Locale = "ru" | "en";

export function useLocale() {
    const $locale = useCookie<Locale>("locale", { default: () => "ru" });

    function setLocale(locale: Locale): void {
        $locale.value = locale;
    }

    return {
        locale: readonly($locale),

        setLocale,
    };
}
