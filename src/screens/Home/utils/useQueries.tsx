import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getQueryPhotos, getRandomPhotos } from "../../../services/Photos";
import { usePhotosStore } from "../../../store/store";
import { IPhoto } from "../../../utils/types";

export function useQueries() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { photos, setPhotos } = usePhotosStore();

    const { isLoading, refetch, fetchNextPage, isFetching } = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["photos", searchQuery],
        staleTime: 300000, // 5 minutos para que as imagens não sofram alterações
        queryFn: async ({ pageParam = 1 }) => {
            let fetchedPhotos: IPhoto[] | undefined = [];
            if (searchQuery) {
                const queryPhotos = await getQueryPhotos(pageParam, searchQuery);
                console.log("QUERYPHOTOS");
                fetchedPhotos = queryPhotos?.results ?? [];
            } else {
                const randomPhotos = await getRandomPhotos();
                console.log("RANDOMPHOTOS");
                fetchedPhotos = randomPhotos ?? [];
            }

            if (pageParam === 1) {
                setPhotos(fetchedPhotos ?? []);
            } else {
                setPhotos([...photos, ...(fetchedPhotos ?? [])]);
            }

            return pageParam;
        },
        getNextPageParam: (lastPage) => lastPage + 1,
    });

    return {
        setSearchQuery,
        isLoading,
        refetch,
        fetchNextPage,
        isFetching,
    };
}
