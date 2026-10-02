export interface UseBooleanStateOptions {
    /**
     * Начальное значение.
     * @default false
     */
    initial?: boolean;
}

/**
 * Простой композабл для управления boolean состоянием.
 */
export function useBooleanState(options: UseBooleanStateOptions = {}) {
    const {
        initial = false,
    } = options;

    const state = ref<boolean>(initial);

    function on(): void {
        state.value = true;
    }

    function off(): void {
        state.value = false;
    }

    function toggle(): void {
        state.value = !state.value;
    }

    return {
        /**
         * Текущее состояние (`true | false`).
         */
        state,

        /**
         * Переводит в состояние `true`.
         */
        on,

        /**
         * Переводит в состояние `false`.
         */
        off,

        /**
         * Переводит в противоположное состояние.
         */
        toggle,
    };
}
