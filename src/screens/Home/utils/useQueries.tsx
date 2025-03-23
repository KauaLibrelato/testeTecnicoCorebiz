import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getQueryPhotos, getRandomPhotos } from "../../../services/Photos";
import { IPhoto } from "../../../utils/types";

export function useQueries() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { data, isLoading, refetch, fetchNextPage, isFetching } = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["photos", searchQuery],
        staleTime: 1000 * 60 * 5,
        queryFn: async ({ pageParam = 1 }) => {
            let fetchedPhotos: IPhoto[] = [];
            if (searchQuery) {
                const queryPhotos = await getQueryPhotos(pageParam, searchQuery);
                fetchedPhotos = queryPhotos?.results ?? [];
            } else {
                const randomPhotos = await getRandomPhotos();
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
