import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getQueryPhotos, getRandomPhotos } from "../../../services/Photos";
import { IPhoto } from "../../../utils/types";

export function useQueries() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { data, isLoading, refetch, fetchNextPage, isFetching } = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["photos", searchQuery],
        staleTime: 300000, // 5 minutos para que as imagens não sofram alterações enquanto app estiver aberto
        queryFn: async ({ pageParam = 1 }) => {
            let fetchedPhotos: IPhoto[] = [];
            if (searchQuery) {
                const queryPhotos = await getQueryPhotos(pageParam, searchQuery);
                console.log("📸 QUERYPHOTOS");
                fetchedPhotos = queryPhotos?.results ?? [];
            } else {
                const randomPhotos = await getRandomPhotos();
                console.log("🎲 RANDOMPHOTOS");
                fetchedPhotos = randomPhotos ?? [];
            }

            return {
                page: pageParam,
                photos: fetchedPhotos,
            };
        },
        getNextPageParam: (lastPage) => lastPage.page + 1,
    });

    return {
        searchQuery,
        setSearchQuery,
        isLoading,
        refetch,
        fetchNextPage,
        isFetching,
        data,
    };
}
