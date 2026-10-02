type WindowBox = {
    width: Readonly<Ref<number>>;
    height: Readonly<Ref<number>>;
    left: Readonly<Ref<number>>;
    top: Readonly<Ref<number>>;
};

const identifier = Symbol("window-box");

export function provideWindowBox(box: WindowBox): void {
    provide<WindowBox>(identifier, box);
}

export function useWindowBox(): WindowBox {
    const box = inject<WindowBox>(identifier);

    if (!box) {
        throw createError({
            message: "You are trying to use WindowBox but it was not provided!",
        });
    }

    return box;
}
