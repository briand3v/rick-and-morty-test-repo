import { fetchCharactersShow } from '../api/rick-and-morty.api';

export const fetCharacters = async (page: number): Promise<any> => {
    // paging characters to do ..
    const response = await fetchCharactersShow()
    return response.data;
};
