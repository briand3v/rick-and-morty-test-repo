import react from 'react'
import { useInfiniteQuery } from 'react-query'
import { fetchRickAndMorty } from '../lib/services/fetchRickAndMorty';

export function useGetCards() {
    return useInfiniteQuery(
        ['getCards'],
        async ({ pageParam = 1 }) => {
            return await fetchRickAndMorty(pageParam)
        }, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.pageData.hasNextPage) {
                return pages.length + 1;
            }
        }
    }
    )
}