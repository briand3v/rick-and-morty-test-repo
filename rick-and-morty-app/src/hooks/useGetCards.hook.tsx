import { useInfiniteQuery } from 'react-query'
import { fetCharacters } from '../lib/services/fetchCharactersShow';

export function useGetCards() {
    return useInfiniteQuery(
        ['getCards'],
        async ({ pageParam = 1 }) => {
            return await fetCharacters(pageParam)
        }, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage?.pageData?.hasNextPage) {
                return pages.length + 1;
            }
        }
    }
    )
}