"use client";
import * as Types from "@/@types";
import { useGetApi } from "@/api/pokemon";
import { pokemonReducer } from "@/reducer/reducer";
import { createContext, useContext, useReducer } from "react";

const PokemonContext = createContext({} as Types.PokemonContextProps);

const typeStateInitial: Types.TypeStateProps = {
  AllNamePokemon: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  } as Types.AllNamePokemonProps,
  pokemons: [] satisfies Types.ResponseObject[],
  isLoading: true,
  favorite: [] satisfies Types.ResponseObject[],
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

export const usePokemonContext = () => useContext(PokemonContext);
