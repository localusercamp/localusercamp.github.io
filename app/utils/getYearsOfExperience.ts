const EXPERIENCE_START_DATE = new Date(2020, 1, 14, 0, 0, 0, 0);

export function getYearsOfExperience(): string {
    const now = new Date();

    const from = new Date(EXPERIENCE_START_DATE);

    const years = now.getFullYear() - from.getFullYear();

    return `${years}+`;
}
