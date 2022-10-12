import { getRickAndMortyCardsByPage } from '../api/rick-and-morty.api';

export const fetchRickAndMorty = async (page: number): Promise<any> => {
    let currentPage = page ?? 1
    const data = getRickAndMortyCardsByPage(currentPage)
    return await data.then(res => res.data)
};
