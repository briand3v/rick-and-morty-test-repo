import axios from 'axios'

export const getRickAndMortyCardsByPage = (page: number) => axios.get(`${process.env.PUBLIC_URL}/rickandmorty?page=${page}`)