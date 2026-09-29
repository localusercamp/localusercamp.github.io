// import { useDark } from "@vueuse/core";

export function useDarkMode() {
    const mode = useColorMode();

    const isDarkMode = computed<boolean>(() => mode.value === "dark");
    // const cookie = useCookie<string>("is-dark-mode");

    // const isDarkMode = useDark({
    //     selector: "html",
    //     valueDark: "dark",
    //     valueLight: "light",
    //     initialValue: "dark",
    //     // storage: {
    //     //     getItem(_: string) {
    //     //         return cookie.value;
    //     //     },
    //     //     setItem(_: string, value: string) {
    //     //         cookie.value = value;
    //     //     },
    //     //     removeItem(_: string) {
    //     //         cookie.value = "";
    //     //     },
    //     // },
    // });

    function toggleDarkMode(): void {
        mode.preference = isDarkMode.value ? "light" : "dark";
    }

    return {
        isDarkMode,
        toggleDarkMode,
    };
}
