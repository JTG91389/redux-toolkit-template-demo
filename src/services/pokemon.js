import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `${name}`,
    }),
    getPokemonList: builder.query({
      query: (page = 0) => `?limit=20&offset=${page}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;
