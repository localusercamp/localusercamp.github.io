export interface UseStringTypingAnimatorOptions {
    /**
     * Диапазон размеров группы символов (включительно).
     * @default { min: 3, max: 4 }
     */
    groupSize?: NumberRange;

    /**
     * Диапазон пауз между группами, мс (включительно). Для каждой группы берётся
     * случайное значение из интервала.
     * @default { min: 200, max: 300 }
     */
    groupDelay?: NumberRange;

    /**
     * Задержка перед началом печати, мс.
     * @default 0
     */
    initialDelay?: number;

    /**
     * Задержка между символами внутри группы, мс.
     * @default 50
     */
    charDelay?: number;

    /**
     * Длительность появления символа, мс.
     * @default 100
     */
    charAppearDuration?: number;
}

type TypingSettings = Required<UseStringTypingAnimatorOptions>;

type TypingSchedule = {
    chars: TypedChar[];
    caretDelay: string;
};

type TypedChar = {
    char: string;
    index: number;
    delay: string;
};

type NumberRange = {
    min: number;
    max: number;
};

/**
 * Анимирует «печать» строки: разбивает её на случайные группы символов и
 * возвращает задержки появления каждого символа и включения мигания каретки.
 */
export function useStringTypingAnimator(
    text: MaybeRefOrGetter<string>,
    options: UseStringTypingAnimatorOptions = {},
) {
    const {
        groupSize = { min: 3, max: 4 },
        groupDelay = { min: 200, max: 300 },
        initialDelay = 0,
        charDelay = 50,
        charAppearDuration = 100,
    } = options;

    const settings: TypingSettings = {
        groupSize,
        groupDelay,
        initialDelay,
        charDelay,
        charAppearDuration,
    };

    // Раскладка случайна, но считается один раз на сервере и сериализуется
    // Nuxt. При гидратации берётся готовое значение, поэтому обычный
    // Math.random() не даёт рассинхрона сервера и клиента.
    const schedule = useState<TypingSchedule>(() => createSchedule(toValue(text), settings));

    // Текст может измениться (например, при смене языка) — считаем раскладку заново.
    watch(() => toValue(text), (value) => {
        schedule.value = createSchedule(value, settings);
    });

    return {
        /**
         * Символы строки с задержкой появления каждого.
         */
        chars: computed<TypedChar[]>(() => schedule.value.chars),

        /**
         * Задержка включения мигания каретки — после появления последнего символа.
         */
        caretDelay: computed<string>(() => schedule.value.caretDelay),

        /**
         * Длительность появления символа как CSS-значение (например `120ms`).
         */
        charAppearDuration: `${charAppearDuration}ms`,
    };
}

/**
 * Разбивает строку на группы и считает время появления каждого символа.
 */
function createSchedule(text: string, settings: TypingSettings): TypingSchedule {
    const characters = [...text];
    const groups = splitIntoGroups(characters.length, settings.groupSize);

    const chars: TypedChar[] = [];
    let time = settings.initialDelay;
    let lastCharTime = 0;
    let index = 0;

    for (const size of groups) {
        if (index > 0) {
            time += randomInt(settings.groupDelay);
        }

        for (const char of characters.slice(index, index + size)) {
            chars.push({
                char,
                index,
                delay: `${time}ms`,
            });

            lastCharTime = time;
            time += settings.charDelay;
            index += 1;
        }
    }

    return {
        chars,
        caretDelay: `${lastCharTime + settings.charAppearDuration}ms`,
    };
}

/**
 * Случайное целое из диапазона `range` включительно.
 */
function randomInt(range: NumberRange): number {
    return range.min + Math.floor(Math.random() * (range.max - range.min + 1));
}

/**
 * Делит строку на группы так, чтобы размер каждой был в пределах `range`.
 * Символы раскладываются максимально поровну, а неделимый остаток достаётся
 * случайным группам.
 */
function splitIntoGroups(length: number, range: NumberRange): number[] {
    if (length <= 0) {
        return [];
    }

    if (length <= range.max || range.min < 1 || range.min > range.max) {
        return [length];
    }

    const minCount = Math.ceil(length / range.max);
    const maxCount = Math.floor(length / range.min);

    if (minCount > maxCount) {
        return [length];
    }

    const count = randomInt({ min: minCount, max: maxCount });
    const base = Math.floor(length / count);
    const grown = new Set<number>();

    while (grown.size < length - base * count) {
        grown.add(randomInt({ min: 0, max: count - 1 }));
    }

    return Array.from({ length: count }, (_, index) => base + (grown.has(index) ? 1 : 0));
}
