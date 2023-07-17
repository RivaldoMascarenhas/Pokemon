"use client";
import { createContext, useReducer, useEffect } from "react";
import {
  AllNamePokemonProps,
  PokemonContextProps,
  PokemonProviderProps,
  ResponseObject,
  TypeStateProps,
} from "@/@types";
import { pokemonReducer } from "@/reducer/reducer";
import { useGetApi } from "@/hooks";

export const PokemonContext = createContext({} as PokemonContextProps);

const typeStateInitial: TypeStateProps = {
  AllNamePokemon: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  } as AllNamePokemonProps,
  pokemons: [] as ResponseObject[],
  isLoading: false,
  favorite: [] as ResponseObject[],
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [state, dispatch] = useReducer(pokemonReducer, typeStateInitial);
  useGetApi({ state, dispatch });

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
