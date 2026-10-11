import { projectsByLocale } from "~/data/projects";

export function useProjects() {
    const { locale } = useLocale();

    return computed(() => projectsByLocale[locale.value]);
}
