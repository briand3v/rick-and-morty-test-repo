import axios from 'axios'

export const fetchCharactersShow = async () => axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/rickandmorty/allCharacters`);
