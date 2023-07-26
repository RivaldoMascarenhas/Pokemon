"use client";
import { createContext, useReducer } from "react";
import * as Types from "@/@types";
import { pokemonReducer } from "@/reducer/reducer";
import { useGetApi } from "@/hooks";

export const PokemonContext = createContext({} as Types.PokemonContextProps);

const typeStateInitial: Types.TypeStateProps = {
  AllNamePokemon: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  } as Types.AllNamePokemonProps,
  pokemons: [] as Types.ResponseObject[],
  isLoading: true,
  favorite: [] as Types.ResponseObject[],
  page: "/",
};

export const PokemonProvider = ({ children }: Types.PokemonProviderProps) => {
  const [state, dispatch] = useReducer(pokemonReducer, typeStateInitial);
  useGetApi({ state, dispatch });
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
