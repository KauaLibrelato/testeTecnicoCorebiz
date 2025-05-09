import { axiosAdapter } from "../../infra";
import { IPhoto, IPhotoResponse } from "../../utils/types";

export async function getRandomPhotos() {
    const { response } = await axiosAdapter<IPhoto[]>({
        method: "get",
        url: "/photos/random",
        query: {
            count: 15,
        },
        errorTitle: "Error when fetching random photos",
    });
    return response;
}

export async function getQueryPhotos(page: number, query: string) {
    const { response } = await axiosAdapter<IPhotoResponse>({
        method: "get",
        url: "/search/photos",
        query: {
            page,
            per_page: 15,
            query,
        },
        errorTitle: "Error when fetching photos",
    });

    return response;
}
