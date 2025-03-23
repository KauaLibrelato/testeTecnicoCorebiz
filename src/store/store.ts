import { create } from "zustand";

import { IPhoto } from "../utils/types";

export interface PhotoState {
    photos: IPhoto[];
    setPhotos: (newPhotos: IPhoto[]) => void;
}

export const usePhotosStore = create<PhotoState>((set) => ({
    photos: [],
    setPhotos: (newPhotos: IPhoto[]) => set({ photos: newPhotos }),
}));
