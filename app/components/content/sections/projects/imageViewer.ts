import type { InjectionKey } from "vue";

type ImageViewerApi = {
    open: (images: string[], startIndex: number) => void;
};

const imageViewerKey: InjectionKey<ImageViewerApi> = Symbol("image-viewer");


export {
    imageViewerKey,
};

export type {
    ImageViewerApi,
};
